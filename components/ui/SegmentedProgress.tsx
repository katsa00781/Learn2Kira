import { View } from "react-native";

type Props = {
  total: number;
  /** A jelenlegi feladat sorszáma (0-tól). */
  current: number;
  className?: string;
};

/** Feladatonkénti szakaszok: kész = zöld, jelenlegi = rózsa, hátralévő = halvány. */
export function SegmentedProgress({ total, current, className = "" }: Props) {
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: total, now: current }}
      className={`flex-row gap-2 ${className}`}
    >
      {Array.from({ length: total }, (_, i) => (
        <View key={i} className={`h-[10px] flex-1 rounded-full ${i < current ? "bg-success" : i === current ? "bg-primary" : "bg-text/10"}`} />
      ))}
    </View>
  );
}
