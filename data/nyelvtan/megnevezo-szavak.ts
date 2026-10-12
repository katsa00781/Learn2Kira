import { mc, sg } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-megnevezo-szavak';

/** A könyv bontása: élőlény / tárgy / gondolati dolog neve. */
const MIT = ['élőlény neve', 'tárgy neve', 'gondolati dolog neve'];
/** A könyv a "több hasonló" / "saját" megkülönböztetést használja. */
const TOBB = ['több hasonló neve', 'saját név'];

/**
 * Valakit vagy valamit megnevező szavak – 20 feladat. Tankönyv 45. oldal.
 * A "Kisbetű? Nagybetű?" alfejezet (50. oldal) külön témakör: tulajdonnevek.ts
 */
export const megnevezoSzavakExercises: Exercise[] = [
  mc(T, 1, 'Melyik kérdésre válaszol a megnevező szó?', ['Ki? Mi?', 'Mit csinál?', 'Milyen?'], 0),
  mc(T, 2, 'Melyik szó nevez meg valakit vagy valamit? fut, kutya, piros', ['fut', 'kutya', 'piros'], 1),
  mc(T, 3, 'Melyik szó nevez meg valakit vagy valamit? gyors, énekel, madár', ['gyors', 'énekel', 'madár'], 2),
  mc(T, 4, 'Melyik szó NEM nevez meg valakit vagy valamit? asztal, erdő, alszik', ['asztal', 'erdő', 'alszik'], 2),
  mc(T, 5, 'Melyik szó NEM nevez meg valakit vagy valamit? víz, hideg, pohár', ['víz', 'hideg', 'pohár'], 1),

  sg(T, 6, MIT, [['katica', 'élőlény neve'], ['ceruza', 'tárgy neve'], ['öröm', 'gondolati dolog neve'], ['tanító', 'élőlény neve'], ['szék', 'tárgy neve'], ['álom', 'gondolati dolog neve']], 'A gondolati dolgot nem lehet megfogni, mégis van neve.'),
  sg(T, 7, MIT, [['nyuszi', 'élőlény neve'], ['labda', 'tárgy neve'], ['bátorság', 'gondolati dolog neve'], ['virág', 'élőlény neve'], ['kanál', 'tárgy neve'], ['szeretet', 'gondolati dolog neve']]),
  sg(T, 8, MIT, [['gólya', 'élőlény neve'], ['könyv', 'tárgy neve'], ['félelem', 'gondolati dolog neve'], ['tölgyfa', 'élőlény neve'], ['óra', 'tárgy neve'], ['béke', 'gondolati dolog neve']]),
  sg(T, 9, MIT, [['majom', 'élőlény neve'], ['bicikli', 'tárgy neve'], ['barátság', 'gondolati dolog neve'], ['kislány', 'élőlény neve'], ['tányér', 'tárgy neve'], ['bánat', 'gondolati dolog neve']]),
  sg(T, 10, MIT, [['macska', 'élőlény neve'], ['toll', 'tárgy neve'], ['vidámság', 'gondolati dolog neve'], ['bogár', 'élőlény neve'], ['pohár', 'tárgy neve'], ['csend', 'gondolati dolog neve']]),

  sg(T, 11, TOBB, [['folyó', 'több hasonló neve'], ['Duna', 'saját név'], ['város', 'több hasonló neve'], ['Paks', 'saját név'], ['ország', 'több hasonló neve'], ['Magyarország', 'saját név']], 'A saját név egyetlen bizonyos valakit vagy valamit jelöl.'),
  sg(T, 12, TOBB, [['tó', 'több hasonló neve'], ['Balaton', 'saját név'], ['hegy', 'több hasonló neve'], ['Mátra', 'saját név'], ['folyó', 'több hasonló neve'], ['Tisza', 'saját név']]),
  sg(T, 13, TOBB, [['kislány', 'több hasonló neve'], ['Kira', 'saját név'], ['kutya', 'több hasonló neve'], ['Bodri', 'saját név'], ['költő', 'több hasonló neve'], ['Petőfi Sándor', 'saját név']]),
  sg(T, 14, TOBB, [['iskola', 'több hasonló neve'], ['Deák Ferenc Általános Iskola', 'saját név'], ['utca', 'több hasonló neve'], ['Kossuth utca', 'saját név'], ['földrész', 'több hasonló neve'], ['Európa', 'saját név']]),

  mc(T, 15, 'Melyik szó saját név?', ['város', 'Szeged', 'ország'], 1),
  mc(T, 16, 'Melyik szó saját név?', ['Bécs', 'folyó', 'hegy'], 0),
  mc(T, 17, 'Melyik szó NEM saját név?', ['Duna', 'tó', 'Balaton'], 1),
  mc(T, 18, 'Melyik szó gondolati dolgot nevez meg?', ['asztal', 'öröm', 'kutya'], 1, 'Olyat keress, amit nem lehet megfogni.'),
  mc(T, 19, 'Melyik szó tárgyat nevez meg?', ['bátorság', 'katica', 'ceruza'], 2),
  mc(T, 20, 'Melyik szó élőlényt nevez meg?', ['szekrény', 'tölgyfa', 'álom'], 1, 'A növény is élőlény.'),
];
