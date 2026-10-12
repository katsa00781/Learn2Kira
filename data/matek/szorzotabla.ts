import { ni } from '../builders';
import type { Exercise } from '@/types/exercise';

/**
 * Szorzótábla – a tankönyv bontásában (30–35. oldal).
 *
 * A feladatok SZÁMÍTVA készülnek, nem kézzel listázva: 200+ szorzat kézi
 * begépelése garantáltan hozna hibás eredményt, és a validátor sem fogná meg,
 * mert nincs mihez hasonlítania. Így a szorzat definíció szerint helyes.
 *
 * Minden szorzóhoz háromféle feladat készül:
 *   m × k = ?        (szorzás)
 *   m·k : m = ?      (osztás, a szorzás megfordítása)
 *   m × ? = m·k      (hiányos szorzás — ez a legnehezebb)
 *
 * Átfedés elkerülése: a 2-es sort csak a 2,5,10 témakör tartalmazza, a 10-es
 * sort szintén. A könyv címei ismétlik őket (a 31. oldal címe "2-vel, 4-gyel,
 * 8-cal"), mert ott a kétszerezésre épít — de ugyanazt a kártyát kétszer
 * felvenni a Leitner-dobozba félrevezető statisztikát adna.
 */

type Row = { m: number; label?: string };

const buildRows = (topicId: string, rows: Row[], startAt = 1): Exercise[] => {
  const out: Exercise[] = [];
  let n = startAt;
  for (const { m } of rows) {
    for (let k = 1; k <= 10; k++) {
      out.push(ni(topicId, n++, `${m} × ${k}`, m * k));
    }
    for (let k = 1; k <= 10; k++) {
      out.push(ni(topicId, n++, `${m * k} : ${m}`, k));
    }
    // hiányos szorzás: minden második k, hogy ne duzzadjon fel a témakör
    for (let k = 2; k <= 10; k += 2) {
      out.push(ni(topicId, n++, `${m} × ? = ${m * k}`, k, {
        hint: `Kérdezd fordítva: ${m * k} : ${m} = ?`,
      }));
    }
  }
  return out;
};

/** 30. oldal – 2, 5, 10 */
export const szorzotabla2510Exercises: Exercise[] = buildRows('matek-szorzotabla-2-5-10', [
  { m: 2 },
  { m: 5 },
  { m: 10 },
]);

/** 31. oldal – 4, 8 (a 2-es sor a fenti témakörben van; itt a kétszerezés a lényeg) */
export const szorzotabla48Exercises: Exercise[] = buildRows('matek-szorzotabla-4-8', [
  { m: 4 },
  { m: 8 },
]);

/** 32. oldal – 3, 6 */
export const szorzotabla36Exercises: Exercise[] = buildRows('matek-szorzotabla-3-6', [
  { m: 3 },
  { m: 6 },
]);

/** 33. oldal – 9 */
export const szorzotabla9Exercises: Exercise[] = buildRows('matek-szorzotabla-9', [{ m: 9 }]);

/** 34. oldal – 7 */
export const szorzotabla7Exercises: Exercise[] = buildRows('matek-szorzotabla-7', [{ m: 7 }]);

/**
 * 35. oldal – 0, 1 és 10 a szorzásban.
 * Itt nem sor-drill van, hanem a három különleges szabály.
 * A nullával való OSZTÁS nincs és nem is lehet feladat.
 */
const T0 = 'matek-szorzotabla-0-1-10';
export const szorzotabla0110Exercises: Exercise[] = [
  ...[3, 7, 12, 25, 48, 100].map((k, i) =>
    ni(T0, i + 1, `${k} × 0`, 0, { hint: 'Bármit szorzol nullával, nulla lesz.' }),
  ),
  ...[4, 9, 15, 60].map((k, i) => ni(T0, i + 7, `0 × ${k}`, 0)),
  ...[3, 7, 12, 25, 48, 100].map((k, i) =>
    ni(T0, i + 11, `${k} × 1`, k, { hint: 'Az eggyel való szorzás nem változtat semmit.' }),
  ),
  ...[4, 9, 15, 60].map((k, i) => ni(T0, i + 17, `1 × ${k}`, k)),
  ...[3, 7, 12, 25, 48].map((k, i) => ni(T0, i + 21, `${k} : 1`, k)),
  ...[0, 0, 0].map((_, i) => ni(T0, i + 26, `0 : ${[5, 8, 10][i]}`, 0, {
    hint: 'Ha nincs mit szétosztani, mindenki nullát kap.',
  })),
  ...[3, 7, 12, 25, 48].map((k, i) =>
    ni(T0, i + 29, `${k} × 10`, k * 10, { hint: 'Tízzel szorozva egy nulla kerül a szám végére.' }),
  ),
  ...[30, 70, 120, 250, 480].map((k, i) => ni(T0, i + 34, `${k} : 10`, k / 10)),
];
