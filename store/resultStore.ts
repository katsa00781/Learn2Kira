import { create } from "zustand";

/** A legutóbb befejezett kör összegzése az Eredmény képernyőnek. Nem perzisztált. */
export type LastResult = {
  topicId: string;
  correct: number;
  total: number;
  xpEarned: number;
  xpBefore: number;
  exerciseIds: string[];
};

type ResultState = {
  last: LastResult | null;
  set: (result: LastResult) => void;
};

export const useResultStore = create<ResultState>()((set) => ({
  last: null,
  set: (last) => set({ last }),
}));
