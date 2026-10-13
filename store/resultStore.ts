import { create } from "zustand";

/** A legutóbb befejezett kör összegzése az Eredmény képernyőnek. Nem perzisztált. */
export type LastResult = {
  topicId: string;
  correct: number;
  total: number;
  xpEarned: number;
  xpBefore: number;
  exerciseIds: string[];
  /** A körben most megszerzett jelvények azonosítói. */
  newBadges: string[];
  /** Ez a kör teljesítette a napi célt (az első kör aznap). */
  goalReached: boolean;
};

type ResultState = {
  last: LastResult | null;
  set: (result: LastResult) => void;
};

export const useResultStore = create<ResultState>()((set) => ({
  last: null,
  set: (last) => set({ last }),
}));
