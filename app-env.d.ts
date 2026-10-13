/// <reference types="expo/types" />
/// <reference types="nativewind/types" />

declare module "*.css";

declare module "*.png" {
  import type { ImageSourcePropType } from "react-native";
  const source: ImageSourcePropType;
  export default source;
}

declare module "*.wav" {
  const source: number;
  export default source;
}
