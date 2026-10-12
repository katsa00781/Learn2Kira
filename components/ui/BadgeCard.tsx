import { Text, View } from "react-native";
import { colors } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import type { Badge, BadgeIconName } from "@/constants/badges";
import {
  BoltIcon,
  BookIcon,
  ClockIcon,
  CrownIcon,
  FlagIcon,
  FlameIcon,
  LeafIcon,
  LockIcon,
  PencilIcon,
  StarIcon,
  TargetIcon,
} from "./Icons";

const iconByName: Record<BadgeIconName, typeof StarIcon> = {
  flag: FlagIcon,
  flame: FlameIcon,
  bolt: BoltIcon,
  crown: CrownIcon,
  star: StarIcon,
  book: BookIcon,
  pencil: PencilIcon,
  target: TargetIcon,
  leaf: LeafIcon,
  clock: ClockIcon,
};

// A zárolt jelvény halvány szürke; a szöveg ne legyen tiszta fekete (lásd design tokenek)
const lockedIcon = `${colors.textMuted}80`;

type Props = { badge: Badge; unlocked: boolean };

export function BadgeCard({ badge, unlocked }: Props) {
  const Icon = iconByName[badge.icon];
  return (
    <View
      accessibilityLabel={unlocked ? badge.title : `${badge.title}, még zárolt: ${badge.description}`}
      className="flex-1 items-center justify-center gap-3 rounded-card bg-surface px-2 py-5"
      style={softShadow}
    >
      <View
        className="h-[104px] w-[104px] items-center justify-center rounded-full"
        style={{ backgroundColor: unlocked ? `${badge.color}40` : `${colors.text}0D` }}
      >
        <View
          className="h-[80px] w-[80px] items-center justify-center rounded-full"
          style={{ backgroundColor: unlocked ? badge.color : `${colors.text}14` }}
        >
          <Icon size={38} color={unlocked ? colors.surface : lockedIcon} />
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
