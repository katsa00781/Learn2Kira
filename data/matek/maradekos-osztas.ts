import { ni, mc } from '../builders';
import type { Exercise } from '@/types/exercise';

/**
 * Maradékos osztás – tankönyv 41–49. oldal.
 *
 * A könyv osztónként külön alfejezetet szán rá (10, 5, 2–4, 8, 3–6, 9, 7),
 * de egy témakörként tartjuk: hét tízfeladatos témakör túl vékony lenne a
 * Leitner-dobozhoz, és a fogalom egy és ugyanaz.
 *
 * A feladatok számítva készülnek. Két kérdést teszünk fel külön:
 * mennyi a hányados, és mennyi a maradék — ezt a gyerekek gyakran
 * összekeverik, és külön kártyaként külön is gyakorolható.
 */

const T = 'matek-maradekos-osztas';

/** Osztandók osztónként: szándékosan vegyesen van köztük maradék nélküli is. */
const CASES: [osztando: number, oszto: number][] = [
  // 10-zel (42. o.)
  [47, 10], [83, 10], [90, 10], [26, 10], [65, 10],
  // 5-tel (43. o.)
  [38, 5], [47, 5], [50, 5], [23, 5], [36, 5],
  // 2-vel és 4-gyel (44. o.)
  [17, 2], [29, 2], [34, 2], [27, 4], [39, 4], [44, 4],
  // 8-cal (45. o.)
  [35, 8], [59, 8], [72, 8], [45, 8],
  // 3-mal és 6-tal (46. o.)
  [25, 3], [37, 3], [48, 3], [40, 6], [53, 6], [54, 6],
  // 9-cel (47. o.)
  [31, 9], [58, 9], [63, 9], [76, 9],
  // 7-tel (48. o.)
  [30, 7], [45, 7], [56, 7], [68, 7],
];

const quotient: Exercise[] = CASES.map(([a, b], i) =>
  ni(T, i + 1, `${a} : ${b} = ? (hányados)`, Math.floor(a / b), {
    hint: `Hányszor fér bele a ${b} a ${a}-ba maradéktalanul?`,
  }),
);

const remainder: Exercise[] = CASES.map(([a, b], i) =>
  ni(T, i + 1 + CASES.length, `${a} : ${b} — mennyi a maradék?`, a % b, {
    hint: 'Ami a végén megmarad, és már nem fér bele még egyszer az osztó.',
  }),
);

const concept: Exercise[] = [
  mc(T, 101, 'Mekkora lehet a maradék, ha 5-tel osztunk?', ['0 és 4 között', '0 és 5 között', 'bármekkora'], 0, 'A maradék mindig kisebb az osztónál.'),
  mc(T, 102, 'Mekkora lehet a maradék, ha 7-tel osztunk?', ['0 és 7 között', '0 és 6 között', '1 és 7 között'], 1),
  mc(T, 103, 'Lehet-e a maradék nagyobb az osztónál?', ['Igen', 'Nem'], 1, 'Ha nagyobb lenne, még egyszer belefért volna.'),
  mc(T, 104, 'Mit jelent, ha a maradék 0?', ['Az osztás nem maradékos', 'Hibás a számolás', 'Nincs ilyen'], 0),
  mc(T, 105, 'Melyik szám osztható maradék nélkül 4-gyel?', ['27', '32', '39'], 1),
  mc(T, 106, 'Melyik szám osztható maradék nélkül 9-cel?', ['58', '63', '76'], 1),
  mc(T, 107, 'Ellenőrzés: 38 : 5 = 7, maradék 3. Mennyi 7 × 5 + 3?', ['38', '35', '40'], 0, 'Így tudod ellenőrizni a maradékos osztást.'),
  mc(T, 108, 'Ellenőrzés: 59 : 8 = 7, maradék 3. Mennyi 7 × 8 + 3?', ['56', '59', '62'], 1),
];

export const maradekosOsztasExercises: Exercise[] = [...quotient, ...remainder, ...concept];
