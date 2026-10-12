import { mc, sg } from '../builders';
import { SZOCSOPORT as SZ } from '@/types/exercise';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-cselekves-szavak';

const KETTO = ['cselekvést jelent', 'történést jelent'];

/**
 * A cselekvést, történést kifejező szavak – 20 feladat. Tankönyv 65. oldal.
 * A könyv itt megkülönbözteti a cselekvést (valaki csinálja) a történéstől
 * (magától megy végbe). Az igeidők külön témakör: igeidok.ts (71. oldal).
 */
export const cselekvesSzavakExercises: Exercise[] = [
  mc(T, 1, 'Melyik kérdésre válaszol a cselekvést kifejező szó?', ['Mit csinál?', 'Ki? Mi?', 'Milyen?'], 0),
  mc(T, 2, 'Melyik szó fejez ki cselekvést? asztal, olvas, piros', ['asztal', 'olvas', 'piros'], 1),
  mc(T, 3, 'Melyik szó fejez ki cselekvést? zöld, erdő, szalad', ['zöld', 'erdő', 'szalad'], 2),
  mc(T, 4, 'Melyik szó NEM fejez ki cselekvést? énekel, madár, repül', ['énekel', 'madár', 'repül'], 1),
  mc(T, 5, 'Melyik szó NEM fejez ki cselekvést? rajzol, fest, ceruza', ['rajzol', 'fest', 'ceruza'], 2),

  sg(T, 6, KETTO, [['fut', 'cselekvést jelent'], ['esik', 'történést jelent'], ['olvas', 'cselekvést jelent'], ['havazik', 'történést jelent'], ['énekel', 'cselekvést jelent'], ['villámlik', 'történést jelent']], 'A cselekvést valaki csinálja, a történés magától megy végbe.'),
  sg(T, 7, KETTO, [['rajzol', 'cselekvést jelent'], ['sötétedik', 'történést jelent'], ['főz', 'cselekvést jelent'], ['olvad', 'történést jelent'], ['épít', 'cselekvést jelent'], ['fagy', 'történést jelent']]),
  sg(T, 8, KETTO, [['ugrik', 'cselekvést jelent'], ['dörög', 'történést jelent'], ['tanul', 'cselekvést jelent'], ['virágzik', 'történést jelent'], ['úszik', 'cselekvést jelent'], ['alkonyodik', 'történést jelent']]),
  sg(T, 9, KETTO, [['ír', 'cselekvést jelent'], ['zuhog', 'történést jelent'], ['varr', 'cselekvést jelent'], ['szürkül', 'történést jelent'], ['kapál', 'cselekvést jelent'], ['érik', 'történést jelent']]),

  mc(T, 10, 'Cselekvés vagy történés? A hó olvad.', ['cselekvés', 'történés'], 1),
  mc(T, 11, 'Cselekvés vagy történés? Kira olvas.', ['cselekvés', 'történés'], 0),
  mc(T, 12, 'Cselekvés vagy történés? Megérett a szőlő.', ['cselekvés', 'történés'], 1),
  mc(T, 13, 'Cselekvés vagy történés? Anya süteményt süt.', ['cselekvés', 'történés'], 0),

  sg(T, 14, [SZ.cselekves, SZ.megnevezo], [['fut', SZ.cselekves], ['futás', SZ.megnevezo], ['olvas', SZ.cselekves], ['olvasás', SZ.megnevezo], ['tanul', SZ.cselekves], ['tanulás', SZ.megnevezo]], 'A futás már megnevezi a cselekvést — nem azt mondja, hogy mit csinál valaki.'),
  sg(T, 15, [SZ.cselekves, SZ.megnevezo], [['énekel', SZ.cselekves], ['ének', SZ.megnevezo], ['rajzol', SZ.cselekves], ['rajz', SZ.megnevezo], ['játszik', SZ.cselekves], ['játék', SZ.megnevezo]]),

  mc(T, 16, 'Hány cselekvést kifejező szó van a mondatban? A kutya ugat és szalad.', ['1', '2', '3'], 1),
  mc(T, 17, 'Hány cselekvést kifejező szó van a mondatban? Kira olvas, ír és rajzol.', ['2', '3', '4'], 1),
  mc(T, 18, 'Melyik szó fejez ki cselekvést a mondatban? A madár magasan repül.', ['madár', 'magasan', 'repül'], 2),
  mc(T, 19, 'Melyik szó fejez ki cselekvést a mondatban? A nagymama finom levest főz.', ['nagymama', 'finom', 'főz'], 2),
  mc(T, 20, 'Melyik szó fejez ki cselekvést a mondatban? Három gyerek fut a réten.', ['három', 'fut', 'réten'], 1),
];
