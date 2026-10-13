import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Pressable, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mascot } from "@/components/mascot/Mascot";
import { ArrowRightIcon, CheckIcon, FlameIcon, StarIcon } from "@/components/ui/Icons";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatPill } from "@/components/ui/StatPill";
import { colors, darkTones } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import { useStoresHydrated } from "@/hooks/useStoresHydrated";
import { toDay } from "@/lib/leitner";
import { currentStreak } from "@/lib/streak";
import { useProgressStore } from "@/store/progressStore";

const screen = { flex: 1, backgroundColor: colors.background };
const startShadow = { ...softShadow, shadowColor: colors.primary, shadowOpacity: 0.3, shadowOffset: { width: 0, height: 8 }, shadowRadius: 16 };

export default function HomeScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const landscape = width > height && width >= 700;
  const hydrated = useStoresHydrated();
  const { xp, streak, lastPracticeDate, savedDays } = useProgressStore();
  const today = toDay(new Date());
  // A nap vége után a tárolt jelző elavulhat, ezért a mai dátumból számoljuk
  const dailyGoalDone = lastPracticeDate === today;

  // Új napon a napi cél újra nyitott
  useEffect(() => {
    if (hydrated) useProgressStore.getState().startDay(toDay(new Date()));
  }, [hydrated]);

  const greeting = (
    <View className="gap-1">
      <Text className="font-title text-[56px] leading-[64px] text-primary">Szia Kira!</Text>
      <Text className="font-task text-[24px] text-textMuted">Készen állsz a gyakorlásra?</Text>
    </View>
  );

  const mascot = (
    <View className={`items-center justify-center ${landscape ? "flex-1 self-stretch" : "py-4"}`}>
      <View className="absolute left-[6%] top-[8%] h-[44px] w-[44px] rounded-full bg-accent/40" />
      <View className="absolute right-[8%] top-[4%] h-[20px] w-[20px] rounded-full bg-secondary/50" />
      <View className="absolute bottom-[14%] left-[4%] h-[26px] w-[26px] rounded-full bg-secondary/40" />
      <View className="absolute bottom-[26%] right-[6%] h-[14px] w-[14px] rounded-full bg-accent/50" />
      <View className="absolute left-[20%] top-[26%]">
        <StarIcon size={20} color={colors.secondary} />
      </View>
      <View className="absolute right-[22%] top-[10%]">
        <StarIcon size={30} color={colors.accent} />
      </View>
      <View className="absolute right-[10%] top-[36%]">
        <StarIcon size={18} color={colors.primary} />
      </View>
      {/* Puha talapzat a maskot alatt */}
      <View className="absolute bottom-[4%] h-[64px] w-[84%] items-center justify-center rounded-full bg-primary/15">
        <View className="h-[40px] w-[70%] rounded-full bg-primary/10" />
      </View>
      <Mascot state="base" size={landscape ? 340 : 220} />
      <View className="h-[20px]" />
    </View>
  );

  const stats = (
    <View className="flex-row gap-3">
      <StatPill
        className={landscape ? "" : "flex-1"}
        icon={<FlameIcon size={30} color={colors.error} outline />}
        value={currentStreak(streak, lastPracticeDate, today, savedDays ?? [])}
        label="napos sorozat"
      />
      <StatPill className={landscape ? "" : "flex-1"} icon={<StarIcon size={30} color={colors.accent} outline />} value={xp} label="XP" />
    </View>
  );

  const goal = (
    <View className="gap-3 rounded-card bg-surface px-6 py-5" style={softShadow}>
      <View className="flex-row items-center justify-between">
        <Text className="font-title text-[20px] text-text">Mai cél</Text>
        <Text className="font-title text-[20px]" style={{ color: darkTones.success }}>
          {dailyGoalDone ? "100%" : "0%"}
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        {dailyGoalDone && <CheckIcon size={20} color={darkTones.success} />}
        <Text className="font-task text-[18px]" style={{ color: dailyGoalDone ? darkTones.success : colors.textMuted }}>
          {dailyGoalDone ? "Kész! Ma már gyakoroltál, Kira." : "Egy gyakorlókör ma."}
        </Text>
      </View>
      <ProgressBar tone="success" size="lg" value={dailyGoalDone ? 1 : 0} />
    </View>
  );

  const start = (
    <Pressable
      accessibilityRole="button"
      onPress={() => router.push("/subjects")}
      className="min-h-[76px] flex-row items-center justify-center gap-3 rounded-card bg-primary"
      style={({ pressed }) => [startShadow, { transform: [{ scale: pressed ? 0.98 : 1 }] }]}
    >
      <Text className="font-title text-[30px] text-surface">Kezdjük</Text>
      <ArrowRightIcon size={30} color={colors.surface} />
    </Pressable>
  );

  if (landscape) {
    return (
      <SafeAreaView style={screen}>
        <ScrollView contentContainerClassName="flex-grow flex-row items-center justify-center gap-10 p-8">
          {mascot}
          <View className="w-full max-w-[460px] flex-1 gap-6">
            {greeting}
            {stats}
            {goal}
            {start}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={screen}>
      <ScrollView contentContainerClassName="flex-grow justify-between gap-5 p-6">
        <View className="gap-2">
          {greeting}
          {mascot}
          {stats}
          {goal}
        </View>
        {start}
      </ScrollView>
    </SafeAreaView>
  );
}
