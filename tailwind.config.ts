import type { Config } from "tailwindcss";
// @ts-expect-error a nativewind/preset nem exportál típust
import nativewind from "nativewind/preset";
import { colors } from "./constants/colors";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [nativewind],
  theme: {
    extend: {
      colors,
      borderRadius: { card: "24px" },
    },
  },
  plugins: [],
} satisfies Config;
