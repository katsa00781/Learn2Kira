import type { Card } from "./leitner";

/** A kipróbált feladatok aránya (0–1): az a feladat számít, amire legalább egyszer válaszolt. */
export function seenRatio(exercises: { id: string }[], cards: Record<string, Card>): number {
  if (exercises.length === 0) return 0;
  return exercises.filter((e) => cards[e.id]).length / exercises.length;
}

/** Hány feladat esedékes ismétlésre `today`-en vagy korábban. */
export function dueCount(exercises: { id: string }[], cards: Record<string, Card>, today: string): number {
  return exercises.filter((e) => {
    const card = cards[e.id];
    return card !== undefined && card.dueAt <= today;
  }).length;
}

function dayNumber(day: string): number {
  const [y, m, d] = day.split("-").map(Number);
  return Date.UTC(y ?? 0, (m ?? 1) - 1, d ?? 1) / 86_400_000;
}

/**
 * Mi vár a kör feladataira: hány esedékes `today`-en vagy korábban (a rontottak ide kerülnek,
 * mert az 1. doboz még aznap visszahozza őket), és ha egy sem, hány nap múlva jön az első.
 */
export function reviewOutlook(
  exerciseIds: string[],
  cards: Record<string, Card>,
  today: string,
): { dueToday: number; nextInDays: number | null } {
  let dueToday = 0;
  let nextInDays: number | null = null;
  for (const id of exerciseIds) {
    const card = cards[id];
    if (!card) continue;
    if (card.dueAt <= today) {
      dueToday += 1;
      continue;
    }
    const days = dayNumber(card.dueAt) - dayNumber(today);
    if (nextInDays === null || days < nextInDays) nextInDays = days;
  }
  return { dueToday, nextInDays };
}
