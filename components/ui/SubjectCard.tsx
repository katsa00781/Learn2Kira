import { Pressable, Text, View } from "react-native";
import { colors } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import { subjectLook } from "@/constants/subjects";
import type { SubjectId } from "@/types/exercise";
import { LeafIcon } from "./Icons";
import { ProgressBar } from "./ProgressBar";

type Props = {
  subject: SubjectId;
  title: string;
  topicCount: number;
  /** A kipróbált feladatok aránya, 0–1. */
  progress: number;
  onPress: () => void;
};

export function SubjectCard({ subject, title, topicCount, progress, onPress }: Props) {
  const look = subjectLook[subject];
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      className="min-h-[220px] flex-1 items-center justify-center gap-4 rounded-card bg-surface p-6"
      style={({ pressed }) => [softShadow, { transform: [{ scale: pressed ? 0.97 : 1 }] }]}
    >
      <View className="h-[88px] w-[88px] items-center justify-center rounded-full" style={{ backgroundColor: look.color }}>
        {look.glyph ? <Text className="font-title text-[36px] text-surface">{look.glyph}</Text> : <LeafIcon size={44} color={colors.surface} />}
      </View>
      <Text className="font-title text-[28px] text-text">{title}</Text>
      <ProgressBar className="w-full" value={progress} />
      <Text className="font-body text-[18px] text-textMuted">{topicCount} témakör</Text>
    </Pressable>
  );
}
