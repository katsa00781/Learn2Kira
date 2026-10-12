import { Pressable, Text, View } from "react-native";
import { colors } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import { CheckIcon } from "./Icons";
import { ProgressBar } from "./ProgressBar";

type Props = {
  /** A témakör sorszáma a tankönyvi sorrendben (1-től). */
  number: number;
  title: string;
  /** Szín a tantárgyból. */
  color: string;
  /** A kipróbált feladatok aránya, 0–1. */
  progress: number;
  /** Esedékes ismétlések száma. */
  due: number;
  onPress: () => void;
};

/** Jobb oldali jelzés: esedékes ismétlés > kész > még nem kezdett > (folyamatban: nincs jelzés). */
function Status({ progress, due }: Pick<Props, "progress" | "due">) {
  if (due > 0) {
    return (
      <View accessibilityLabel={`${due} ismétlés vár`} className="h-[40px] min-w-[40px] items-center justify-center rounded-full bg-primary px-2">
        <Text className="font-title text-[20px] text-surface">{due}</Text>
      </View>
    );
  }
  if (progress >= 1) {
    return (
      <View accessibilityLabel="Kész" className="h-[40px] w-[40px] items-center justify-center rounded-full bg-success">
        <CheckIcon size={22} color={colors.surface} />
      </View>
    );
  }
  if (progress === 0) return <View className="h-[14px] w-[14px] rounded-full bg-textMuted/25" />;
  return null;
}

export function TopicCard({ number, title, color, progress, due, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className="min-h-[88px] flex-1 flex-row items-center gap-4 rounded-card bg-surface px-5 py-4"
      style={({ pressed }) => [softShadow, { transform: [{ scale: pressed ? 0.98 : 1 }] }]}
    >
      <View className="h-[48px] w-[48px] items-center justify-center rounded-full" style={{ backgroundColor: color }}>
        <Text className="font-title text-[22px] text-surface">{number}</Text>
      </View>
      <View className="flex-1 gap-2">
        <Text className="font-title text-[20px] leading-6 text-text">{title}</Text>
        <ProgressBar value={progress} />
      </View>
      <View className="w-[40px] items-center">
        <Status progress={progress} due={due} />
      </View>
    </Pressable>
  );
}
