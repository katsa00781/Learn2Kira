import { addDays } from "./leitner";

/**
 * Mentőöv: havonta egyszer egy kimaradt nap nem szakítja meg a sorozatot.
 * `missedDay` az a nap, ami kimaradt; a hónapját a "ÉÉÉÉ-HH" előtag adja.
 */
function lifelineFree(savedDays: string[], missedDay: string): boolean {
  const month = missedDay.slice(0, 7);
  return !savedDays.some((day) => day.startsWith(month));
}

/** Pontosan egy nap maradt ki (tegnapelőtt gyakorolt), és abban a hónapban még van mentőöv. */
export function lifelineApplies(lastPracticeDate: string | null, today: string, savedDays: string[]): boolean {
  return lastPracticeDate === addDays(today, -2) && lifelineFree(savedDays, addDays(today, -1));
}

/**
 * A sorozat új értéke, ha `today`-en befejeződött egy kör.
 * Ugyanaznap nem nő tovább; tegnap után +1; egy mentett nap után is +1;
 * egyébként kimaradt nap után újraindul 1-ről.
 */
export function nextStreak(streak: number, lastPracticeDate: string | null, today: string, savedDays: string[] = []): number {
  if (lastPracticeDate === today) return streak;
  if (lastPracticeDate === addDays(today, -1) || lifelineApplies(lastPracticeDate, today, savedDays)) return streak + 1;
  return 1;
}

/**
 * A kijelzett sorozat: ha tegnap óta nem gyakorolt (és nincs mentőöv), a tárolt szám már elveszett,
 * akkor is, ha az új kör még nem írta át a tárolt értéket.
 */
export function currentStreak(streak: number, lastPracticeDate: string | null, today: string, savedDays: string[] = []): number {
  if (lastPracticeDate === today || lastPracticeDate === addDays(today, -1)) return streak;
  return lifelineApplies(lastPracticeDate, today, savedDays) ? streak : 0;
}
