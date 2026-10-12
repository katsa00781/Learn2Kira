import { mp, mc } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-ellentetes-jelentes';

/**
 * Az ellentétes jelentésű szavak – 20 feladat. Tankönyv 32. oldal.
 * 1–10: párosítás (match-pairs)
 * 11–20: felismerés, mondatba illesztés
 * A tulajdonságok ellentétei a tulajdonsag-szavak.ts-ben is szerepelnek,
 * ott más feladattípussal — itt szándékosan más szókincs van.
 */
export const ellentetesJelentesExercises: Exercise[] = [
  mp(T, 1, [['jön', 'megy'], ['ad', 'kap'], ['nyit', 'csuk'], ['kezd', 'befejez']], 'Párosítsd az ellentétes jelentésű szavakat!'),
  mp(T, 2, [['nappal', 'éjszaka'], ['nyár', 'tél'], ['reggel', 'este'], ['kezdet', 'vég']]),
  mp(T, 3, [['felmegy', 'lemegy'], ['beszalad', 'kiszalad'], ['elindul', 'megérkezik'], ['felvesz', 'levesz']]),
  mp(T, 4, [['régi', 'új'], ['drága', 'olcsó'], ['erős', 'gyenge'], ['üres', 'tele']]),
  mp(T, 5, [['öröm', 'bánat'], ['igazság', 'hazugság'], ['barát', 'ellenség'], ['bátorság', 'félelem']]),
  mp(T, 6, [['elöl', 'hátul'], ['fent', 'lent'], ['kint', 'bent'], ['jobbra', 'balra']]),
  mp(T, 7, [['sok', 'kevés'], ['mindig', 'soha'], ['korán', 'későn'], ['gyakran', 'ritkán']]),
  mp(T, 8, [['nevet', 'sír'], ['ébred', 'elalszik'], ['épít', 'rombol'], ['talál', 'elveszít']]),
  mp(T, 9, [['nehéz', 'könnyű'], ['éles', 'tompa'], ['sima', 'érdes'], ['mély', 'sekély']]),
  mp(T, 10, [['szeret', 'utál'], ['emlékszik', 'elfelejt'], ['dicsér', 'szid'], ['segít', 'akadályoz']]),

  mc(T, 11, 'Melyik az ellentétes párja? hosszú', ['nagy', 'rövid', 'széles'], 1),
  mc(T, 12, 'Melyik az ellentétes párja? világos', ['sötét', 'fehér', 'tiszta'], 0),
  mc(T, 13, 'Melyik az ellentétes párja? gyors', ['sebes', 'lassú', 'fürge'], 1),
  mc(T, 14, 'Melyik az ellentétes párja? felmegy', ['elmegy', 'lemegy', 'bemegy'], 1),
  mc(T, 15, 'Melyik az ellentétes párja? mindig', ['gyakran', 'soha', 'néha'], 1),

  mc(T, 16, 'Egészítsd ki ellentétes szóval! Télen hideg van, nyáron ___', ['hűvös', 'meleg', 'esős'], 1),
  mc(T, 17, 'Egészítsd ki ellentétes szóval! Reggel felkelünk, este ___', ['lefekszünk', 'eszünk', 'játszunk'], 0),
  mc(T, 18, 'Egészítsd ki ellentétes szóval! A teherautó nehéz, a toll ___', ['kicsi', 'könnyű', 'vékony'], 1),
  mc(T, 19, 'Melyik pár NEM ellentétes?', ['nagy – kicsi', 'szép – gyönyörű', 'meleg – hideg'], 1, 'Az egyik pár két tagja ugyanazt jelenti.'),
  mc(T, 20, 'Melyik pár NEM ellentétes?', ['fut – szalad', 'jön – megy', 'ad – kap'], 0),
];
