import { Pressable, Text } from "react-native";
import { softShadow } from "@/constants/shadows";

export type AnswerState = "idle" | "correct" | "wrong";

type Props = {
  label: string;
  onPress: () => void;
  state?: AnswerState;
  disabled?: boolean;
};

const containerByState: Record<AnswerState, string> = {
  idle: "border-secondary/40 bg-surface",
  correct: "border-success bg-success/20",
  wrong: "border-error bg-error/20",
};

export function AnswerButton({ label, onPress, state = "idle", disabled = false }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      className={`min-h-[60px] justify-center rounded-card border-2 px-6 py-4 ${containerByState[state]}`}
      style={({ pressed }) => [softShadow, { transform: [{ scale: pressed ? 0.97 : 1 }] }]}
    >
      <Text className="text-center font-task text-[22px] text-text">{label}</Text>
    </Pressable>
  );
}
