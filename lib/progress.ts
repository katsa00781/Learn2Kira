import type { Card } from "./leitner";

/** A kipróbált feladatok aránya (0–1): az a feladat számít, amire legalább egyszer válaszolt. */
export function seenRatio(exercises: { id: string }[], cards: Record<string, Card>): number {
  if (exercises.length === 0) return 0;
  return exercises.filter((e) => cards[e.id]).length / exercises.length;
}
