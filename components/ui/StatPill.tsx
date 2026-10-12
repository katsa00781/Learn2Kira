import type { ReactNode } from "react";
import { Text, View } from "react-native";
import { softShadow } from "@/constants/shadows";

type Props = { icon: ReactNode; value: number; label: string; className?: string };

export function StatPill({ icon, value, label, className = "" }: Props) {
  return (
    <View className={`flex-row items-center gap-3 rounded-card bg-surface px-5 py-4 ${className}`} style={softShadow}>
      {icon}
      <View>
        <Text className="font-title text-[28px] leading-[38px] text-text">{value}</Text>
        <Text className="font-task text-[15px] leading-[20px] text-textMuted">{label}</Text>
      </View>
    </View>
  );
}
