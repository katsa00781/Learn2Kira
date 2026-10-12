import { ni } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'matek-fejben-szamolas';

/**
 * Összeadás, kivonás fejben 1000-ig – tankönyv 84–91. oldal.
 * A könyv lépcsőzetesen építi: kerek százasok → százasok és tízesek →
 * százasátlépés. A feladatok számítva készülnek, így az eredmény
 * definíció szerint helyes.
 */

const mk = (pairs: [number, number][], op: '+' | '−', from: number): Exercise[] =>
  pairs.map(([a, b], i) =>
    ni(T, from + i, `${a} ${op} ${b}`, op === '+' ? a + b : a - b),
  );

/** 84–85. oldal: kerek százasok */
const kerekSzazas: Exercise[] = [
  ...mk([[200, 300], [400, 500], [600, 300], [100, 800], [500, 400], [700, 200]], '+', 1),
  ...mk([[700, 300], [900, 400], [600, 200], [1000, 500], [800, 600], [500, 100]], '−', 7),
];

/** 86–87. oldal: kerek százasok és tízesek */
const szazasTizes: Exercise[] = [
  ...mk([[320, 40], [450, 300], [260, 130], [510, 280], [170, 620], [440, 350]], '+', 13),
  ...mk([[480, 50], [730, 200], [650, 140], [890, 370], [560, 230], [920, 610]], '−', 19),
];

/** 89. oldal: százasátlépés */
const atlepes: Exercise[] = [
  ...mk([[180, 50], [270, 60], [390, 80], [460, 70], [550, 90], [740, 80], [290, 30], [670, 60]], '+', 25),
  ...mk([[320, 50], [410, 70], [600, 40], [730, 90], [850, 60], [240, 80], [510, 30], [900, 70]], '−', 33),
];

/** Pótlás – a könyv hiányos feladatai */
const potlas: Exercise[] = [
  ni(T, 41, '400 + ? = 900', 500),
  ni(T, 42, '250 + ? = 600', 350),
  ni(T, 43, '? + 300 = 750', 450),
  ni(T, 44, '800 − ? = 350', 450),
  ni(T, 45, '? − 200 = 480', 680),
  ni(T, 46, '630 + ? = 1000', 370, { hint: 'Mennyi hiányzik az ezerig?' }),
  ni(T, 47, '180 + ? = 1000', 820),
  ni(T, 48, '? + 450 = 1000', 550),
];

export const fejbenSzamolasExercises: Exercise[] = [
  ...kerekSzazas,
  ...szazasTizes,
  ...atlepes,
  ...potlas,
];
