import type { Exercise, Topic } from '@/types/exercise';

import {
  targyakExercises,
  erzekszervekExercises,
  mozgasExercises,
  tuzExercises,
  halmazallapotokExercises,
  vizKorforgasaExercises,
} from './elettelen';
import {
  elolenyekExercises,
  novenyekExercises,
  allatokExercises,
  emlosokExercises,
  madarakExercises,
  halakExercises,
  kteltHulloExercises,
  rovarokExercises,
} from './elovilag';
import {
  foldMozgasaiExercises,
  ismetlodoExercises,
  eletszakaszokExercises,
  foldfelszinExercises,
  tajekozodasExercises,
} from './ido-ter';

/**
 * A témakörök sorrendje a Környezetismeret 3. (OH-KOR03TA) tankönyvet követi.
 * A `book` mező a tankönyvi oldalszám.
 *
 * Megjegyzés: ez a kötet NEM tartalmazza a "Hazánk, Magyarország", az
 * "Életközösségek" és a "Testünk, egészségünk" fejezeteket, pedig a NAT
 * kerettanterv a 3–4. évfolyamra együtt felsorolja őket — azok a negyedikes
 * kötetben vannak. Ne keresd őket itt.
 *
 * Kimarad a 29. lecke (terepgyakorlat): kint végzendő kiegészítő tananyag.
 */
export const kornyezetTopics: Topic[] = [
  { id: 'kornyezet-targyak-tulajdonsagai', subject: 'kornyezet', title: 'A tárgyak tulajdonságai', order: 1, book: 6 },
  { id: 'kornyezet-erzekszervek', subject: 'kornyezet', title: 'Érzékszerveink', order: 2, book: 8 },
  { id: 'kornyezet-mozgas', subject: 'kornyezet', title: 'A mozgás', order: 3, book: 11 },
  { id: 'kornyezet-tuz', subject: 'kornyezet', title: 'Égés és tűzvédelem', order: 4, book: 14 },
  { id: 'kornyezet-halmazallapotok', subject: 'kornyezet', title: 'Halmazállapotok', order: 5, book: 18 },
  { id: 'kornyezet-viz-korforgasa', subject: 'kornyezet', title: 'A víz körforgása', order: 6, book: 27 },
  { id: 'kornyezet-elolenyek', subject: 'kornyezet', title: 'Az élőlények tulajdonságai', order: 7, book: 30 },
  { id: 'kornyezet-novenyek', subject: 'kornyezet', title: 'Növények', order: 8, book: 33 },
  { id: 'kornyezet-allatok', subject: 'kornyezet', title: 'Állatok', order: 9, book: 36 },
  { id: 'kornyezet-emlosok', subject: 'kornyezet', title: 'Emlősállatok', order: 10, book: 39 },
  { id: 'kornyezet-madarak', subject: 'kornyezet', title: 'Madarak', order: 11, book: 41 },
  { id: 'kornyezet-halak', subject: 'kornyezet', title: 'Halak', order: 12, book: 44 },
  { id: 'kornyezet-ketelt-hullo', subject: 'kornyezet', title: 'Kétéltűek és hüllők', order: 13, book: 46 },
  { id: 'kornyezet-rovarok', subject: 'kornyezet', title: 'Rovarok', order: 14, book: 48 },
  { id: 'kornyezet-fold-mozgasai', subject: 'kornyezet', title: 'A Föld mozgásai', order: 15, book: 50 },
  { id: 'kornyezet-ismetlodo-jelensegek', subject: 'kornyezet', title: 'Ismétlődő jelenségek', order: 16, book: 54 },
  { id: 'kornyezet-eletszakaszok', subject: 'kornyezet', title: 'Életszakaszok', order: 17, book: 57 },
  { id: 'kornyezet-foldfelszin', subject: 'kornyezet', title: 'A földfelszín vizei, formái', order: 18, book: 64 },
  { id: 'kornyezet-tajekozodas', subject: 'kornyezet', title: 'Tájékozódás, térkép', order: 19, book: 67 },
];

export const kornyezetExercises: Exercise[] = [
  ...targyakExercises,
  ...erzekszervekExercises,
  ...mozgasExercises,
  ...tuzExercises,
  ...halmazallapotokExercises,
  ...vizKorforgasaExercises,
  ...elolenyekExercises,
  ...novenyekExercises,
  ...allatokExercises,
  ...emlosokExercises,
  ...madarakExercises,
  ...halakExercises,
  ...kteltHulloExercises,
  ...rovarokExercises,
  ...foldMozgasaiExercises,
  ...ismetlodoExercises,
  ...eletszakaszokExercises,
  ...foldfelszinExercises,
  ...tajekozodasExercises,
];
