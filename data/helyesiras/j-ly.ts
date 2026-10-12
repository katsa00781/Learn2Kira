import { ml } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'helyesiras-j-ly';
const O = ['j', 'ly'];

/**
 * j / ly – 40 feladat.
 * A ly-os és j-s szavak felváltva jönnek, hogy ne lehessen mintát tanulni.
 * A szókincs 3. osztályos szinten van tartva.
 */
export const jLyExercises: Exercise[] = [
  ml(T, 1, 'gó', 'a', O, 'ly', 'Hosszú lábú, fehér madár, a kéményen fészkel.'),
  ml(T, 2, 'a', 'tó', O, 'j', 'Ezen lépsz be a szobába.'),
  ml(T, 3, 'fo', 'ó', O, 'ly', 'A Duna is ez.'),
  ml(T, 4, 'a', 'ándék', O, 'j', 'Ezt kapod a születésnapodon.'),
  ml(T, 5, 'mé', '', O, 'ly', 'A tó közepén nagyon ilyen a víz.'),
  ml(T, 6, 'ma', 'om', O, 'j', 'Fán él, banánt eszik.'),
  ml(T, 7, 'he', '', O, 'ly', 'Foglalj nekem egyet a padban!'),
  ml(T, 8, 'to', 'ás', O, 'j', 'A tyúk tojja.'),
  ml(T, 9, 'kirá', '', O, 'ly', 'Koronát visel, egy ország uralkodója.'),
  ml(T, 10, 'ha', 'ó', O, 'j', 'A vízen közlekedik.'),
  ml(T, 11, 'kasté', '', O, 'ly', 'Nagy, régi épület, ahol a király lakik.'),
  ml(T, 12, 'ola', '', O, 'j', 'Ezzel sütünk a serpenyőben.'),
  ml(T, 13, 'moso', 'og', O, 'ly', 'Ezt teszed, ha örülsz.'),
  ml(T, 14, 'te', '', O, 'j', 'Fehér ital, a tehéntől kapjuk.'),
  ml(T, 15, 'só', 'om', O, 'ly', 'Ragadozó madár, gyorsan repül.'),
  ml(T, 16, 'ba', 'usz', O, 'j', 'Az orr alatt nő.'),
  ml(T, 17, 'sú', '', O, 'ly', 'Ezt méred a mérlegen.'),
  ml(T, 18, 'papagá', '', O, 'j', 'Színes madár, meg tudja tanulni a szavakat.'),
  ml(T, 19, 'tava', '', O, 'ly', 'Az elmúlt évben.'),
  ml(T, 20, 'fe', '', O, 'j', 'A nyakad fölött van.'),
  ml(T, 21, 'veszé', '', O, 'ly', 'Vigyázz, mert baj lehet belőle!'),
  ml(T, 22, 'va', '', O, 'j', 'Ezt keni a kenyérre.'),
  ml(T, 23, 'szemé', '', O, 'ly', 'Egy ember, egy ilyen.'),
  ml(T, 24, 'za', '', O, 'j', 'Nagy hangzavar.'),
  ml(T, 25, 'szabá', '', O, 'ly', 'Ezt be kell tartani a játékban.'),
  ml(T, 26, 'ha', 'nal', O, 'j', 'Kora reggel, amikor felkel a nap.'),
  ml(T, 27, 'i', 'en', O, 'ly', 'Ez ilyen, az meg olyan.'),
  ml(T, 28, 'tolva', '', O, 'j', 'Aki ellopja a másik holmiját.'),
  ml(T, 29, 'o', 'an', O, 'ly', 'Nem ilyen, hanem…'),
  ml(T, 30, 'dí', '', O, 'j', 'Ezt kapja a verseny győztese.'),
  ml(T, 31, 'mi', 'en', O, 'ly', 'Kérdőszó: … színű a ruhád?'),
  ml(T, 32, 'sa', 't', O, 'j', 'Tejből készül, lyukas is lehet.'),
  ml(T, 33, 'harká', '', O, 'ly', 'Kopogtat a fatörzsön.'),
  ml(T, 34, 'bor', 'ú', O, 'j', 'A tehén kicsinye.'),
  ml(T, 35, 'pehe', '', O, 'ly', 'Könnyű kis hó- vagy tollszemcse.'),
  ml(T, 36, 'var', 'ú', O, 'j', 'Fekete madár, hangosan károg.'),
  ml(T, 37, 'bago', '', O, 'ly', 'Éjszaka vadászik, nagy szeme van.'),
  ml(T, 38, 'sa', 'nos', O, 'j', 'Kár, hogy így alakult…'),
  ml(T, 39, '', 'uk', O, 'ly', 'A zokni orrán szokott keletkezni.'),
  ml(T, 40, 'ha', '', O, 'j', 'A fejeden nő, fésülni kell.'),
];
