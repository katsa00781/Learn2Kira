import { pu, mc } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-mondatfajtak';

const FAJTA = ['kijelentő', 'kérdő', 'felkiáltó', 'felszólító', 'óhajtó'];

/**
 * Mondatfajták és mondatvégi írásjelek – 25 feladat.
 * 1–15: mondatvégi írásjel választása
 * 16–25: a mondatfajta megnevezése
 */
export const mondatfajtakExercises: Exercise[] = [
  pu(T, 1, 'Süt a nap', '.'),
  pu(T, 2, 'Hány óra van', '?'),
  pu(T, 3, 'De szép ez a virág', '!'),
  pu(T, 4, 'Kira szereti a majmokat', '.'),
  pu(T, 5, 'Merre van az iskola', '?'),
  pu(T, 6, 'Gyere ide gyorsan', '!'),
  pu(T, 7, 'A kutya hangosan ugat', '.'),
  pu(T, 8, 'Ki nyerte a versenyt', '?'),
  pu(T, 9, 'Vigyázz, jön az autó', '!'),
  pu(T, 10, 'Holnap moziba megyünk', '.'),
  pu(T, 11, 'Mikor kezdődik a film', '?'),
  pu(T, 12, 'Bárcsak esne már az eső', '!', 'Az óhajtó mondat végére is felkiáltójel kerül.'),
  pu(T, 13, 'A madarak ősszel délre repülnek', '.'),
  pu(T, 14, 'Add ide a könyvet', '!'),
  pu(T, 15, 'Szereted a csokoládét', '?'),

  mc(T, 16, 'Milyen mondatfajta? A nagymamám kertje tele van virággal.', FAJTA, 0, 'Közlünk vele valamit.'),
  mc(T, 17, 'Milyen mondatfajta? Hol hagytad a füzetedet?', FAJTA, 1),
  mc(T, 18, 'Milyen mondatfajta? Milyen gyorsan szaladsz!', FAJTA, 2, 'Erős érzelmet fejez ki.'),
  mc(T, 19, 'Milyen mondatfajta? Zárd be az ajtót!', FAJTA, 3, 'Felszólít, parancsol vagy kér valamit.'),
  mc(T, 20, 'Milyen mondatfajta? Bárcsak sütne már a nap!', FAJTA, 4, 'Kívánságot fejez ki, gyakran kezdődik így: bárcsak, csak.'),
  mc(T, 21, 'Milyen mondatfajta? Kérlek, segíts nekem!', FAJTA, 3),
  mc(T, 22, 'Milyen mondatfajta? Az iskola nyolc órakor kezdődik.', FAJTA, 0),
  mc(T, 23, 'Milyen mondatfajta? Hány testvéred van?', FAJTA, 1),
  mc(T, 24, 'Milyen mondatfajta? De jó, hogy itt vagy!', FAJTA, 2),
  mc(T, 25, 'Melyik mondat végére kerül kérdőjel?', ['Fázom.', 'Fázol?', 'Ne fázz!'], 1),
];
