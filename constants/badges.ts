import { colors } from "./colors";

export type BadgeIconName = "flag" | "flame" | "bolt" | "crown" | "star" | "book" | "pencil" | "target" | "leaf" | "clock";

export type Badge = {
  id: string;
  title: string;
  /** Mit kell tenni a megszerzéséhez; a jelvényrendszer ez alapján oldja fel. */
  description: string;
  icon: BadgeIconName;
  color: string;
};

/** A jelvények a Jutalmak képernyő sorrendjében. A feloldás a Jelvényrendszer feladat dolga. */
export const badges: Badge[] = [
  { id: "first-lesson", title: "Első kör", description: "Fejezz be egy gyakorlókört.", icon: "flag", color: colors.accent },
  { id: "streak-3", title: "3 napos sorozat", description: "Gyakorolj 3 napon át egymás után.", icon: "flame", color: colors.primary },
  { id: "streak-7", title: "7 napos sorozat", description: "Gyakorolj 7 napon át egymás után.", icon: "bolt", color: colors.secondary },
  { id: "streak-14", title: "14 napos sorozat", description: "Gyakorolj 14 napon át egymás után.", icon: "clock", color: colors.accent },
  { id: "perfect-round", title: "Hibátlan kör", description: "Egy legalább 8 feladatos körben minden válaszod legyen jó.", icon: "star", color: colors.accent },
  { id: "streak-30", title: "30 napos sorozat", description: "Gyakorolj 30 napon át egymás után.", icon: "crown", color: colors.primary },
  { id: "topic-nyelvtan", title: "Nyelvtan-felfedező", description: "Fejezz be egy nyelvtan témakört.", icon: "book", color: colors.success },
  { id: "topic-helyesiras", title: "Helyesírás-bajnok", description: "Fejezz be egy helyesírás témakört.", icon: "pencil", color: colors.primary },
  { id: "topic-matek", title: "Matekzseni", description: "Fejezz be egy matek témakört.", icon: "target", color: colors.secondary },
  { id: "topic-kornyezet", title: "Természetbúvár", description: "Fejezz be egy környezet témakört.", icon: "leaf", color: colors.success },
];
