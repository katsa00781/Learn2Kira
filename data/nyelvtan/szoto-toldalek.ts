import { mc } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-szoto-toldalek';

/**
 * Szótő és toldalék – 20 feladat.
 * 1–14: melyik a szótő
 * 15–20: melyik a toldalék, illetve toldalék nélküli szó felismerése
 */
export const szotoToldalekExercises: Exercise[] = [
  mc(T, 1, 'Melyik a szótő? kertben', ['kert', 'kertb', 'ben'], 0, 'A szótő az a rész, amihez hozzáragasztjuk a toldalékot.'),
  mc(T, 2, 'Melyik a szótő? házak', ['ház', 'háza', 'ak'], 0),
  mc(T, 3, 'Melyik a szótő? virágot', ['virágo', 'virág', 'ot'], 1),
  mc(T, 4, 'Melyik a szótő? kutyával', ['kutyá', 'kutya', 'val'], 1, 'A szótő végén az a rövid marad: kutya.'),
  mc(T, 5, 'Melyik a szótő? könyvet', ['könyv', 'könyve', 'et'], 0),
  mc(T, 6, 'Melyik a szótő? iskolába', ['iskolá', 'iskola', 'ba'], 1),
  mc(T, 7, 'Melyik a szótő? gyerekek', ['gyerek', 'gyereke', 'ek'], 0),
  mc(T, 8, 'Melyik a szótő? asztalon', ['aszta', 'asztal', 'on'], 1),
  mc(T, 9, 'Melyik a szótő? ablakok', ['ablak', 'ablako', 'ok'], 0),
  mc(T, 10, 'Melyik a szótő? tejet', ['te', 'tej', 'et'], 1),
  mc(T, 11, 'Melyik a szótő? macskák', ['macska', 'macská', 'k'], 0),
  mc(T, 12, 'Melyik a szótő? erdőben', ['erdő', 'erdőb', 'ben'], 0),
  mc(T, 13, 'Melyik a szótő? kenyeret', ['kenyer', 'kenyér', 'et'], 1, 'A szótőben hosszú é van, csak a toldalék előtt rövidül.'),
  mc(T, 14, 'Melyik a szótő? labdával', ['labdá', 'labda', 'val'], 1),
  mc(T, 15, 'Melyik a toldalék? füzetem', ['füzet', 'em', 'fü'], 1),
  mc(T, 16, 'Melyik a toldalék? székre', ['re', 'szék', 'ék'], 0),
  mc(T, 17, 'Melyik a toldalék? tollak', ['toll', 'ak', 'll'], 1),
  mc(T, 18, 'Melyik szóban nincs toldalék?', ['virágok', 'virág', 'virágot'], 1),
  mc(T, 19, 'Melyik szóban nincs toldalék?', ['almát', 'almák', 'alma'], 2),
  mc(T, 20, 'Melyik szóban nincs toldalék?', ['barátom', 'barát', 'barátok'], 1),
];
