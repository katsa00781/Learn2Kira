import { Pressable, Text } from "react-native";
import { softShadow } from "@/constants/shadows";

export type AnswerState = "idle" | "selected" | "correct" | "wrong";

type Props = {
  label: string;
  onPress: () => void;
  state?: AnswerState;
  disabled?: boolean;
  /** Nagy felirat rövid jelekhez (írásjel, betű). */
  large?: boolean;
  /** Magas gomb kevés lehetőségnél (pl. betűválasztás). */
  tall?: boolean;
};

const containerByState: Record<AnswerState, string> = {
  idle: "border-primary bg-surface",
  selected: "border-primary bg-primary/10",
  correct: "border-success bg-success/20",
  wrong: "border-error bg-error/20",
};

export function AnswerButton({ label, onPress, state = "idle", disabled = false, large = false, tall = false }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      className={`justify-center rounded-card border-[3px] px-6 py-4 ${tall ? "min-h-[110px]" : "min-h-[60px]"} ${containerByState[state]}`}
      style={({ pressed }) => [softShadow, { transform: [{ scale: pressed ? 0.97 : 1 }] }]}
    >
      <Text className={`text-center text-text ${large ? "font-title text-[44px] leading-[52px]" : "font-task text-[22px]"}`}>{label}</Text>
    </Pressable>
  );
}
