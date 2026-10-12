import { create } from "zustand";
import type { Exercise } from "@/types/exercise";

/** Az aktuális gyakorlókör állapota. Nem perzisztált: kilépéskor elvész. */
type SessionState = {
  topicId: string | null;
  exercises: Exercise[];
  index: number;
  /** Az eddig megválaszolt feladatok eredménye, sorrendben. */
  results: boolean[];
  start: (topicId: string, exercises: Exercise[]) => void;
  answer: (correct: boolean) => void;
  next: () => void;
  reset: () => void;
};

const empty = { topicId: null, exercises: [], index: 0, results: [] };

export const useSessionStore = create<SessionState>()((set) => ({
  ...empty,
  start: (topicId, exercises) => set({ topicId, exercises, index: 0, results: [] }),
  answer: (correct) => set((s) => ({ results: [...s.results, correct] })),
  next: () => set((s) => ({ index: s.index + 1 })),
  reset: () => set(empty),
}));
