import { ni, mc, oi, mp } from '../builders';
import type { Exercise } from '@/types/exercise';

/**
 * Negatív számok (152.), törtszámok (171.) és római számok (188. oldal).
 *
 * Mindhárom a számfogalom bővítése: a tankönyv tapasztalati szinten vezeti be
 * őket, nem műveletvégzésre. Ennek megfelelően itt is a felismerés, az
 * összehasonlítás és a leolvasás a feladat, nem a számolás.
 */

// ---------------------------------------------------------- negatív számok

const TN = 'matek-negativ-szamok';

export const negativSzamokExercises: Exercise[] = [
  mc(TN, 1, 'Hol találkozol negatív számokkal a hétköznapokban?', ['hőmérő', 'mérleg', 'vonalzó'], 0),
  mc(TN, 2, 'Melyik a hidegebb? −5 °C vagy −12 °C', ['−5 °C', '−12 °C'], 1, 'Minél nagyobb a szám a mínusz után, annál hidegebb.'),
  mc(TN, 3, 'Melyik a hidegebb? 0 °C vagy −3 °C', ['0 °C', '−3 °C'], 1),
  mc(TN, 4, 'Melyik a melegebb? −8 °C vagy −2 °C', ['−8 °C', '−2 °C'], 1),
  mc(TN, 5, 'Melyik szám nagyobb? −4 vagy 1', ['−4', '1'], 1),
  mc(TN, 6, 'Melyik szám nagyobb? −7 vagy −3', ['−7', '−3'], 1),
  mc(TN, 7, 'Melyik szám kisebb? 0 vagy −1', ['0', '−1'], 1),
  mc(TN, 8, 'Hol áll a 0 a számegyenesen?', ['a negatív és a pozitív számok között', 'a negatív számok előtt', 'a pozitív számok után'], 0),
  oi(TN, 9, ['−9', '−4', '0', '3', '7'], ['3', '−4', '7', '−9', '0'], 'Növekvő sorrendbe! A legkisebb a legnagyobb mínuszos szám.'),
  oi(TN, 10, ['−10', '−5', '−1', '2'], ['−1', '2', '−10', '−5']),
  ni(TN, 11, 'Reggel −3 °C volt, délre 8 fokkal melegedett. Hány fok lett?', 5, { unit: '°C', paper: true }),
  ni(TN, 12, 'Reggel −6 °C volt, délre 10 fokkal melegedett. Hány fok lett?', 4, { unit: '°C', paper: true }),
  ni(TN, 13, 'Este 4 °C volt, éjjel 9 fokot hűlt. Hány fokkal van a 0 alatt?', 5, { unit: '°C', paper: true, hint: 'A válasz a mínusz utáni szám.' }),
  ni(TN, 14, 'Hány fok a különbség −5 °C és 3 °C között?', 8, { unit: '°C', paper: true }),
  ni(TN, 15, 'Hány fok a különbség −2 °C és −9 °C között?', 7, { unit: '°C', paper: true }),
];

// ------------------------------------------------------------- törtszámok

const TT = 'matek-tortszamok';

export const tortszamokExercises: Exercise[] = [
  mc(TT, 1, 'Mit jelent az, hogy egy tortát felezünk?', ['két egyenlő részre osztjuk', 'két részre osztjuk', 'kettővel szorozzuk'], 0),
  mc(TT, 2, 'Hány egyenlő részre osztod, ha negyedelsz?', ['2', '4', '8'], 1),
  mc(TT, 3, 'Hány egyenlő részre osztod, ha harmadolsz?', ['3', '4', '6'], 0),
  ni(TT, 4, 'Mennyi 20 fele?', 10),
  ni(TT, 5, 'Mennyi 36 fele?', 18),
  ni(TT, 6, 'Mennyi 100 fele?', 50),
  ni(TT, 7, 'Mennyi 24 negyede?', 6),
  ni(TT, 8, 'Mennyi 40 negyede?', 10),
  ni(TT, 9, 'Mennyi 80 negyede?', 20),
  ni(TT, 10, 'Mennyi 30 harmada?', 10),
  ni(TT, 11, 'Mennyi 27 harmada?', 9),
  ni(TT, 12, 'Mennyi 60 harmada?', 20),
  ni(TT, 13, 'Mennyi 50 ötöde?', 10),
  ni(TT, 14, 'Mennyi 48 hatoda?', 8),
  ni(TT, 15, 'Mennyi 70 tizede?', 7),
  mc(TT, 16, 'Melyik a nagyobb rész? egy fél vagy egy negyed', ['egy fél', 'egy negyed'], 0, 'Minél több részre osztod, annál kisebb egy rész.'),
  mc(TT, 17, 'Melyik a nagyobb rész? egy harmad vagy egy hatod', ['egy harmad', 'egy hatod'], 0),
  mc(TT, 18, 'Hány negyed tesz ki egy egészet?', ['2', '4', '8'], 1),
  mc(TT, 19, 'Hány harmad tesz ki egy egészet?', ['3', '4', '6'], 0),
  ni(TT, 20, 'Egy 24 szeletes pizza felét megettétek. Hány szelet maradt?', 12, { unit: 'szelet', paper: true }),
  ni(TT, 21, 'Egy 32 lapos füzet negyedét teleírtad. Hány lapot írtál tele?', 8, { unit: 'lap', paper: true }),
  ni(TT, 22, 'Egy 60 perces óra harmada telt el. Hány perc ez?', 20, { unit: 'perc', paper: true }),
];

// ---------------------------------------------------------- római számok

const TR = 'matek-romai-szamok';

export const romaiSzamokExercises: Exercise[] = [
  ni(TR, 1, 'Melyik szám ez? V', 5),
  ni(TR, 2, 'Melyik szám ez? X', 10),
  ni(TR, 3, 'Melyik szám ez? L', 50),
  ni(TR, 4, 'Melyik szám ez? C', 100),
  ni(TR, 5, 'Melyik szám ez? III', 3),
  ni(TR, 6, 'Melyik szám ez? VII', 7),
  ni(TR, 7, 'Melyik szám ez? IX', 9, { hint: 'A kisebb jel a nagyobb előtt kivonást jelent.' }),
  ni(TR, 8, 'Melyik szám ez? XIV', 14),
  ni(TR, 9, 'Melyik szám ez? XXI', 21),
  ni(TR, 10, 'Melyik szám ez? XL', 40),
  ni(TR, 11, 'Melyik szám ez? LXV', 65),
  ni(TR, 12, 'Melyik szám ez? XC', 90),
  ni(TR, 13, 'Melyik szám ez? XIX', 19),
  ni(TR, 14, 'Melyik szám ez? XXXVIII', 38),
  mp(TR, 15, [['IV', '4'], ['VI', '6'], ['XI', '11'], ['XV', '15']], 'Párosítsd a római számot az arab számmal!'),
  mp(TR, 16, [['XXV', '25'], ['XXX', '30'], ['XLV', '45'], ['LX', '60']]),
  mc(TR, 17, 'Hogyan írjuk római számmal a 4-et?', ['IIII', 'IV', 'VI'], 1),
  mc(TR, 18, 'Hogyan írjuk római számmal a 9-et?', ['VIIII', 'IX', 'XI'], 1),
  mc(TR, 19, 'Hogyan írjuk római számmal a 12-t?', ['XII', 'IIX', 'XXI'], 0),
  mc(TR, 20, 'Hol találkozol római számokkal?', ['óra számlapján', 'árcédulán', 'rendszámon'], 0),
  mc(TR, 21, 'Melyik a nagyobb? XL vagy LX', ['XL', 'LX'], 1, 'XL = 40, LX = 60.'),
];
