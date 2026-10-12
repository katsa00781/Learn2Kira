import { addDays } from "./leitner";

/**
 * A sorozat új értéke, ha `today`-en befejeződött egy kör.
 * Ugyanaznap nem nő tovább; tegnap után +1; kimaradt nap után újraindul 1-ről.
 */
export function nextStreak(streak: number, lastPracticeDate: string | null, today: string): number {
  if (lastPracticeDate === today) return streak;
  if (lastPracticeDate === addDays(today, -1)) return streak + 1;
  return 1;
}
