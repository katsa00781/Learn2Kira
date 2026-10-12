import { colors } from "./colors";

/** Lágy árnyék kártyákhoz és gombokhoz (iOS shadow*, Android elevation). */
export const softShadow = {
  shadowColor: colors.text,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.08,
  shadowRadius: 12,
  elevation: 3,
} as const;
