import type { Exercise } from '@/types/exercise';

/**
 * Rövidítő builderek a feladatbankhoz.
 * Céljuk, hogy egy feladat egy olvasható sor legyen a data fájlokban.
 * A `n` paraméter a sorszám, az id ebből és a topicId-ból áll össze.
 */

const pad = (n: number) => String(n).padStart(3, '0');

/** missing-letter: hiányzó betű beírása (j/ly, hangok hosszúsága) */
export const ml = (
  topicId: string,
  n: number,
  before: string,
  after: string,
  options: string[],
  answer: string,
  hint?: string,
): Exercise => ({
  type: 'missing-letter',
  id: `${topicId}-${pad(n)}`,
  topicId,
  before,
  after,
  options,
  answer,
  hint,
});

/** multiple-choice: feleletválasztós */
export const mc = (
  topicId: string,
  n: number,
  question: string,
  options: string[],
  answerIndex: number,
  hint?: string,
): Exercise => ({
  type: 'multiple-choice',
  id: `${topicId}-${pad(n)}`,
  topicId,
  question,
  options,
  answerIndex,
  hint,
});

/** sort-into-groups: szavak csoportosítása (drag & drop) */
export const sg = (
  topicId: string,
  n: number,
  groups: string[],
  items: [string, string][],
  hint?: string,
): Exercise => ({
  type: 'sort-into-groups',
  id: `${topicId}-${pad(n)}`,
  topicId,
  groups,
  items: items.map(([text, group]) => ({ text, group })),
  hint,
});

/** order-items: sorbarendezés (betűrend) */
export const oi = (
  topicId: string,
  n: number,
  correctOrder: string[],
  shuffled: string[],
  hint?: string,
): Exercise => ({
  type: 'order-items',
  id: `${topicId}-${pad(n)}`,
  topicId,
  items: shuffled,
  correctOrder,
  hint,
});

/** punctuation: mondatvégi írásjel */
export const pu = (
  topicId: string,
  n: number,
  sentence: string,
  answer: string,
  hint?: string,
): Exercise => ({
  type: 'punctuation',
  id: `${topicId}-${pad(n)}`,
  topicId,
  sentence,
  options: ['.', '?', '!'],
  answer,
  hint,
});

/**
 * numeric-input: számbillentyűzetes válasz.
 * A szorzótáblához és a számolási feladatokhoz ez kell, nem feleletválasztós —
 * négy opcióból a helyes kitippelhető, és akkor a kizárásos módszert gyakorolja
 * a szorzótábla helyett.
 */
export const ni = (
  topicId: string,
  n: number,
  question: string,
  answer: number,
  opts?: { unit?: string; tolerance?: number; hint?: string; paper?: boolean },
): Exercise => ({
  type: 'numeric-input',
  id: `${topicId}-${pad(n)}`,
  topicId,
  question,
  answer,
  unit: opts?.unit,
  tolerance: opts?.tolerance,
  hint: opts?.hint,
  paper: opts?.paper,
});

/** numeric-input füzetben megoldandó feladathoz (szöveges feladat, szerkesztés). */
export const nip = (
  topicId: string,
  n: number,
  question: string,
  answer: number,
  opts?: { unit?: string; tolerance?: number; hint?: string },
): Exercise => ni(topicId, n, question, answer, { ...opts, paper: true });

/** match-pairs: párosítás */
export const mp = (
  topicId: string,
  n: number,
  pairs: [string, string][],
  hint?: string,
): Exercise => ({
  type: 'match-pairs',
  id: `${topicId}-${pad(n)}`,
  topicId,
  pairs: pairs.map(([left, right]) => ({ left, right })),
  hint,
});
