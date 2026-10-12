import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mascot } from "@/components/mascot/Mascot";
import { BadgeCard } from "@/components/ui/BadgeCard";
import { StreakCalendar } from "@/components/ui/StreakCalendar";
import { badges } from "@/constants/badges";
import { colors } from "@/constants/colors";
import { chunk } from "@/lib/chunk";
import { toDay } from "@/lib/leitner";
import { currentStreak } from "@/lib/streak";
import { useProgressStore } from "@/store/progressStore";

const BADGE_COLUMNS = 3;

const screen = { flex: 1, backgroundColor: colors.background };

export default function RewardsScreen() {
  const { width, height } = useWindowDimensions();
  const landscape = width > height && width >= 700;
  const { streak, lastPracticeDate, practiceDays, unlockedBadges } = useProgressStore();
  const today = toDay(new Date());

  const calendar = <StreakCalendar streak={currentStreak(streak, lastPracticeDate, today)} today={today} practiceDays={practiceDays} />;
  const grid = (
    <View className="gap-4">
      {chunk(badges, BADGE_COLUMNS).map((row) => (
        <View key={row.map((b) => b.id).join()} className="flex-row gap-4">
          {row.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} unlocked={unlockedBadges.includes(badge.id)} />
          ))}
          {/* A csonka utolsó sor kártyái ne nyúljanak szét: üres helykitöltők */}
          {Array.from({ length: BADGE_COLUMNS - row.length }, (_, i) => (
            <View key={`pad-${i}`} className="flex-1" />
          ))}
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={screen} edges={["top"]}>
      <ScrollView contentContainerClassName="w-full max-w-[1100px] gap-6 self-center p-6">
        <View className="flex-row items-center justify-between">
          <Text className={`font-title text-text ${landscape ? "text-[48px]" : "text-[36px]"}`}>Jutalmaid</Text>
          <Mascot state="celebrate" size={landscape ? 130 : 96} />
        </View>
        {landscape ? (
          <View className="flex-row items-start gap-6">
            <View className="w-[42%]">{calendar}</View>
            <View className="flex-1">{grid}</View>
          </View>
        ) : (
          <>
            {calendar}
            <View className="flex-row items-baseline gap-3">
              <Text className="font-title text-[26px] text-text">Jelvények</Text>
              <Text className="font-title text-[20px] text-textMuted">
                {unlockedBadges.length} / {badges.length}
              </Text>
            </View>
            {grid}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
