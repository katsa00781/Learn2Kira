import { View } from "react-native";

type Props = {
  /** 0 és 1 közötti érték. */
  value: number;
  /** A kitöltés színe: alapból poros rózsa (rózsaszínes sávon), zsálya zöld (bézs sávon). */
  tone?: "primary" | "success";
  /** `lg`: a kezdőlapi napi cél vastag sávja. */
  size?: "md" | "lg";
  className?: string;
};

const trackByTone = { primary: "bg-primary/15", success: "bg-text/10" };
const fillByTone = { primary: "bg-primary", success: "bg-success" };

export function ProgressBar({ value, tone = "primary", size = "md", className = "" }: Props) {
  const percent = Math.round(Math.min(Math.max(value, 0), 1) * 100);
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: percent }}
      className={`overflow-hidden rounded-full ${size === "lg" ? "h-[18px]" : "h-[10px]"} ${trackByTone[tone]} ${className}`}
    >
      <View className={`h-full rounded-full ${fillByTone[tone]}`} style={{ width: `${percent}%` }} />
    </View>
  );
}
