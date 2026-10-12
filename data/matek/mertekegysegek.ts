import { ni, mc, oi } from '../builders';
import type { Exercise } from '@/types/exercise';

/**
 * Mérés – hosszúság (78.), űrtartalom (117.), tömeg (154.) és idő (167–170. oldal).
 *
 * A mértékegység-váltás a tipikus hibaforrás, ezért a feladatok nagy része
 * váltás. A becsléses feladatok `tolerance`-szal mennek: ott egy sáv a jó
 * válasz, nem egy szám.
 *
 * Ezeket a feladatokat a validátor NEM tudja kiszámolni (szöveges kérdések),
 * ezért itt a kézi gondosság az egyetlen védelem.
 */

// ---------------------------------------------------------------- hosszúság

const TH = 'matek-hosszusag';

export const hosszusagExercises: Exercise[] = [
  ni(TH, 1, 'Hány cm 1 m?', 100, { unit: 'cm' }),
  ni(TH, 2, 'Hány mm 1 cm?', 10, { unit: 'mm' }),
  ni(TH, 3, 'Hány cm 1 dm?', 10, { unit: 'cm' }),
  ni(TH, 4, 'Hány dm 1 m?', 10, { unit: 'dm' }),
  ni(TH, 5, 'Hány m 1 km?', 1000, { unit: 'm' }),
  ni(TH, 6, 'Hány cm 3 m?', 300, { unit: 'cm' }),
  ni(TH, 7, 'Hány mm 7 cm?', 70, { unit: 'mm' }),
  ni(TH, 8, 'Hány cm 45 dm?', 450, { unit: 'cm' }),
  ni(TH, 9, 'Hány dm 8 m?', 80, { unit: 'dm' }),
  ni(TH, 10, 'Hány m fél kilométer?', 500, { unit: 'm' }),
  ni(TH, 11, 'Hány cm 2 m 50 cm?', 250, { unit: 'cm' }),
  ni(TH, 12, 'Hány mm 4 cm 5 mm?', 45, { unit: 'mm' }),
  ni(TH, 13, 'Hány m negyed kilométer?', 250, { unit: 'm' }),
  ni(TH, 14, '160 cm az 1 m és még hány cm?', 60, { unit: 'cm' }),
  ni(TH, 15, '250 cm az 2 m és még hány cm?', 50, { unit: 'cm' }),
  mc(TH, 16, 'Melyik a hosszabb? 1 m vagy 90 cm', ['1 m', '90 cm'], 0),
  mc(TH, 17, 'Melyik a hosszabb? 50 cm vagy 6 dm', ['50 cm', '6 dm'], 1, '6 dm = 60 cm.'),
  mc(TH, 18, 'Melyik a rövidebb? 8 cm vagy 75 mm', ['8 cm', '75 mm'], 1),
  oi(TH, 19, ['5 mm', '3 cm', '2 dm', '1 m'], ['2 dm', '1 m', '5 mm', '3 cm'], 'Növekvő sorrendbe! Előbb válts azonos egységre.'),
  ni(TH, 20, 'Becsüld meg: hány cm magas egy harmadikos gyerek?', 135, { unit: 'cm', tolerance: 20 }),
  ni(TH, 21, 'Becsüld meg: hány cm hosszú egy ceruza?', 17, { unit: 'cm', tolerance: 5 }),
  ni(TH, 22, 'Becsüld meg: hány cm széles egy ajtó?', 90, { unit: 'cm', tolerance: 15 }),
  mc(TH, 23, 'Melyik egységgel mérnéd egy ceruza hosszát?', ['cm', 'km', 'm'], 0),
  mc(TH, 24, 'Melyik egységgel mérnéd Paks és Budapest távolságát?', ['cm', 'm', 'km'], 2),
];

// --------------------------------------------------------------- űrtartalom

const TU = 'matek-urtartalom';

export const urtartalomExercises: Exercise[] = [
  ni(TU, 1, 'Hány dl 1 l?', 10, { unit: 'dl' }),
  ni(TU, 2, 'Hány cl 1 dl?', 10, { unit: 'cl' }),
  ni(TU, 3, 'Hány ml 1 cl?', 10, { unit: 'ml' }),
  ni(TU, 4, 'Hány ml 1 dl?', 100, { unit: 'ml' }),
  ni(TU, 5, 'Hány ml 1 l?', 1000, { unit: 'ml' }),
  ni(TU, 6, 'Hány dl 3 l?', 30, { unit: 'dl' }),
  ni(TU, 7, 'Hány dl 5 l?', 50, { unit: 'dl' }),
  ni(TU, 8, 'Hány ml 4 dl?', 400, { unit: 'ml' }),
  ni(TU, 9, 'Hány cl 7 dl?', 70, { unit: 'cl' }),
  ni(TU, 10, 'Hány dl fél liter?', 5, { unit: 'dl' }),
  ni(TU, 11, 'Hány ml fél liter?', 500, { unit: 'ml' }),
  ni(TU, 12, 'Hány dl 2 l 5 dl?', 25, { unit: 'dl' }),
  mc(TU, 13, 'Melyik a több? 1 l vagy 9 dl', ['1 l', '9 dl'], 0),
  mc(TU, 14, 'Melyik a több? 400 ml vagy 5 dl', ['400 ml', '5 dl'], 1, '5 dl = 500 ml.'),
  mc(TU, 15, 'Melyik a kevesebb? 3 dl vagy 250 ml', ['3 dl', '250 ml'], 1),
  oi(TU, 16, ['50 ml', '3 dl', '1 l'], ['1 l', '50 ml', '3 dl']),
  ni(TU, 17, 'Becsüld meg: hány dl egy pohár víz?', 3, { unit: 'dl', tolerance: 1 }),
  ni(TU, 18, 'Becsüld meg: hány liter egy vödör?', 10, { unit: 'l', tolerance: 4 }),
  mc(TU, 19, 'Melyik egységgel mérnéd egy kanál orvosság mennyiségét?', ['ml', 'l', 'dl'], 0),
  mc(TU, 20, 'Hány 2 dl-es pohár telik meg 1 literből?', ['2', '5', '10'], 1),
];

// -------------------------------------------------------------------- tömeg

const TT = 'matek-tomeg';

export const tomegExercises: Exercise[] = [
  ni(TT, 1, 'Hány dkg 1 kg?', 100, { unit: 'dkg' }),
  ni(TT, 2, 'Hány g 1 dkg?', 10, { unit: 'g' }),
  ni(TT, 3, 'Hány g 1 kg?', 1000, { unit: 'g' }),
  ni(TT, 4, 'Hány dkg fél kiló?', 50, { unit: 'dkg' }),
  ni(TT, 5, 'Hány g 5 dkg?', 50, { unit: 'g' }),
  ni(TT, 6, 'Hány g 25 dkg?', 250, { unit: 'g' }),
  ni(TT, 7, 'Hány dkg 3 kg?', 300, { unit: 'dkg' }),
  ni(TT, 8, 'Hány dkg 80 g?', 8, { unit: 'dkg' }),
  ni(TT, 9, 'Hány dkg negyed kiló?', 25, { unit: 'dkg' }),
  ni(TT, 10, '1200 g az 1 kg és még hány g?', 200, { unit: 'g' }),
  mc(TT, 11, 'Melyik a nehezebb? 1 kg vagy 90 dkg', ['1 kg', '90 dkg'], 0),
  mc(TT, 12, 'Melyik a nehezebb? 300 g vagy 25 dkg', ['300 g', '25 dkg'], 0, '25 dkg = 250 g.'),
  mc(TT, 13, 'Melyik a könnyebb? 7 dkg vagy 80 g', ['7 dkg', '80 g'], 0),
  oi(TT, 14, ['20 g', '15 dkg', '1 kg'], ['1 kg', '20 g', '15 dkg']),
  ni(TT, 15, 'Becsüld meg: hány dkg egy alma?', 15, { unit: 'dkg', tolerance: 7 }),
  ni(TT, 16, 'Becsüld meg: hány kg egy iskolatáska tele?', 5, { unit: 'kg', tolerance: 2 }),
  mc(TT, 17, 'Melyik egységgel mérnéd egy levél tömegét?', ['g', 'kg', 'dkg'], 0),
  mc(TT, 18, 'Melyik egységgel kéred a felvágottat a boltban?', ['g', 'dkg', 'kg'], 1),
  ni(TT, 19, 'A boltban 20 dkg sajtot kértél. Hány gramm ez?', 200, { unit: 'g' }),
  ni(TT, 20, 'Egy zacskó liszt 1 kg. Elhasználtál 300 g-ot. Hány gramm maradt?', 700, { unit: 'g', paper: true }),
];

// ---------------------------------------------------------------------- idő

const TI = 'matek-ido';

export const idoExercises: Exercise[] = [
  ni(TI, 1, 'Hány másodperc 1 perc?', 60, { unit: 'mp' }),
  ni(TI, 2, 'Hány perc 1 óra?', 60, { unit: 'perc' }),
  ni(TI, 3, 'Hány óra 1 nap?', 24, { unit: 'óra' }),
  ni(TI, 4, 'Hány nap 1 hét?', 7, { unit: 'nap' }),
  ni(TI, 5, 'Hány hónap 1 év?', 12, { unit: 'hónap' }),
  ni(TI, 6, 'Hány nap van egy évben? (nem szökőévben)', 365, { unit: 'nap' }),
  ni(TI, 7, 'Hány perc fél óra?', 30, { unit: 'perc' }),
  ni(TI, 8, 'Hány perc negyed óra?', 15, { unit: 'perc' }),
  ni(TI, 9, 'Hány perc háromnegyed óra?', 45, { unit: 'perc' }),
  ni(TI, 10, 'Hány perc másfél óra?', 90, { unit: 'perc' }),
  ni(TI, 11, 'Hány perc 2 óra?', 120, { unit: 'perc' }),
  ni(TI, 12, 'Hány másodperc 2 perc?', 120, { unit: 'mp' }),
  ni(TI, 13, 'Hány másodperc fél perc?', 30, { unit: 'mp' }),
  ni(TI, 14, 'Hány nap 3 hét?', 21, { unit: 'nap' }),
  ni(TI, 15, 'Hány hét 28 nap?', 4, { unit: 'hét' }),
  ni(TI, 16, 'Hány hónap 2 év?', 24, { unit: 'hónap' }),
  mc(TI, 17, 'Hány napos a február nem szökőévben?', ['28', '29', '30'], 0),
  mc(TI, 18, 'Hány napos a január?', ['30', '31', '28'], 1),
  mc(TI, 19, 'Melyik hónap 30 napos?', ['március', 'április', 'május'], 1),
  mc(TI, 20, 'Hányadik hónap a szeptember?', ['8.', '9.', '10.'], 1),
  mc(TI, 21, 'Melyik évszakhoz tartozik a november?', ['ősz', 'tél', 'nyár'], 0),
  ni(TI, 22, 'Egy óra 20 perckor kezdődő film 55 percig tart. Hány perc múlva ér véget a kezdéstől számítva?', 55, { unit: 'perc' }),
  ni(TI, 23, 'Reggel 8-kor kezdődik a tanítás és 12-kor ér véget. Hány óra ez?', 4, { unit: 'óra' }),
  ni(TI, 24, 'Hány perc telik el 9:15 és 10:00 között?', 45, { unit: 'perc', paper: true }),
  ni(TI, 25, 'Hány perc telik el 14:40 és 15:25 között?', 45, { unit: 'perc', paper: true }),
];
