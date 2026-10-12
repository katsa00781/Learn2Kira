import { mc, sg, mp } from '../builders';
import { SZOCSOPORT as SZ } from '@/types/exercise';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-tulajdonsag-szavak';

/**
 * A tulajdonságot kifejező szavak – 20 feladat. Tankönyv 87. oldal.
 * A fokozás külön témakör: fokozas.ts (92. oldal).
 */
export const tulajdonsagSzavakExercises: Exercise[] = [
  mc(T, 1, 'Melyik kérdésre válaszol a tulajdonságot kifejező szó?', ['Milyen?', 'Ki? Mi?', 'Mit csinál?'], 0),
  mc(T, 2, 'Melyik szó fejez ki tulajdonságot? fut, magas, kutya', ['fut', 'magas', 'kutya'], 1),
  mc(T, 3, 'Melyik szó fejez ki tulajdonságot? erdő, énekel, zöld', ['erdő', 'énekel', 'zöld'], 2),
  mc(T, 4, 'Melyik szó NEM fejez ki tulajdonságot? puha, meleg, ágy', ['puha', 'meleg', 'ágy'], 2),
  mc(T, 5, 'Melyik szó NEM fejez ki tulajdonságot? okos, tanul, csendes', ['okos', 'tanul', 'csendes'], 1),

  sg(T, 6, [SZ.tulajdonsag, SZ.megnevezo], [['piros', SZ.tulajdonsag], ['alma', SZ.megnevezo], ['édes', SZ.tulajdonsag], ['körte', SZ.megnevezo], ['savanyú', SZ.tulajdonsag], ['citrom', SZ.megnevezo]]),
  sg(T, 7, [SZ.tulajdonsag, SZ.cselekves], [['gyors', SZ.tulajdonsag], ['szalad', SZ.cselekves], ['ügyes', SZ.tulajdonsag], ['mászik', SZ.cselekves], ['fürge', SZ.tulajdonsag], ['ugrál', SZ.cselekves]]),
  sg(T, 8, [SZ.tulajdonsag, SZ.megnevezo, SZ.cselekves], [['hideg', SZ.tulajdonsag], ['tél', SZ.megnevezo], ['fagy', SZ.cselekves], ['fehér', SZ.tulajdonsag], ['hó', SZ.megnevezo], ['esik', SZ.cselekves]]),

  mp(T, 9, [['magas', 'alacsony'], ['hosszú', 'rövid'], ['széles', 'keskeny'], ['vastag', 'vékony']], 'Párosítsd az ellentétes tulajdonságokat!'),
  mp(T, 10, [['meleg', 'hideg'], ['világos', 'sötét'], ['nehéz', 'könnyű'], ['gyors', 'lassú']]),
  mp(T, 11, [['édes', 'keserű'], ['puha', 'kemény'], ['nedves', 'száraz'], ['tiszta', 'piszkos']]),

  mc(T, 12, 'Melyik szó fejez ki tulajdonságot a mondatban? A magas fán sok alma terem.', ['magas', 'fán', 'terem'], 0),
  mc(T, 13, 'Melyik szó fejez ki tulajdonságot a mondatban? Kira a csendes szobában olvas.', ['szobában', 'csendes', 'olvas'], 1),
  mc(T, 14, 'Melyik szó fejez ki tulajdonságot a mondatban? Hideg szél fúj kint.', ['szél', 'fúj', 'hideg'], 2),
  mc(T, 15, 'Hány tulajdonságot kifejező szó van? A kicsi, barna kutya ugat.', ['1', '2', '3'], 1),
  mc(T, 16, 'Hány tulajdonságot kifejező szó van? Az öreg, görbe fa magas.', ['2', '3', '4'], 1, 'A magas is tulajdonság, pedig a mondat végén áll.'),

  mc(T, 17, 'Milyen a majom? Melyik illik hozzá?', ['ügyes', 'ugrik', 'farok'], 0),
  mc(T, 18, 'Milyen a hó? Melyik illik hozzá?', ['esik', 'fehér', 'tél'], 1),
  mc(T, 19, 'Melyik szó alkot párt? gyors –', ['szalad', 'lassú', 'autó'], 1, 'Az ellentétét keresd!'),
  mc(T, 20, 'Melyik szó alkot párt? bátor –', ['katona', 'félős', 'harcol'], 1),
];
