import { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { darkTones } from "@/constants/colors";

type Props = {
  /** A sáv kitöltése a kör előtt és után (0–1). */
  start: number;
  end: number;
  level: number;
  leveledUp: boolean;
};

/** Szintsáv: a korábbi XP barack, a most szerzett rész halványabb barack, és beúszik. */
export function LevelBar({ start, end, level, leveledUp }: Props) {
  const gain = useSharedValue(0);
  useEffect(() => {
    gain.value = withDelay(500, withTiming(1, { duration: 900 }));
  }, [gain]);

  const gainStyle = useAnimatedStyle(() => ({ width: `${(end - start) * gain.value * 100}%` }));

  return (
    <View className="flex-row items-center gap-4">
      <View accessibilityRole="progressbar" className="h-[20px] flex-1 flex-row overflow-hidden rounded-full bg-text/10">
        <View className="h-full bg-accent" style={{ width: `${start * 100}%` }} />
        <Animated.View className="h-full bg-accent/50" style={gainStyle} />
      </View>
      <Text className="font-title text-[18px]" style={{ color: darkTones.accent }}>
        {leveledUp ? `Új szint: ${level}.` : `${level}. szint`}
      </Text>
    </View>
  );
}
