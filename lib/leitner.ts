import type { Exercise } from "@/types/exercise";

export type Box = 1 | 2 | 3 | 4 | 5;

/** Egy feladat ismétlési állapota. A `dueAt` helyi nap, "ÉÉÉÉ-HH-NN" formában. */
export type Card = { box: Box; dueAt: string };

/** Hány nap múlva jön vissza a feladat, ha az adott dobozba került. */
const INTERVAL_DAYS: Record<Box, number> = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 14 };

const MAX_BOX: Box = 5;
const DEFAULT_SESSION_SIZE = 10;

/** Helyes válasz: egy dobozzal feljebb (max 5). Hibás: vissza az 1. dobozba. */
export function nextBox(box: Box, correct: boolean): Box {
  if (!correct) return 1;
  return Math.min(box + 1, MAX_BOX) as Box;
}

/** A nap ("ÉÉÉÉ-HH-NN") a helyi idő szerint. */
export function toDay(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addDays(day: string, days: number): string {
  const [y, m, d] = day.split("-").map(Number);
  // UTC-ben számolunk, hogy a nyári időszámítás ne csússzon el napot
  const date = new Date(Date.UTC(y ?? 0, (m ?? 1) - 1, (d ?? 1) + days));
  return date.toISOString().slice(0, 10);
}

/** Mikor esedékes legközelebb a feladat, ha `fromDay`-en került a `box` dobozba. */
export function dueDate(box: Box, fromDay: string): string {
  return addDays(fromDay, INTERVAL_DAYS[box]);
}

/** A kártya új állapota egy válasz után. A még nem látott feladat az 1. dobozból indul. */
export function answerCard(card: Card | undefined, correct: boolean, today: string): Card {
  const box = nextBox(card?.box ?? 1, correct);
  return { box, dueAt: dueDate(box, today) };
}

type SelectOptions = {
  exercises: Exercise[];
  cards: Record<string, Card>;
  today: string;
  size?: number;
  /** Az új feladatok keveréséhez; tesztben cserélhető. */
  random?: () => number;
};

/**
 * Gyakorlókör összeállítása: először az esedékes ismétlések (a legrégebben
 * esedékes elöl), aztán új, még nem látott feladatokkal feltöltve.
 * A nem esedékes kártyák kimaradnak.
 */
export function selectSessionExercises({
  exercises,
  cards,
  today,
  size = DEFAULT_SESSION_SIZE,
  random = Math.random,
}: SelectOptions): Exercise[] {
  const due: Exercise[] = [];
  const fresh: Exercise[] = [];

  for (const exercise of exercises) {
    const card = cards[exercise.id];
    if (!card) fresh.push(exercise);
    else if (card.dueAt <= today) due.push(exercise);
  }

  due.sort((a, b) => {
    const cardA = cards[a.id];
    const cardB = cards[b.id];
    if (!cardA || !cardB) return 0;
    return cardA.dueAt.localeCompare(cardB.dueAt) || cardA.box - cardB.box;
  });

  return [...due, ...shuffle(fresh, random)].slice(0, size);
}

function shuffle<T>(items: T[], random: () => number): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j] as T, result[i] as T];
  }
  return result;
}
