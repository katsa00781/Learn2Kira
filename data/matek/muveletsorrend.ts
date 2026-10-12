import { ni, mc } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'matek-muveletsorrend';

/**
 * A műveletvégzés sorrendje és a zárójel – tankönyv 39. és 134. oldal.
 *
 * A párba állított feladatok (ugyanaz a három szám zárójellel és anélkül)
 * szándékosak: ettől látszik, hogy a zárójel megváltoztatja az eredményt.
 */
export const muveletsorrendExercises: Exercise[] = [
  mc(T, 1, 'Melyik műveletet kell előbb elvégezni? 4 + 3 × 2', ['4 + 3', '3 × 2'], 1, 'A szorzás és az osztás megelőzi az összeadást és a kivonást.'),
  mc(T, 2, 'Melyik műveletet kell előbb elvégezni? (4 + 3) × 2', ['4 + 3', '3 × 2'], 0, 'A zárójel mindent megelőz.'),
  mc(T, 3, 'Melyik műveletet kell előbb elvégezni? 20 − 12 : 4', ['20 − 12', '12 : 4'], 1),
  mc(T, 4, 'Melyik műveletet kell előbb elvégezni? 18 : 2 + 4', ['18 : 2', '2 + 4'], 0),

  ni(T, 5, '4 + 3 × 2', 10),
  ni(T, 6, '(4 + 3) × 2', 14),
  ni(T, 7, '20 − 12 : 4', 17),
  ni(T, 8, '(20 − 12) : 4', 2),
  ni(T, 9, '5 × 3 + 2', 17),
  ni(T, 10, '5 × (3 + 2)', 25),
  ni(T, 11, '36 : 6 − 2', 4),
  ni(T, 12, '36 : (6 − 2)', 9),
  ni(T, 13, '10 + 6 : 2', 13),
  ni(T, 14, '(10 + 6) : 2', 8),
  ni(T, 15, '7 × 4 − 8', 20),
  ni(T, 16, '7 × (4 − 8 : 4)', 14, { hint: 'Előbb a zárójelen belül is az osztás jön.' }),

  ni(T, 17, '2 × 3 + 4 × 5', 26, { hint: 'Mindkét szorzást végezd el, utána add össze.' }),
  ni(T, 18, '9 × 2 − 3 × 4', 6),
  ni(T, 19, '24 : 4 + 18 : 3', 12),
  ni(T, 20, '50 − 6 × 7', 8),
  ni(T, 21, '(12 + 8) : 5', 4),
  ni(T, 22, '100 − (40 + 25)', 35),
  ni(T, 23, '6 × (10 − 4)', 36),
  ni(T, 24, '(45 : 9) × 8', 40),

  mc(T, 25, 'Hol kell zárójel, hogy az eredmény 20 legyen? 2 + 3 × 4', ['2 + (3 × 4)', '(2 + 3) × 4'], 1),
  mc(T, 26, 'Hol kell zárójel, hogy az eredmény 30 legyen? 10 × 5 − 2', ['10 × (5 − 2)', '(10 × 5) − 2'], 0),
  mc(T, 27, 'Igaz vagy hamis? 8 + 2 × 5 = 50', ['Igaz', 'Hamis'], 1, 'Előbb a szorzás: 8 + 10 = 18.'),
  mc(T, 28, 'Igaz vagy hamis? (8 + 2) × 5 = 50', ['Igaz', 'Hamis'], 0),
];
