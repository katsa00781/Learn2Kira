import { mc } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-tulajdonnevek';

/**
 * Tulajdonnevek helyesírása – 20 feladat.
 * A nehézség nem a nagybetű, hanem az, hogy MI NEM tulajdonnév:
 * a napok, hónapok, ünnepek és népnevek kisbetűvel írandók.
 * Ezek a 15–20. feladatokban sűrűsödnek.
 */
export const tulajdonnevekExercises: Exercise[] = [
  mc(T, 1, 'Melyik írásmód helyes?', ['duna', 'Duna'], 1, 'A folyók neve tulajdonnév.'),
  mc(T, 2, 'Melyik írásmód helyes?', ['Budapest', 'budapest'], 0),
  mc(T, 3, 'Melyik írásmód helyes?', ['kira', 'Kira'], 1),
  mc(T, 4, 'Melyik írásmód helyes?', ['Balaton', 'balaton'], 0),
  mc(T, 5, 'Melyik írásmód helyes?', ['magyarország', 'Magyarország'], 1),
  mc(T, 6, 'Melyik írásmód helyes?', ['Paks', 'paks'], 0),
  mc(T, 7, 'Melyik írásmód helyes?', ['tisza', 'Tisza'], 1),
  mc(T, 8, 'Melyik írásmód helyes?', ['Petőfi Sándor', 'Petőfi sándor'], 0, 'A vezetéknév és a keresztnév is nagybetűvel kezdődik.'),
  mc(T, 9, 'Melyik írásmód helyes?', ['mátra', 'Mátra'], 1),
  mc(T, 10, 'Melyik írásmód helyes? (kutyanév)', ['Bodri', 'bodri'], 0, 'Az állatok neve is tulajdonnév.'),
  mc(T, 11, 'Melyik írásmód helyes?', ['európa', 'Európa'], 1),
  mc(T, 12, 'Melyik írásmód helyes?', ['Kossuth utca', 'kossuth utca'], 0),
  mc(T, 13, 'Melyik szó tulajdonnév?', ['város', 'Szeged', 'ország'], 1),
  mc(T, 14, 'Melyik szó tulajdonnév?', ['Bécs', 'folyó', 'hegy'], 0),
  mc(T, 15, 'Melyik írásmód helyes?', ['Hétfő', 'hétfő'], 1, 'A napok neve NEM tulajdonnév, kisbetűvel írjuk.'),
  mc(T, 16, 'Melyik írásmód helyes?', ['január', 'Január'], 0, 'A hónapok neve kisbetűvel megy.'),
  mc(T, 17, 'Melyik írásmód helyes?', ['Karácsony', 'karácsony'], 1, 'Az ünnepek neve kisbetűs.'),
  mc(T, 18, 'Melyik írásmód helyes?', ['magyar', 'Magyar'], 0, 'A népnevek kisbetűvel írandók.'),
  mc(T, 19, 'Melyik írásmód helyes?', ['Vasárnap', 'vasárnap'], 1),
  mc(T, 20, 'Melyik szó NEM tulajdonnév?', ['Duna', 'szerda', 'Kira'], 1),
];
