import type { ReactNode } from "react";
import { Text, View } from "react-native";
import { softShadow } from "@/constants/shadows";

type Props = { value: string; label: string; icon?: ReactNode };

export function ResultStat({ value, label, icon }: Props) {
  return (
    <View className="flex-1 items-center gap-1 rounded-card bg-surface px-3 py-5" style={softShadow}>
      <View className="flex-row items-center gap-2">
        {icon}
        <Text className="font-title text-[36px] leading-[46px] text-text">{value}</Text>
      </View>
      <Text className="font-task text-[16px] leading-[22px] text-textMuted">{label}</Text>
    </View>
  );
}
