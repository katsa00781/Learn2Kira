import { View } from "react-native";

type Props = {
  /** 0 és 1 közötti érték. */
  value: number;
  /** A kitöltés színe: alapból poros rózsa, a napi célnál zsálya zöld. */
  tone?: "primary" | "success";
  className?: string;
};

export function ProgressBar({ value, tone = "primary", className = "" }: Props) {
  const percent = Math.round(Math.min(Math.max(value, 0), 1) * 100);
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: percent }}
      className={`h-3 overflow-hidden rounded-full bg-secondary/25 ${className}`}
    >
      <View className={`h-full rounded-full ${tone === "success" ? "bg-success" : "bg-primary"}`} style={{ width: `${percent}%` }} />
    </View>
  );
}
