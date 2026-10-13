import type { Exercise, Topic } from '@/types/exercise';

import { mondatfajtakExercises } from './mondatfajtak';
import { szojelentesExercises } from './szojelentes';
import { rokonErtelmuExercises } from './rokon-ertelmu';
import { ellentetesJelentesExercises } from './ellentetes-jelentes';
import { szotoToldalekExercises } from './szoto-toldalek';
import { beturendExercises } from './beturend';
import { mitFejeznekKiExercises } from './mit-fejeznek-ki';
import { megnevezoSzavakExercises } from './megnevezo-szavak';
import { tulajdonnevekExercises } from './tulajdonnevek';
import { toldalekosSzavakExercises } from './toldalekos-szavak';
import { egyVagyTobbExercises } from './egy-vagy-tobb';
import { cselekvesSzavakExercises } from './cselekves-szavak';
import { igeidokExercises } from './igeidok';
import { tulajdonsagSzavakExercises } from './tulajdonsag-szavak';
import { fokozasExercises } from './fokozas';
import { mennyisegSzavakExercises } from './mennyiseg-szavak';
import { kozmondasokExercises } from './kozmondasok';

/**
 * A témakörök sorrendje a Nyelvtan és helyesírás 3. (OH-MNY03TB)
 * tankönyvet követi. A `book` mező a tankönyvi oldalszám — ez az
 * egyetlen forrás a sorrendre. Ha Kira tanmenete eltér, ezt írd át.
 */
export const nyelvtanTopics: Topic[] = [
  { id: 'nyelvtan-mondatfajtak', subject: 'nyelvtan', title: 'Mondatfajták', order: 1, book: 13 },
  { id: 'nyelvtan-szojelentes', subject: 'nyelvtan', title: 'Hány jelentése van a szónak?', order: 2, book: 28 },
  { id: 'nyelvtan-rokon-ertelmu', subject: 'nyelvtan', title: 'Rokon értelmű szavak', order: 3, book: 30 },
  { id: 'nyelvtan-ellentetes-jelentes', subject: 'nyelvtan', title: 'Ellentétes jelentésű szavak', order: 4, book: 32 },
  { id: 'nyelvtan-szoto-toldalek', subject: 'nyelvtan', title: 'Szótő és toldalék', order: 5, book: 34 },
  { id: 'nyelvtan-beturend', subject: 'nyelvtan', title: 'Betűrend', order: 6, book: 36 },
  { id: 'nyelvtan-mit-fejeznek-ki', subject: 'nyelvtan', title: 'Mit fejeznek ki a szavak?', order: 7, book: 41 },
  { id: 'nyelvtan-megnevezo-szavak', subject: 'nyelvtan', title: 'Megnevező szavak', order: 8, book: 45 },
  { id: 'nyelvtan-tulajdonnevek', subject: 'nyelvtan', title: 'Kisbetű? Nagybetű?', order: 9, book: 50 },
  { id: 'nyelvtan-toldalekos-szavak', subject: 'nyelvtan', title: 'Toldalékos szavak', order: 10, book: 54 },
  { id: 'nyelvtan-egy-vagy-tobb', subject: 'nyelvtan', title: 'Egy vagy több?', order: 11, book: 56 },
  { id: 'nyelvtan-cselekves-szavak', subject: 'nyelvtan', title: 'Cselekvést kifejező szavak', order: 12, book: 65 },
  { id: 'nyelvtan-igeidok', subject: 'nyelvtan', title: 'A cselekvés ideje', order: 13, book: 71 },
  { id: 'nyelvtan-tulajdonsag-szavak', subject: 'nyelvtan', title: 'Tulajdonságot kifejező szavak', order: 14, book: 87 },
  { id: 'nyelvtan-fokozas', subject: 'nyelvtan', title: 'Fokozás', order: 15, book: 92 },
  { id: 'nyelvtan-mennyiseg-szavak', subject: 'nyelvtan', title: 'Mennyiséget kifejező szavak', order: 16, book: 101 },
  // Szövegalkotás 3. (OH-MNY03MB) témája: nincs nyelvtankönyvi oldalszám, ezért a lista végén áll
  { id: 'nyelvtan-kozmondasok', subject: 'nyelvtan', title: 'Közmondások, szólások', order: 17 },
];

export const nyelvtanExercises: Exercise[] = [
  ...mondatfajtakExercises,
  ...szojelentesExercises,
  ...rokonErtelmuExercises,
  ...ellentetesJelentesExercises,
  ...szotoToldalekExercises,
  ...beturendExercises,
  ...mitFejeznekKiExercises,
  ...megnevezoSzavakExercises,
  ...tulajdonnevekExercises,
  ...toldalekosSzavakExercises,
  ...egyVagyTobbExercises,
  ...cselekvesSzavakExercises,
  ...igeidokExercises,
  ...tulajdonsagSzavakExercises,
  ...fokozasExercises,
  ...mennyisegSzavakExercises,
  ...kozmondasokExercises,
];
