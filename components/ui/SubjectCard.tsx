import { Pressable, Text, View } from "react-native";
import { colors } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import type { SubjectId } from "@/types/exercise";
import { ProgressBar } from "./ProgressBar";
import { SubjectIcon } from "./SubjectIcon";

type Props = {
  subject: SubjectId;
  title: string;
  topicCount: number;
  /** A kipróbált feladatok aránya, 0–1. */
  progress: number;
  /** `tall`: magas kártya (iPad), `row`: vízszintes kártya (telefon). */
  layout: "tall" | "row";
  onPress: () => void;
};

// A már elkezdett tantárgy rózsaszín keretet és árnyékot kap
const startedShadow = { ...softShadow, shadowColor: colors.primary, shadowOpacity: 0.18, shadowRadius: 16 };

export function SubjectCard({ subject, title, topicCount, progress, layout, onPress }: Props) {
  const started = progress > 0;
  const tall = layout === "tall";
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      className={`flex-1 rounded-card border-2 bg-surface ${started ? "border-primary/20" : "border-transparent"} ${
        tall ? "min-h-[300px] items-center justify-center gap-5 p-6" : "flex-row items-center gap-5 p-5"
      }`}
      style={({ pressed }) => [started ? startedShadow : softShadow, { transform: [{ scale: pressed ? 0.97 : 1 }] }]}
    >
      <SubjectIcon subject={subject} size={tall ? 116 : 84} />
      <View className={tall ? "w-full items-center gap-3" : "flex-1 gap-2"}>
        <Text className={`font-title text-text ${tall ? "text-[36px]" : "text-[28px]"}`}>{title}</Text>
        <ProgressBar className="w-full" value={progress} />
        <Text className="font-task text-[18px] text-textMuted">{topicCount} témakör</Text>
      </View>
    </Pressable>
  );
}
