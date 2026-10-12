import { Image } from "react-native";
import { images } from "@/constants/images";

export type MascotState = "base" | "thinking" | "celebrate" | "encourage";

const sourceByState = {
  base: images.mascotBase,
  thinking: images.mascotThinking,
  celebrate: images.mascotCelebrate,
  encourage: images.mascotEncourage,
} as const;

type Props = { state?: MascotState; size?: number };

export function Mascot({ state = "base", size = 120 }: Props) {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={sourceByState[state]}
      style={{ width: size, height: size }}
      resizeMode="contain"
    />
  );
}
