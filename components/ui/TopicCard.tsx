import { Pressable, Text, View } from "react-native";
import { colors, darkTones } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import { CheckIcon } from "./Icons";
import { ProgressBar } from "./ProgressBar";

// A körök halvány háttere és sötét jele négy színt váltogat, a PDF szerint
const circleTones = [
  { bg: colors.accent, text: darkTones.accent },
  { bg: colors.secondary, text: darkTones.secondary },
  { bg: colors.primary, text: darkTones.primary },
  { bg: colors.success, text: darkTones.success },
] as const;

type Props = {
  /** A témakör sorszáma a tankönyvi sorrendben (1-től). */
  number: number;
  title: string;
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

export function TopicCard({ number, title, progress, due, onPress }: Props) {
  const tone = circleTones[(number - 1) % circleTones.length] ?? circleTones[0];
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className="min-h-[92px] flex-1 flex-row items-center gap-4 rounded-card bg-surface px-5 py-4"
      style={({ pressed }) => [softShadow, { transform: [{ scale: pressed ? 0.98 : 1 }] }]}
    >
      <View className="h-[52px] w-[52px] items-center justify-center rounded-full" style={{ backgroundColor: `${tone.bg}33` }}>
        <Text className="font-title text-[22px]" style={{ color: tone.text }}>
          {number}
        </Text>
      </View>
      <View className="min-w-0 flex-1 gap-2">
        <Text className="font-title text-[20px] leading-6 text-text">{title}</Text>
        <ProgressBar tone={progress >= 1 ? "success" : "primary"} value={progress} />
      </View>
      <View className="w-[40px] items-center">
        <Status progress={progress} due={due} />
      </View>
    </Pressable>
  );
}
