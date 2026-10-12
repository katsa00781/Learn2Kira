import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { answerCard, type Card } from "@/lib/leitner";

type ReviewState = {
  cards: Record<string, Card>;
  /** Egy válasz rögzítése: a kártya a Leitner-szabály szerint lép. */
  recordAnswer: (exerciseId: string, correct: boolean, today: string) => void;
};

export const useReviewStore = create<ReviewState>()(
  persist(
    (set) => ({
      cards: {},

      recordAnswer: (exerciseId, correct, today) =>
        set((s) => ({
          cards: { ...s.cards, [exerciseId]: answerCard(s.cards[exerciseId], correct, today) },
        })),
    }),
    { name: "review", storage: createJSONStorage(() => AsyncStorage) },
  ),
);
