import type { ReactNode } from "react";
import { Text, View } from "react-native";
import { softShadow } from "@/constants/shadows";

type Props = { icon: ReactNode; value: number; label: string };

export function StatPill({ icon, value, label }: Props) {
  return (
    <View className="flex-1 flex-row items-center gap-3 rounded-card bg-surface px-5 py-4" style={softShadow}>
      {icon}
      <View>
        <Text className="font-title text-[28px] leading-8 text-text">{value}</Text>
        <Text className="font-body text-[16px] text-textMuted">{label}</Text>
      </View>
    </View>
  );
}
