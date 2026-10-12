import { Image, Text, View } from "react-native";
import { colors } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import type { Badge } from "@/constants/badges";
import { badgeImages } from "@/constants/images";
import { LockIcon } from "./Icons";

type Props = { badge: Badge; unlocked: boolean };

export function BadgeCard({ badge, unlocked }: Props) {
  return (
    <View
      accessibilityLabel={unlocked ? badge.title : `${badge.title}, még zárolt: ${badge.description}`}
      className="flex-1 items-center justify-center gap-3 rounded-card bg-surface px-2 py-5"
      style={softShadow}
    >
      <View className="h-[108px] w-[108px] items-center justify-center">
        {/* Zárolt állapotban szürkített, halvány kép; külön szürke változat nem kell */}
        <View style={unlocked ? null : { opacity: 0.35, filter: [{ grayscale: 1 }] }}>
          <Image accessibilityIgnoresInvertColors source={badgeImages[badge.id]} resizeMode="contain" style={{ width: 108, height: 108 }} />
        </View>
        {!unlocked && (
          <View className="absolute bottom-0 right-0 h-[34px] w-[34px] items-center justify-center rounded-full bg-surface" style={softShadow}>
            <LockIcon size={18} color={colors.textMuted} />
          </View>
        )}
      </View>
      <Text className={`text-center font-title text-[17px] leading-[22px] ${unlocked ? "text-text" : "text-textMuted"}`}>{badge.title}</Text>
    </View>
  );
}
