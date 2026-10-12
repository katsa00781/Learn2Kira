import { ml } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'helyesiras-hangok';

/**
 * A hangok időtartama – 30 feladat.
 * 1–20: magánhangzók hosszúsága (a szóvégi -ú/-ű/-ó/-ő a klasszikus buktató)
 * 21–30: mássalhangzók hosszúsága
 */
export const hangokExercises: Exercise[] = [
  // magánhangzók
  ml(T, 1, 'fi', '', ['u', 'ú'], 'ú', 'A végén hosszú.'),
  ml(T, 2, 'kap', '', ['u', 'ú'], 'u', 'Ezen mész be az udvarra.'),
  ml(T, 3, 'szomor', '', ['u', 'ú'], 'ú', 'Nem vidám.'),
  ml(T, 4, 'ann', '', ['yu', 'yú'], 'yu', 'Édesanya becézve.'),
  ml(T, 5, 'bet', '', ['ü', 'ű'], 'ű', 'Az ábécé eleme.'),
  ml(T, 6, 'gy', 'rű', ['ü', 'ű'], 'ű', 'Az ujjadra húzod. Mindkét hang hosszú benne.'),
  ml(T, 7, 'keser', '', ['ü', 'ű'], 'ű', 'A citrom héja ilyen ízű.'),
  ml(T, 8, 'heged', '', ['ü', 'ű'], 'ű', 'Vonóval szólaltatod meg.'),
  ml(T, 9, 'fecsk', '', ['e', 'é'], 'e', 'Villás farkú madár.'),
  ml(T, 10, 'h', 'd', ['i', 'í'], 'í', 'A folyó fölött vezet át.'),
  ml(T, 11, 'v', 'z', ['i', 'í'], 'í', 'Ezt iszod, ha szomjas vagy.'),
  ml(T, 12, 'sz', 'v', ['i', 'í'], 'í', 'A mellkasodban dobog.'),
  ml(T, 13, 'kics', '', ['i', 'í'], 'i', 'Nem nagy.'),
  ml(T, 14, 'tan', 'tó', ['i', 'í'], 'í', 'Ő tanít az iskolában.'),
  ml(T, 15, '', 'ra', ['o', 'ó'], 'ó', 'Az időt mutatja.'),
  ml(T, 16, 'b', 'lt', ['o', 'ó'], 'o', 'Itt vásárolsz.'),
  ml(T, 17, 'r', 'ka', ['o', 'ó'], 'ó', 'Vörös bundájú ravasz állat.'),
  ml(T, 18, 'erd', '', ['ö', 'ő'], 'ő', 'Sok fa együtt.'),
  ml(T, 19, 'z', 'ld', ['ö', 'ő'], 'ö', 'A fű színe.'),
  ml(T, 20, 'tet', '', ['ö', 'ő'], 'ő', 'A ház legfelső része.'),

  // mássalhangzók
  ml(T, 21, 'ha', '', ['l', 'll'], 'll', 'A füleddel csinálod.'),
  ml(T, 22, 'á', '', ['l', 'll'], 'll', 'Nem ül és nem fekszik.'),
  ml(T, 23, 'ke', '', ['l', 'll'], 'll', 'Szükség van rá.'),
  ml(T, 24, 'ha', 'gat', ['l', 'll'], 'll', 'Zenét szoktál.'),
  ml(T, 25, 'i', '', ['t', 'tt'], 'tt', 'Nem ott, hanem…'),
  ml(T, 26, 'o', '', ['t', 'tt'], 'tt', 'Nem itt, hanem…'),
  ml(T, 27, 'jo', '', ['b', 'bb'], 'bb', 'Nem bal.'),
  ml(T, 28, 'ho', 'ú', ['sz', 'ssz'], 'ssz', 'Nem rövid.'),
  ml(T, 29, 'me', 'yi', ['n', 'nn'], 'nn', 'Kérdés a számra.'),
  ml(T, 30, 'e', 'en', ['b', 'bb'], 'bb', 'Ebben a dobozban.'),
];
