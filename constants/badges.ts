import type { badgeImages } from "./images";

export type BadgeId = keyof typeof badgeImages;

export type Badge = {
  id: BadgeId;
  title: string;
  /** Mit kell tenni a megszerzéséhez; a jelvényrendszer ez alapján oldja fel. */
  description: string;
};

/** A jelvények a Jutalmak képernyő sorrendjében; a feloldás szabályai a `lib/badges.ts`-ben vannak. */
export const badges: Badge[] = [
  { id: "first-lesson", title: "Első kör", description: "Fejezz be egy gyakorlókört." },
  { id: "streak-3", title: "3 napos sorozat", description: "Gyakorolj 3 napon át egymás után." },
  { id: "streak-7", title: "7 napos sorozat", description: "Gyakorolj 7 napon át egymás után." },
  { id: "streak-14", title: "14 napos sorozat", description: "Gyakorolj 14 napon át egymás után." },
  { id: "streak-30", title: "30 napos sorozat", description: "Gyakorolj 30 napon át egymás után." },
  { id: "perfect-round", title: "Hibátlan kör", description: "Egy legalább 8 feladatos körben minden válaszod legyen jó." },
  { id: "topic-nyelvtan", title: "Nyelvtan-felfedező", description: "Fejezz be egy nyelvtan témakört." },
  { id: "topic-helyesiras", title: "Helyesírás-bajnok", description: "Fejezz be egy helyesírás témakört." },
  { id: "topic-matek", title: "Matekzseni", description: "Fejezz be egy matek témakört." },
  { id: "topic-kornyezet", title: "Természetbúvár", description: "Fejezz be egy környezet témakört." },
];
