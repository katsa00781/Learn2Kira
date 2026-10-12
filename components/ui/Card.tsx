import type { ReactNode } from "react";
import { View } from "react-native";
import { softShadow } from "@/constants/shadows";

type Props = { children: ReactNode; className?: string };

export function Card({ children, className = "" }: Props) {
  return (
    <View className={`rounded-card bg-surface p-6 ${className}`} style={softShadow}>
      {children}
    </View>
  );
}
