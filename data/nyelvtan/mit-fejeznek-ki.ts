import { sg, mc } from '../builders';
import { SZOCSOPORT as SZ } from '@/types/exercise';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-mit-fejeznek-ki';

/** Három csoport – a könyv ebben a sorrendben vezeti be őket (45, 65, 87). */
const H3 = [SZ.megnevezo, SZ.cselekves, SZ.tulajdonsag];
/** Négy csoport – a mennyiséget kifejező szavak után (101). */
const H4 = [SZ.megnevezo, SZ.cselekves, SZ.tulajdonsag, SZ.mennyiseg];

/**
 * Mit fejeznek ki a szavak? – 20 feladat. Tankönyv 41. oldal.
 * Ez az összefoglaló témakör: a négy szócsoport együtt, keverve.
 * Az egyes csoportok saját témakörei külön fájlban vannak.
 *
 * FONTOS: a csoportnevek a tankönyv elnevezései. Ne írd át őket
 * "főnév/ige/melléknév/számnév"-re — harmadikban azok még nem hangzanak el.
 */
export const mitFejeznekKiExercises: Exercise[] = [
  sg(T, 1, H3, [['fut', SZ.cselekves], ['kutya', SZ.megnevezo], ['piros', SZ.tulajdonsag], ['olvas', SZ.cselekves], ['asztal', SZ.megnevezo], ['magas', SZ.tulajdonsag]], 'Kérdezz rá: Ki? Mi? — Mit csinál? — Milyen?'),
  sg(T, 2, H3, [['ugrik', SZ.cselekves], ['madár', SZ.megnevezo], ['gyors', SZ.tulajdonsag], ['énekel', SZ.cselekves], ['erdő', SZ.megnevezo], ['zöld', SZ.tulajdonsag]]),
  sg(T, 3, H3, [['ír', SZ.cselekves], ['ceruza', SZ.megnevezo], ['hegyes', SZ.tulajdonsag], ['rajzol', SZ.cselekves], ['papír', SZ.megnevezo], ['fehér', SZ.tulajdonsag]]),
  sg(T, 4, H3, [['alszik', SZ.cselekves], ['ágy', SZ.megnevezo], ['puha', SZ.tulajdonsag], ['ébred', SZ.cselekves], ['reggel', SZ.megnevezo], ['álmos', SZ.tulajdonsag]]),
  sg(T, 5, H3, [['eszik', SZ.cselekves], ['alma', SZ.megnevezo], ['édes', SZ.tulajdonsag], ['iszik', SZ.cselekves], ['víz', SZ.megnevezo], ['hideg', SZ.tulajdonsag]]),
  sg(T, 6, H3, [['tanul', SZ.cselekves], ['iskola', SZ.megnevezo], ['okos', SZ.tulajdonsag], ['figyel', SZ.cselekves], ['tanterem', SZ.megnevezo], ['csendes', SZ.tulajdonsag]]),
  sg(T, 7, H3, [['úszik', SZ.cselekves], ['tó', SZ.megnevezo], ['mély', SZ.tulajdonsag], ['merül', SZ.cselekves], ['hal', SZ.megnevezo], ['sikamlós', SZ.tulajdonsag]]),
  sg(T, 8, H3, [['mászik', SZ.cselekves], ['majom', SZ.megnevezo], ['ügyes', SZ.tulajdonsag], ['ugrál', SZ.cselekves], ['fa', SZ.megnevezo], ['barna', SZ.tulajdonsag]]),
  sg(T, 9, H3, [['süt', SZ.cselekves], ['nap', SZ.megnevezo], ['meleg', SZ.tulajdonsag], ['fúj', SZ.cselekves], ['szél', SZ.megnevezo], ['erős', SZ.tulajdonsag]]),
  sg(T, 10, H3, [['esik', SZ.cselekves], ['eső', SZ.megnevezo], ['nedves', SZ.tulajdonsag], ['villámlik', SZ.cselekves], ['felhő', SZ.megnevezo], ['sötét', SZ.tulajdonsag]]),
  sg(T, 11, H3, [['főz', SZ.cselekves], ['leves', SZ.megnevezo], ['forró', SZ.tulajdonsag], ['kavar', SZ.cselekves], ['fazék', SZ.megnevezo], ['sós', SZ.tulajdonsag]]),
  sg(T, 12, H3, [['épít', SZ.cselekves], ['ház', SZ.megnevezo], ['új', SZ.tulajdonsag], ['fest', SZ.cselekves], ['fal', SZ.megnevezo], ['sárga', SZ.tulajdonsag]]),
  sg(T, 13, H3, [['nevet', SZ.cselekves], ['barát', SZ.megnevezo], ['vidám', SZ.tulajdonsag], ['sír', SZ.cselekves], ['könny', SZ.megnevezo], ['szomorú', SZ.tulajdonsag]]),
  sg(T, 14, H3, [['repül', SZ.cselekves], ['gólya', SZ.megnevezo], ['magas', SZ.tulajdonsag], ['száll', SZ.cselekves], ['fészek', SZ.megnevezo], ['üres', SZ.tulajdonsag]]),

  sg(T, 15, H4, [['fut', SZ.cselekves], ['gyerek', SZ.megnevezo], ['fürge', SZ.tulajdonsag], ['három', SZ.mennyiseg], ['labda', SZ.megnevezo], ['öt', SZ.mennyiseg]], 'A mennyiséget kifejező szó arra válaszol: Hány? Mennyi?'),
  sg(T, 16, H4, [['olvas', SZ.cselekves], ['könyv', SZ.megnevezo], ['vastag', SZ.tulajdonsag], ['tíz', SZ.mennyiseg], ['oldal', SZ.megnevezo], ['kettő', SZ.mennyiseg]]),
  sg(T, 17, H4, [['gyűjt', SZ.cselekves], ['gomba', SZ.megnevezo], ['nagy', SZ.tulajdonsag], ['hat', SZ.mennyiseg], ['kosár', SZ.megnevezo], ['sok', SZ.mennyiseg]]),
  sg(T, 18, H4, [['vesz', SZ.cselekves], ['bolt', SZ.megnevezo], ['olcsó', SZ.tulajdonsag], ['négy', SZ.mennyiseg], ['tojás', SZ.megnevezo], ['egy', SZ.mennyiseg]]),
  sg(T, 19, H4, [['számol', SZ.cselekves], ['ujj', SZ.megnevezo], ['rövid', SZ.tulajdonsag], ['nyolc', SZ.mennyiseg], ['kéz', SZ.megnevezo], ['kevés', SZ.mennyiseg]]),

  mc(T, 20, 'Melyik a kakukktojás? fut, ugrik, piros, olvas', ['fut', 'piros', 'olvas'], 1, 'Három cselekvést kifejező szó van a sorban, és egy másmilyen.'),
];
