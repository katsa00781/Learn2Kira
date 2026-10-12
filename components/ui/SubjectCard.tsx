import { Pressable, Text } from "react-native";
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
  onPress: () => void;
};

export function SubjectCard({ subject, title, topicCount, progress, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      className="min-h-[220px] flex-1 items-center justify-center gap-4 rounded-card bg-surface p-6"
      style={({ pressed }) => [softShadow, { transform: [{ scale: pressed ? 0.97 : 1 }] }]}
    >
      <SubjectIcon subject={subject} />
      <Text className="font-title text-[28px] text-text">{title}</Text>
      <ProgressBar className="w-full" value={progress} />
      <Text className="font-body text-[18px] text-textMuted">{topicCount} témakör</Text>
    </Pressable>
  );
}
