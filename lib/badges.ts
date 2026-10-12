import type { SubjectId } from "@/types/exercise";

type Context = {
  /** A kör befejezése utáni sorozat. */
  streak: number;
  correct: number;
  total: number;
  /** Ha a kör témaköre ezzel a körrel lett kész, annak a tantárgya. */
  topicSubject: SubjectId | null;
};

/** A kör után megszerzett, de még fel nem oldott jelvények azonosítói. */
export function newBadges(unlocked: string[], { streak, correct, total, topicSubject }: Context): string[] {
  const earned = ["first-lesson"];
  if (streak >= 3) earned.push("streak-3");
  if (streak >= 7) earned.push("streak-7");
  if (streak >= 30) earned.push("streak-30");
  if (total > 0 && correct === total) earned.push("perfect-round");
  if (topicSubject) earned.push(`topic-${topicSubject}`);
  return earned.filter((id) => !unlocked.includes(id));
}
