import { ni, mc } from '../builders';
import type { Exercise } from '@/types/exercise';

/**
 * Írásbeli összeadás (93–102.), kivonás (104–113.) és szorzás (157–164. oldal).
 *
 * Mind `paper: true` — az írásbeli művelet lényege, hogy egymás alá írja és
 * oszloponként számol. A füzetben oldja meg, az appba az eredményt írja be.
 *
 * A számpárok úgy vannak megválasztva, hogy a könyv nehézségi lépcsőjét
 * kövessék: váltás nélkül → egy helyi értéken váltás → több helyi értéken.
 * Az eredmények számítva készülnek.
 */

const mkAdd = (topicId: string, pairs: [number, number][], from = 1): Exercise[] =>
  pairs.map(([a, b], i) =>
    ni(topicId, from + i, `${a} + ${b}`, a + b, { paper: true }),
  );

const mkSub = (topicId: string, pairs: [number, number][], from = 1): Exercise[] =>
  pairs.map(([a, b], i) =>
    ni(topicId, from + i, `${a} − ${b}`, a - b, { paper: true }),
  );

const mkMul = (topicId: string, pairs: [number, number][], from = 1): Exercise[] =>
  pairs.map(([a, b], i) =>
    ni(topicId, from + i, `${a} × ${b}`, a * b, { paper: true }),
  );

// ---------------------------------------------------------------- összeadás

const TA = 'matek-irasbeli-osszeadas';

export const irasbeliOsszeadasExercises: Exercise[] = [
  // váltás nélkül (93–94. o.)
  ...mkAdd(TA, [[234, 145], [321, 456], [512, 236], [143, 625], [702, 184], [251, 348]], 1),
  // váltás az egyes helyi értéken (95–96. o.)
  ...mkAdd(TA, [[237, 145], [328, 254], [416, 237], [529, 163], [145, 338], [607, 285]], 7),
  // váltás a tízes helyi értéken (97–98. o.)
  ...mkAdd(TA, [[182, 153], [271, 264], [364, 182], [493, 125], [256, 371], [148, 290]], 13),
  // váltás több helyi értéken (99–101. o.)
  ...mkAdd(TA, [[287, 156], [398, 274], [469, 285], [576, 248], [387, 419], [295, 638]], 19),
  // három tag
  ni(TA, 25, '125 + 234 + 108', 467, { paper: true }),
  ni(TA, 26, '216 + 147 + 325', 688, { paper: true }),
  ni(TA, 27, '304 + 219 + 176', 699, { paper: true }),
  mc(TA, 28, 'Hol kezded az írásbeli összeadást?', ['az egyesek oszlopánál', 'a százasok oszlopánál', 'mindegy'], 0),
  mc(TA, 29, 'Mit jelent, ha az egyesek összege 13?', ['3-at írsz, 1-et viszel', '13-at írsz', '1-et írsz, 3-at viszel'], 0),
];

// ------------------------------------------------------------------ kivonás

const TK = 'matek-irasbeli-kivonas';

export const irasbeliKivonasExercises: Exercise[] = [
  // váltás nélkül (104–105. o.)
  ...mkSub(TK, [[487, 243], [675, 324], [598, 176], [859, 427], [746, 215], [963, 541]], 1),
  // váltás az egyes helyi értéken (106–107. o.)
  ...mkSub(TK, [[432, 128], [571, 236], [645, 319], [827, 248], [954, 426], [763, 157]], 7),
  // váltás a tízes helyi értéken (108. o.)
  ...mkSub(TK, [[524, 182], [736, 264], [815, 371], [642, 290], [957, 483], [428, 135]], 13),
  // váltás két helyi értéken (109–110. o.)
  ...mkSub(TK, [[623, 287], [814, 358], [925, 476], [732, 495], [546, 289], [861, 374]], 19),
  // nulla a kivonásban (111. o.)
  ...mkSub(TK, [[600, 247], [800, 365], [906, 428], [700, 192], [1000, 453], [405, 168]], 25),
  mc(TK, 31, 'Mit teszel, ha az egyesek helyén kevesebb van, mint amennyit kivonnál?', ['váltasz egy tízest', 'megfordítod a számokat', 'nullát írsz'], 0),
  mc(TK, 32, 'Hogyan ellenőrzöd a kivonást?', ['összeadással', 'újra kivonással', 'szorzással'], 0, 'A különbséghez add hozzá a kivonandót — vissza kell kapnod a kisebbítendőt.'),
];

// ------------------------------------------------------------------- szorzás

const TSZ = 'matek-irasbeli-szorzas';

export const irasbeliSzorzasExercises: Exercise[] = [
  // tízesátlépés nélkül
  ...mkMul(TSZ, [[23, 3], [12, 4], [31, 3], [21, 4], [32, 2], [43, 2]], 1),
  // tízesátlépés az egyes helyi értéken (158. o.)
  ...mkMul(TSZ, [[27, 3], [19, 4], [36, 2], [48, 2], [29, 3], [17, 5]], 7),
  // tízesátlépés a tízes helyi értéken (159. o.)
  ...mkMul(TSZ, [[62, 4], [71, 5], [83, 3], [52, 6], [91, 7], [74, 2]], 13),
  // tízesátlépés több helyi értéken (160. o.)
  ...mkMul(TSZ, [[48, 7], [67, 5], [89, 4], [76, 6], [58, 8], [94, 3]], 19),
  // a nulla szerepe (161. o.)
  ...mkMul(TSZ, [[30, 7], [50, 6], [204, 3], [105, 4], [60, 9], [302, 2]], 25),
  mc(TSZ, 31, 'Mennyi bármely szám szorozva nullával?', ['0', 'maga a szám', '1'], 0),
  mc(TSZ, 32, 'A 204 × 3 szorzásban mi történik a tízesek helyén álló nullával?', ['0 × 3 = 0, de az átvitelt hozzá kell adni', 'kimarad a számolásból', 'eggyé válik'], 0),
];
