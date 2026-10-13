import { Redirect, useRouter } from "expo-router";
import { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mascot } from "@/components/mascot/Mascot";
import { CheckIcon, ClockIcon, FlameIcon, StarIcon } from "@/components/ui/Icons";
import { BadgeCard } from "@/components/ui/BadgeCard";
import { LevelBar } from "@/components/ui/LevelBar";
import { ResultStat } from "@/components/ui/ResultStat";
import { badges } from "@/constants/badges";
import { colors, darkTones } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import { playSound } from "@/hooks/playSound";
import { toDay } from "@/lib/leitner";
import { levelBar } from "@/lib/level";
import { reviewOutlook } from "@/lib/progress";
import { useProgressStore } from "@/store/progressStore";
import { useResultStore } from "@/store/resultStore";
import { useReviewStore } from "@/store/reviewStore";

const screen = { flex: 1, backgroundColor: colors.background };

function outlookText(dueToday: number, nextInDays: number | null): string {
  if (dueToday > 0) return `${dueToday} feladat még ma visszajön, hogy biztosan menjen.`;
  if (nextInDays === 1) return "A következő ismétlés holnap vár rád.";
  if (nextInDays !== null) return `A következő ismétlés ${nextInDays} nap múlva vár rád.`;
  return "Ma nincs több ismétlés.";
}

export default function ResultScreen() {
  const router = useRouter();
  const last = useResultStore((s) => s.last);
  const streak = useProgressStore((s) => s.streak);
  const cards = useReviewStore((s) => s.cards);

  // Az XP-csempe rugós beúszása
  const pop = useSharedValue(0.7);
  useEffect(() => {
    pop.value = withDelay(300, withSpring(1, { damping: 8 }));
  }, [pop]);
  // A hang az XP-csempe beúszásával együtt szól
  const hasResult = last !== null;
  useEffect(() => {
    if (!hasResult) return;
    const timer = setTimeout(() => playSound("finish"), 300);
    return () => clearTimeout(timer);
  }, [hasResult]);
  const popStyle = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }] }));

  if (!last) return <Redirect href="/" />;

  const { correct, total, xpEarned, xpBefore, exerciseIds, topicId } = last;
  const earnedBadges = badges.filter((b) => last.newBadges.includes(b.id));
  const bar = levelBar(xpBefore, xpBefore + xpEarned);
  const outlook = reviewOutlook(exerciseIds, cards, toDay(new Date()));
  const perfect = correct === total;

  return (
    <SafeAreaView style={screen}>
      <ScrollView contentContainerClassName="flex-grow items-center justify-center gap-6 p-6">
        <View className="w-full max-w-[560px] items-center gap-6">
          <Mascot state="celebrate" size={200} />
          <Text className="font-title text-[52px] leading-[62px] text-primary">{perfect ? "Hibátlan, Kira!" : "Szép munka!"}</Text>

          <View className="w-full flex-row gap-4">
            <ResultStat value={`${correct}/${total}`} label="helyes" />
            <Animated.View style={popStyle} className="flex-1 flex-row">
              <ResultStat value={`+${xpEarned}`} label="szerzett XP" icon={<StarIcon size={30} color={colors.accent} outline />} />
            </Animated.View>
            <ResultStat value={String(streak)} label="napos sorozat" icon={<FlameIcon size={30} color={colors.error} outline />} />
          </View>

          {last.goalReached && (
            <View className="w-full flex-row items-center gap-3 rounded-card border-l-[6px] border-success bg-success/15 px-5 py-4">
              <CheckIcon size={26} color={darkTones.success} />
              <Text className="flex-1 font-title text-[20px]" style={{ color: darkTones.success }}>
                Mai cél teljesítve!
              </Text>
            </View>
          )}

          {earnedBadges.length > 0 && (
            <View className="w-full gap-3">
              <Text className="text-center font-title text-[24px] text-primary">{earnedBadges.length === 1 ? "Új jelvényt szereztél!" : "Új jelvényeket szereztél!"}</Text>
              <Animated.View style={popStyle} className="flex-row flex-wrap justify-center gap-4">
                {earnedBadges.map((badge) => (
                  <View key={badge.id} className="w-[150px] flex-row">
                    <BadgeCard badge={badge} unlocked />
                  </View>
                ))}
              </Animated.View>
            </View>
          )}

          <View className="w-full">
            <LevelBar {...bar} />
          </View>

          <View className="w-full flex-row items-center gap-3 rounded-card border-l-[6px] border-secondary bg-secondary/10 px-5 py-4">
            <ClockIcon size={26} color={darkTones.secondary} />
            <Text className="flex-1 font-task text-[18px] leading-6" style={{ color: darkTones.secondary }}>
              {outlookText(outlook.dueToday, outlook.nextInDays)}
            </Text>
          </View>

          <View className="w-full flex-row gap-4">
            <Pressable
              accessibilityRole="button"
              onPress={() => router.replace({ pathname: "/practice/[topicId]", params: { topicId } })}
              className="min-h-[68px] flex-1 items-center justify-center rounded-card bg-primary"
              style={({ pressed }) => [{ ...softShadow, shadowColor: colors.primary, shadowOpacity: 0.3 }, { transform: [{ scale: pressed ? 0.98 : 1 }] }]}
            >
              <Text className="font-title text-[24px] text-surface">Még egy kör</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              onPress={() => router.back()}
              className="min-h-[68px] flex-1 items-center justify-center rounded-card border-2 border-text/15 bg-surface"
              style={({ pressed }) => ({ transform: [{ scale: pressed ? 0.98 : 1 }] })}
            >
              <Text className="font-title text-[24px] text-text">Kész</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
