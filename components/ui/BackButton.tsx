import { Pressable } from "react-native";
import { colors } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import { BackIcon } from "./Icons";

export function BackButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Vissza"
      onPress={onPress}
      className="h-[52px] w-[52px] items-center justify-center rounded-full bg-surface"
      style={softShadow}
    >
      <BackIcon color={colors.text} />
    </Pressable>
  );
}
