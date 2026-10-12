import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Pressable, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mascot } from "@/components/mascot/Mascot";
import { FlameIcon, StarIcon } from "@/components/ui/Icons";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatPill } from "@/components/ui/StatPill";
import { colors } from "@/constants/colors";
import { useStoresHydrated } from "@/hooks/useStoresHydrated";
import { toDay } from "@/lib/leitner";
import { currentStreak } from "@/lib/streak";
import { useProgressStore } from "@/store/progressStore";

const screen = { flex: 1, backgroundColor: colors.background };

export default function HomeScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const landscape = width > height && width >= 700;
  const hydrated = useStoresHydrated();
  const { xp, streak, lastPracticeDate, dailyGoalDone } = useProgressStore();
  const today = toDay(new Date());

  // Új napon a napi cél újra nyitott
  useEffect(() => {
    if (hydrated) useProgressStore.getState().startDay(toDay(new Date()));
  }, [hydrated]);

  return (
    <SafeAreaView style={screen}>
      <ScrollView contentContainerClassName={`flex-grow items-center justify-center gap-10 p-8 ${landscape ? "flex-row" : ""}`}>
        <View className={`items-center justify-center ${landscape ? "flex-1" : ""}`}>
          <View className="absolute left-[8%] top-[6%] h-6 w-6 rounded-full bg-accent/60" />
          <View className="absolute right-[10%] top-[18%] h-4 w-4 rounded-full bg-secondary/60" />
          <View className="absolute right-[18%] top-[2%]">
            <StarIcon size={28} color={colors.accent} />
          </View>
          <Mascot state="base" size={landscape ? 340 : 200} />
          <View className="-mt-3 h-[36px] w-[70%] rounded-full bg-secondary/25" />
        </View>

        <View className={`w-full max-w-[520px] gap-6 ${landscape ? "flex-1" : ""}`}>
          <View className="gap-1">
            <Text className="font-title text-[48px] leading-[56px] text-primary">Szia Kira!</Text>
            <Text className="font-body text-[22px] text-textMuted">Készen állsz a gyakorlásra?</Text>
          </View>

          <View className="flex-row gap-4">
            <StatPill icon={<FlameIcon size={32} color={colors.accent} />} value={currentStreak(streak, lastPracticeDate, today)} label="napos sorozat" />
            <StatPill icon={<StarIcon size={32} color={colors.accent} />} value={xp} label="XP" />
          </View>

          <View className="gap-2">
            <Text className="font-task text-[18px] text-text">{dailyGoalDone ? "Mai cél: kész! 🎉" : "Mai cél: 1 gyakorlókör"}</Text>
            <ProgressBar tone="success" value={dailyGoalDone ? 1 : 0} />
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/subjects")}
            className="min-h-[72px] items-center justify-center rounded-card bg-primary"
            style={({ pressed }) => ({ transform: [{ scale: pressed ? 0.98 : 1 }] })}
          >
            <Text className="font-title text-[28px] text-surface">Kezdjük!</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
