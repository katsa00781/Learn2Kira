import type { SubjectId } from "@/types/exercise";
import { colors } from "./colors";

/** A tantárgykártya ikonjának színe és jele. A `glyph: null` a levél-ikont jelenti. */
export const subjectLook: Record<SubjectId, { color: string; glyph: string | null }> = {
  nyelvtan: { color: colors.accent, glyph: "Aa" },
  helyesiras: { color: colors.primary, glyph: "ly" },
  matek: { color: colors.secondary, glyph: "12" },
  kornyezet: { color: colors.success, glyph: null },
};
