import { ni, mc, sg, oi } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'matek-helyi-ertek';

/**
 * Helyi érték, alaki érték, valódi érték – tankönyv 68. oldal.
 *
 * A három fogalom megkülönböztetése a buktató:
 *   a 348-ban a 4 ALAKI értéke 4, HELYI értéke a tízes, VALÓDI értéke 40.
 * A számkör 1000 (a 3. osztályos tankönyv eddig megy, nem 10 000-ig).
 */
export const helyiErtekExercises: Exercise[] = [
  mc(T, 1, 'A 348 számban melyik helyi értéken áll a 4?', ['egyes', 'tízes', 'százas'], 1),
  mc(T, 2, 'A 517 számban melyik helyi értéken áll az 5?', ['egyes', 'tízes', 'százas'], 2),
  mc(T, 3, 'A 926 számban melyik helyi értéken áll a 6?', ['egyes', 'tízes', 'százas'], 0),
  mc(T, 4, 'A 703 számban melyik helyi értéken áll a 0?', ['egyes', 'tízes', 'százas'], 1),

  ni(T, 5, 'Mennyi a 4 valódi értéke a 348 számban?', 40, { hint: 'A tízes helyen áll, tehát 4 tízes.' }),
  ni(T, 6, 'Mennyi az 5 valódi értéke az 517 számban?', 500),
  ni(T, 7, 'Mennyi a 6 valódi értéke a 926 számban?', 6),
  ni(T, 8, 'Mennyi a 2 valódi értéke a 926 számban?', 20),
  ni(T, 9, 'Mennyi a 9 valódi értéke a 926 számban?', 900),
  ni(T, 10, 'Mennyi a 7 valódi értéke a 703 számban?', 700),
  mc(T, 11, 'Mennyi a 4 alaki értéke a 348 számban?', ['4', '40', '400'], 0, 'Az alaki érték maga a leírt számjegy.'),
  mc(T, 12, 'Mennyi az 5 alaki értéke az 517 számban?', ['5', '50', '500'], 0),

  ni(T, 13, 'Hány százas van a 648 számban?', 6),
  ni(T, 14, 'Hány tízes van a 648 számban?', 4),
  ni(T, 15, 'Hány egyes van a 648 számban?', 8),
  ni(T, 16, 'Hány százas van a 905 számban?', 9),
  ni(T, 17, 'Hány tízes van a 905 számban?', 0),

  ni(T, 18, 'Melyik szám ez? 3 százas, 7 tízes, 2 egyes', 372),
  ni(T, 19, 'Melyik szám ez? 5 százas, 0 tízes, 9 egyes', 509),
  ni(T, 20, 'Melyik szám ez? 8 százas, 4 tízes, 0 egyes', 840),
  ni(T, 21, 'Melyik szám ez? 1 százas, 1 tízes, 1 egyes', 111),
  ni(T, 22, 'Mennyi 600 + 30 + 7?', 637),
  ni(T, 23, 'Mennyi 200 + 50?', 250),
  ni(T, 24, 'Mennyi 400 + 9?', 409),

  sg(T, 25, ['háromjegyű', 'kétjegyű'], [['348', 'háromjegyű'], ['47', 'kétjegyű'], ['905', 'háromjegyű'], ['80', 'kétjegyű'], ['100', 'háromjegyű'], ['99', 'kétjegyű']]),
  oi(T, 26, ['186', '268', '620', '826'], ['620', '186', '826', '268'], 'Növekvő sorrendbe! Előbb a százasokat nézd.'),
  oi(T, 27, ['309', '390', '903', '930'], ['930', '390', '903', '309'], 'Ugyanazok a számjegyek, más sorrendben.'),
  oi(T, 28, ['99', '101', '110', '1000'], ['1000', '110', '99', '101']),

  mc(T, 29, 'Melyik a nagyobb? 487 vagy 478', ['487', '478'], 0, 'A százasok egyeznek, a tízeseket nézd.'),
  mc(T, 30, 'Melyik a nagyobb? 609 vagy 690', ['609', '690'], 1),
];
