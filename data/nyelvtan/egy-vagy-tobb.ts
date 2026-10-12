import { mc, sg } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-egy-vagy-tobb';

const SZAM = ['egyet jelent', 'többet jelent'];

/**
 * Egy vagy több? – 20 feladat. Tankönyv 56. oldal.
 * Az egyes és többes szám felismerése, a -k többesjel.
 * A 15–20. feladatok a buktatóra mennek: a -k nem mindig többesjel
 * (tulok, sarok), és a mennyiséget kifejező szó után egyes szám áll.
 */
export const egyVagyTobbExercises: Exercise[] = [
  sg(T, 1, SZAM, [['alma', 'egyet jelent'], ['almák', 'többet jelent'], ['könyv', 'egyet jelent'], ['könyvek', 'többet jelent'], ['ház', 'egyet jelent'], ['házak', 'többet jelent']], 'A -k jel teszi többessé a szót.'),
  sg(T, 2, SZAM, [['virág', 'egyet jelent'], ['virágok', 'többet jelent'], ['gyerek', 'egyet jelent'], ['gyerekek', 'többet jelent'], ['fa', 'egyet jelent'], ['fák', 'többet jelent']]),
  sg(T, 3, SZAM, [['madár', 'egyet jelent'], ['madarak', 'többet jelent'], ['kutya', 'egyet jelent'], ['kutyák', 'többet jelent'], ['toll', 'egyet jelent'], ['tollak', 'többet jelent']]),
  sg(T, 4, SZAM, [['szék', 'egyet jelent'], ['székek', 'többet jelent'], ['ablak', 'egyet jelent'], ['ablakok', 'többet jelent'], ['tó', 'egyet jelent'], ['tavak', 'többet jelent']], 'A tó szótöve megváltozik: tavak.'),

  mc(T, 5, 'Tedd többes számba: asztal', ['asztalok', 'asztalak', 'asztalek'], 0),
  mc(T, 6, 'Tedd többes számba: kert', ['kertok', 'kertek', 'kertak'], 1),
  mc(T, 7, 'Tedd többes számba: körte', ['körtek', 'körték', 'körtéek'], 1),
  mc(T, 8, 'Tedd többes számba: kéz', ['kézek', 'kezek', 'kézak'], 1, 'A szótőben a hosszú é megrövidül.'),
  mc(T, 9, 'Tedd többes számba: levél', ['levélek', 'levelek', 'levélak'], 1),
  mc(T, 10, 'Tedd egyes számba: egerek', ['egér', 'eger', 'egerek'], 0),

  mc(T, 11, 'Melyik szó jelent többet?', ['virág', 'virágok', 'virágot'], 1, 'Vigyázz: a -t nem többesjel!'),
  mc(T, 12, 'Melyik szó jelent többet?', ['almát', 'alma', 'almák'], 2),
  mc(T, 13, 'Melyik szó jelent egyet?', ['kutyák', 'kutyát', 'macskák'], 1),
  mc(T, 14, 'Melyik szó jelent egyet?', ['fákat', 'fák', 'fát'], 2),

  mc(T, 15, 'Melyik szóban NEM többesjel a -k? ablakok, sarok, virágok', ['ablakok', 'sarok', 'virágok'], 1, 'A sarok egyetlen dolgot jelent, a k a szótőhöz tartozik.'),
  mc(T, 16, 'Melyik szóban NEM többesjel a -k? fazék, kertek, tollak', ['fazék', 'kertek', 'tollak'], 0),
  mc(T, 17, 'Melyik mondat helyes?', ['Három alma van a tálon.', 'Három almák vannak a tálon.'], 0, 'A mennyiséget kifejező szó után egyes szám áll.'),
  mc(T, 18, 'Melyik mondat helyes?', ['Sok gyerekek játszanak.', 'Sok gyerek játszik.'], 1),
  mc(T, 19, 'Melyik mondat helyes?', ['Öt ujjam van.', 'Öt ujjaim vannak.'], 0),
  mc(T, 20, 'Melyik mondat helyes?', ['A kertben sok virág nyílik.', 'A kertben sok virágok nyílnak.'], 0),
];
