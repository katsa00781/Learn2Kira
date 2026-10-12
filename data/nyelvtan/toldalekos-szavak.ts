import { mc } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-toldalekos-szavak';

/**
 * -ba/-be és -ban/-ben – 20 feladat.
 * A szabály: -ba/-be = hova? (mozgás valahova),
 *            -ban/-ben = hol? (helyben lét).
 * 1–14: mondatkiegészítés
 * 15–20: a kérdőszó felismerése és hibakeresés
 */
export const toldalekosSzavakExercises: Exercise[] = [
  mc(T, 1, 'Reggel elindulok az iskolá___', ['-ba', '-ban'], 0, 'Hova megyek? Mozgás történik.'),
  mc(T, 2, 'Az iskolá___ sokat tanulok.', ['-ba', '-ban'], 1, 'Hol tanulok? Ott vagyok, nem megyek.'),
  mc(T, 3, 'Beteszem a füzetet a táská___', ['-ba', '-ban'], 0),
  mc(T, 4, 'A táská___ három könyv van.', ['-ba', '-ban'], 1),
  mc(T, 5, 'A madár berepült a fészek___', ['-be', '-ben'], 0),
  mc(T, 6, 'A fészek___ öt tojás van.', ['-be', '-ben'], 1),
  mc(T, 7, 'Anya bemegy a bolt___', ['-ba', '-ban'], 0),
  mc(T, 8, 'A bolt___ sok ember vásárol.', ['-ba', '-ban'], 1),
  mc(T, 9, 'Elmentünk az erdő___ sétálni.', ['-be', '-ben'], 0),
  mc(T, 10, 'Az erdő___ gombát találtunk.', ['-be', '-ben'], 1),
  mc(T, 11, 'Kira beült az autó___', ['-ba', '-ban'], 0),
  mc(T, 12, 'Az autó___ hallgattunk zenét.', ['-ba', '-ban'], 1),
  mc(T, 13, 'A kutya befutott a kert___', ['-be', '-ben'], 0),
  mc(T, 14, 'A kert___ virágok nyílnak.', ['-be', '-ben'], 1),
  mc(T, 15, 'Melyik kérdésre válaszol a -ba, -be toldalék?', ['Hol?', 'Hova?', 'Honnan?'], 1),
  mc(T, 16, 'Melyik kérdésre válaszol a -ban, -ben toldalék?', ['Hol?', 'Hova?', 'Honnan?'], 0),
  mc(T, 17, 'Melyik mondat helyes?', ['Megyek a szobába.', 'Megyek a szobában.'], 0),
  mc(T, 18, 'Melyik mondat helyes?', ['A szobába alszom.', 'A szobában alszom.'], 1),
  mc(T, 19, 'Melyik mondat helyes?', ['A konyhában főz anya.', 'A konyhába főz anya.'], 0),
  mc(T, 20, 'Melyik mondat helyes?', ['Beteszem a tejet a hűtőben.', 'Beteszem a tejet a hűtőbe.'], 1),
];
