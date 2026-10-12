import { mc, sg } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-szojelentes';

const HANY = ['egy jelentése van', 'több jelentése van'];

/**
 * Hány jelentése lehet a szónak? – 20 feladat. Tankönyv 28. oldal.
 * Az azonos alakú szavak felismerése. A feladat mindig megadja a mondatot,
 * amiben a szó szerepel — enélkül a kérdés megválaszolhatatlan lenne.
 */
export const szojelentesExercises: Exercise[] = [
  sg(T, 1, HANY, [['ég', 'több jelentése van'], ['asztal', 'egy jelentése van'], ['vár', 'több jelentése van'], ['ceruza', 'egy jelentése van'], ['fej', 'több jelentése van'], ['ablak', 'egy jelentése van']], 'Van, amelyik szó ugyanúgy hangzik, mégis mást jelent.'),
  sg(T, 2, HANY, [['nyúl', 'több jelentése van'], ['szekrény', 'egy jelentése van'], ['zár', 'több jelentése van'], ['kanál', 'egy jelentése van'], ['toll', 'több jelentése van'], ['kerítés', 'egy jelentése van']]),
  sg(T, 3, HANY, [['levél', 'több jelentése van'], ['pohár', 'egy jelentése van'], ['fog', 'több jelentése van'], ['szőnyeg', 'egy jelentése van'], ['dob', 'több jelentése van'], ['párna', 'egy jelentése van']]),

  mc(T, 4, 'Mit jelent az ég szó ebben a mondatban? Kék az ég felettünk.', ['lángol', 'a felettünk lévő égbolt', 'fáj'], 1),
  mc(T, 5, 'Mit jelent az ég szó ebben a mondatban? Ég a tűz a kályhában.', ['lángol', 'az égbolt', 'siet'], 0),
  mc(T, 6, 'Mit jelent a vár szó ebben a mondatban? A hegyen régi vár áll.', ['várakozik', 'erődítmény', 'épít'], 1),
  mc(T, 7, 'Mit jelent a vár szó ebben a mondatban? Anya a kapuban vár engem.', ['várakozik', 'erődítmény', 'fut'], 0),
  mc(T, 8, 'Mit jelent a nyúl szó ebben a mondatban? A nyúl gyorsan szalad.', ['kinyújtja a kezét', 'hosszú fülű állat', 'fekszik'], 1),
  mc(T, 9, 'Mit jelent a nyúl szó ebben a mondatban? Kira a polcon lévő könyvért nyúl.', ['kinyújtja a kezét', 'hosszú fülű állat', 'ugrik'], 0),
  mc(T, 10, 'Mit jelent a fej szó ebben a mondatban? Fáj a fejem.', ['testrész', 'a tehenet feji', 'káposztafej'], 0),
  mc(T, 11, 'Mit jelent a fej szó ebben a mondatban? A gazda fej a tehénistállóban.', ['testrész', 'tejet szerez a tehéntől', 'gondolkodik'], 1),
  mc(T, 12, 'Mit jelent a toll szó ebben a mondatban? A madár tolla hullik.', ['írószer', 'a madár testét borítja', 'papír'], 1),
  mc(T, 13, 'Mit jelent a toll szó ebben a mondatban? Kék tollal írok.', ['írószer', 'madártoll', 'ceruza'], 0),
  mc(T, 14, 'Mit jelent a levél szó ebben a mondatban? Ősszel lehullik a levél.', ['postai küldemény', 'a fa levele', 'papír'], 1),
  mc(T, 15, 'Mit jelent a levél szó ebben a mondatban? Levelet írtam a nagyinak.', ['postai küldemény', 'a fa levele', 'könyv'], 0),

  mc(T, 16, 'Melyik szónak van több jelentése?', ['szekrény', 'zár', 'párna'], 1, 'Gondolj a kulcsra és az ajtó becsukására.'),
  mc(T, 17, 'Melyik szónak van több jelentése?', ['dob', 'kanál', 'függöny'], 0, 'Hangszer is, meg el is lehet valamit dobni.'),
  mc(T, 18, 'Melyik szónak van több jelentése?', ['ablak', 'fog', 'cipő'], 1, 'A szádban is van, és meg is lehet valamit fogni.'),
  mc(T, 19, 'Melyik szónak csak egy jelentése van?', ['ég', 'vár', 'bicikli'], 2),
  mc(T, 20, 'Melyik szónak csak egy jelentése van?', ['nyúl', 'radír', 'toll'], 1),
];
