import type { Exercise, Topic } from '@/types/exercise';

import {
  szorzotabla2510Exercises,
  szorzotabla48Exercises,
  szorzotabla36Exercises,
  szorzotabla9Exercises,
  szorzotabla7Exercises,
  szorzotabla0110Exercises,
} from './szorzotabla';
import { muveletsorrendExercises } from './muveletsorrend';
import { maradekosOsztasExercises } from './maradekos-osztas';
import { valogatasExercises, sorozatokExercises, adatokEselyExercises } from './osszefuggesek';
import { helyiErtekExercises } from './helyi-ertek';
import { kerekitesExercises } from './kerekites';
import { fejbenSzamolasExercises } from './fejben-szamolas';
import {
  irasbeliOsszeadasExercises,
  irasbeliKivonasExercises,
  irasbeliSzorzasExercises,
} from './irasbeli-muveletek';
import { szorzasOsztas1000Exercises } from './szorzas-osztas-1000';
import {
  hosszusagExercises,
  urtartalomExercises,
  tomegExercises,
  idoExercises,
} from './mertekegysegek';
import { alakzatokExercises, keruletExercises } from './geometria';
import {
  negativSzamokExercises,
  tortszamokExercises,
  romaiSzamokExercises,
} from './szamfogalom-bovites';
import { szovegesFeladatokExercises } from './szoveges-feladatok';

/**
 * A témakörök sorrendje a Matematika 3. (OH-MAT03TB) tankönyvet követi.
 * A `book` mező a tankönyvi oldalszám.
 *
 * A számkör 1000 — a 3. osztályos tankönyv eddig megy. (A NAT kerettanterv
 * 10 000-et ír, de az a 3–4. évfolyamra együtt vonatkozik.)
 */
export const matekTopics: Topic[] = [
  { id: 'matek-szorzotabla-2-5-10', subject: 'matek', title: 'Szorzótábla: 2, 5, 10', order: 1, book: 30 },
  { id: 'matek-szorzotabla-4-8', subject: 'matek', title: 'Szorzótábla: 4, 8', order: 2, book: 31 },
  { id: 'matek-szorzotabla-3-6', subject: 'matek', title: 'Szorzótábla: 3, 6', order: 3, book: 32 },
  { id: 'matek-szorzotabla-9', subject: 'matek', title: 'Szorzótábla: 9', order: 4, book: 33 },
  { id: 'matek-szorzotabla-7', subject: 'matek', title: 'Szorzótábla: 7', order: 5, book: 34 },
  { id: 'matek-szorzotabla-0-1-10', subject: 'matek', title: 'A 0, az 1 és a 10 a szorzásban', order: 6, book: 35 },
  { id: 'matek-muveletsorrend', subject: 'matek', title: 'Műveletsorrend és zárójel', order: 7, book: 39 },
  { id: 'matek-maradekos-osztas', subject: 'matek', title: 'Maradékos osztás', order: 8, book: 41 },
  { id: 'matek-valogatas', subject: 'matek', title: 'Válogatás, csoportosítás', order: 9, book: 52 },
  { id: 'matek-sorozatok', subject: 'matek', title: 'Sorozatok, szabályszerűségek', order: 10, book: 58 },
  { id: 'matek-helyi-ertek', subject: 'matek', title: 'Helyi érték, alaki érték', order: 11, book: 68 },
  { id: 'matek-kerekites', subject: 'matek', title: 'Számszomszédok, kerekítés', order: 12, book: 72 },
  { id: 'matek-hosszusag', subject: 'matek', title: 'Hosszúságot mérünk', order: 13, book: 78 },
  { id: 'matek-fejben-szamolas', subject: 'matek', title: 'Fejben számolás 1000-ig', order: 14, book: 84 },
  { id: 'matek-irasbeli-osszeadas', subject: 'matek', title: 'Írásbeli összeadás', order: 15, book: 93 },
  { id: 'matek-irasbeli-kivonas', subject: 'matek', title: 'Írásbeli kivonás', order: 16, book: 104 },
  { id: 'matek-urtartalom', subject: 'matek', title: 'Űrtartalmat mérünk', order: 17, book: 117 },
  { id: 'matek-szorzas-osztas-1000', subject: 'matek', title: 'Szorzás, osztás 1000-ig', order: 18, book: 121 },
  { id: 'matek-alakzatok', subject: 'matek', title: 'Alakzatok', order: 19, book: 136 },
  { id: 'matek-kerulet', subject: 'matek', title: 'Kerület', order: 20, book: 150 },
  { id: 'matek-negativ-szamok', subject: 'matek', title: 'Negatív számok', order: 21, book: 152 },
  { id: 'matek-tomeg', subject: 'matek', title: 'Tömeget mérünk', order: 22, book: 154 },
  { id: 'matek-irasbeli-szorzas', subject: 'matek', title: 'Írásbeli szorzás', order: 23, book: 157 },
  { id: 'matek-ido', subject: 'matek', title: 'Időt mérünk', order: 24, book: 167 },
  { id: 'matek-tortszamok', subject: 'matek', title: 'Törtszámok', order: 25, book: 171 },
  { id: 'matek-romai-szamok', subject: 'matek', title: 'Római számok', order: 26, book: 188 },
  { id: 'matek-adatok-esely', subject: 'matek', title: 'Adatok, esélyek', order: 27, book: 189 },
  { id: 'matek-szoveges-feladatok', subject: 'matek', title: 'Szöveges feladatok', order: 28, book: 191 },
];

export const matekExercises: Exercise[] = [
  ...szorzotabla2510Exercises,
  ...szorzotabla48Exercises,
  ...szorzotabla36Exercises,
  ...szorzotabla9Exercises,
  ...szorzotabla7Exercises,
  ...szorzotabla0110Exercises,
  ...muveletsorrendExercises,
  ...maradekosOsztasExercises,
  ...valogatasExercises,
  ...sorozatokExercises,
  ...helyiErtekExercises,
  ...kerekitesExercises,
  ...hosszusagExercises,
  ...fejbenSzamolasExercises,
  ...irasbeliOsszeadasExercises,
  ...irasbeliKivonasExercises,
  ...urtartalomExercises,
  ...szorzasOsztas1000Exercises,
  ...alakzatokExercises,
  ...keruletExercises,
  ...negativSzamokExercises,
  ...tomegExercises,
  ...irasbeliSzorzasExercises,
  ...idoExercises,
  ...tortszamokExercises,
  ...romaiSzamokExercises,
  ...adatokEselyExercises,
  ...szovegesFeladatokExercises,
];
