import { Text, View } from "react-native";
import { colors } from "@/constants/colors";
import { subjectLook } from "@/constants/subjects";
import type { SubjectId } from "@/types/exercise";
import { LeafIcon } from "./Icons";

/** A tantárgy színes, kerek jele. */
export function SubjectIcon({ subject, size = 88 }: { subject: SubjectId; size?: number }) {
  const look = subjectLook[subject];
  return (
    <View className="items-center justify-center rounded-full" style={{ width: size, height: size, backgroundColor: look.color }}>
      {look.glyph ? (
        <Text className="font-title text-surface" style={{ fontSize: size * 0.41 }}>
          {look.glyph}
        </Text>
      ) : (
        <LeafIcon size={size / 2} color={colors.surface} />
      )}
    </View>
  );
}
