import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { colors, darkTones } from "@/constants/colors";
import { BulbIcon } from "./Icons";

/** „Tipp” gomb: érintésre megmutatja a feladat tippjét. Tipp nélkül nem jelenik meg. */
export function HintButton({ hint }: { hint?: string }) {
  const [open, setOpen] = useState(false);
  if (!hint) return null;
  return (
    <View className="items-center gap-3">
      <Pressable accessibilityRole="button" onPress={() => setOpen(!open)} className="min-h-[48px] flex-row items-center gap-2 px-4">
        <BulbIcon size={22} color={colors.primary} />
        <Text className="font-title text-[20px]" style={{ color: darkTones.primary }}>
          Tipp
        </Text>
      </Pressable>
      {open && <Text className="text-center font-body text-[20px] leading-7 text-textMuted">{hint}</Text>}
    </View>
  );
}
