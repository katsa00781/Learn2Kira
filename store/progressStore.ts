import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { addDays } from "@/lib/leitner";
import { lifelineApplies, nextStreak } from "@/lib/streak";

type ProgressState = {
  xp: number;
  streak: number;
  lastPracticeDate: string | null;
  unlockedBadges: string[];
  dailyGoalDone: boolean;
  /** A gyakorlással töltött napok ("ÉÉÉÉ-HH-NN"), a jutalmak naptárához. */
  practiceDays: string[];
  /** A mentőövvel megmentett napok ("ÉÉÉÉ-HH-NN"), havonta legfeljebb egy. */
  savedDays: string[];
  /** Kör végén: XP jóváírás, sorozat és napi cél frissítése. */
  completeSession: (xpGained: number, today: string) => void;
  /** Új napon a napi cél újra nyitott. Induláskor hívandó. */
  startDay: (today: string) => void;
  unlockBadge: (badgeId: string) => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      xp: 0,
      streak: 0,
      lastPracticeDate: null,
      unlockedBadges: [],
      dailyGoalDone: false,
      practiceDays: [],
      savedDays: [],

      completeSession: (xpGained, today) =>
        set((s) => ({
          xp: s.xp + xpGained,
          streak: nextStreak(s.streak, s.lastPracticeDate, today, s.savedDays ?? []),
          savedDays: lifelineApplies(s.lastPracticeDate, today, s.savedDays ?? []) ? [...(s.savedDays ?? []), addDays(today, -1)] : (s.savedDays ?? []),
          lastPracticeDate: today,
          dailyGoalDone: true,
          practiceDays: s.practiceDays.includes(today) ? s.practiceDays : [...s.practiceDays, today],
        })),

      startDay: (today) =>
        set((s) => (s.lastPracticeDate === today ? s : { dailyGoalDone: false })),

      unlockBadge: (badgeId) =>
        set((s) =>
          s.unlockedBadges.includes(badgeId)
            ? s
            : { unlockedBadges: [...s.unlockedBadges, badgeId] },
        ),
    }),
    { name: "progress", storage: createJSONStorage(() => AsyncStorage) },
  ),
);
