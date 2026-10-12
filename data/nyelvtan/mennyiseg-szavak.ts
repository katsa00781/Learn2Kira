import { mc, sg } from '../builders';
import { SZOCSOPORT as SZ } from '@/types/exercise';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-mennyiseg-szavak';

const PONTOS = ['pontos mennyiség', 'nem pontos mennyiség'];

/**
 * A számot, mennyiséget kifejező szavak – 20 feladat. Tankönyv 101. oldal.
 * A könyv megkülönbözteti a pontos (három, öt) és a nem pontos
 * (sok, kevés, néhány) mennyiséget. A 16–20. a helyesírásra megy:
 * a keltezés és a számok betűvel írása.
 */
export const mennyisegSzavakExercises: Exercise[] = [
  mc(T, 1, 'Melyik kérdésre válaszol a mennyiséget kifejező szó?', ['Hány? Mennyi?', 'Milyen?', 'Mit csinál?'], 0),
  mc(T, 2, 'Melyik szó fejez ki mennyiséget? alma, három, piros', ['alma', 'három', 'piros'], 1),
  mc(T, 3, 'Melyik szó fejez ki mennyiséget? sok, fut, erdő', ['sok', 'fut', 'erdő'], 0),
  mc(T, 4, 'Melyik szó NEM fejez ki mennyiséget? öt, kevés, gyors', ['öt', 'kevés', 'gyors'], 2),

  sg(T, 5, PONTOS, [['három', 'pontos mennyiség'], ['sok', 'nem pontos mennyiség'], ['öt', 'pontos mennyiség'], ['kevés', 'nem pontos mennyiség'], ['tíz', 'pontos mennyiség'], ['néhány', 'nem pontos mennyiség']], 'A sok és a kevés nem mondja meg, pontosan hányat.'),
  sg(T, 6, PONTOS, [['hét', 'pontos mennyiség'], ['rengeteg', 'nem pontos mennyiség'], ['kettő', 'pontos mennyiség'], ['pár', 'nem pontos mennyiség'], ['húsz', 'pontos mennyiség'], ['számos', 'nem pontos mennyiség']]),
  sg(T, 7, PONTOS, [['négy', 'pontos mennyiség'], ['temérdek', 'nem pontos mennyiség'], ['száz', 'pontos mennyiség'], ['kevesebb', 'nem pontos mennyiség'], ['nyolc', 'pontos mennyiség'], ['több', 'nem pontos mennyiség']]),

  sg(T, 8, [SZ.mennyiseg, SZ.megnevezo], [['hat', SZ.mennyiseg], ['kosár', SZ.megnevezo], ['sok', SZ.mennyiseg], ['gomba', SZ.megnevezo], ['két', SZ.mennyiseg], ['erdő', SZ.megnevezo]]),
  sg(T, 9, [SZ.mennyiseg, SZ.tulajdonsag], [['öt', SZ.mennyiseg], ['piros', SZ.tulajdonsag], ['kevés', SZ.mennyiseg], ['édes', SZ.tulajdonsag], ['tíz', SZ.mennyiseg], ['érett', SZ.tulajdonsag]]),

  mc(T, 10, 'Melyik szó fejez ki mennyiséget a mondatban? Három piros alma van a tálon.', ['három', 'piros', 'tálon'], 0),
  mc(T, 11, 'Melyik szó fejez ki mennyiséget a mondatban? Sok gyerek játszik az udvaron.', ['gyerek', 'sok', 'játszik'], 1),
  mc(T, 12, 'Melyik szó fejez ki mennyiséget a mondatban? Kevés hó esett tavaly.', ['hó', 'kevés', 'esett'], 1),
  mc(T, 13, 'Hány mennyiséget kifejező szó van? Két kutya és öt macska.', ['1', '2', '3'], 1),

  mc(T, 14, 'Melyik mondat helyes?', ['Három almák vannak.', 'Három alma van.'], 1, 'A mennyiséget kifejező szó után egyes szám áll.'),
  mc(T, 15, 'Melyik mondat helyes?', ['Sok virág nyílik.', 'Sok virágok nyílnak.'], 0),

  mc(T, 16, 'Melyik írásmód helyes?', ['huszonöt', 'huszon öt', 'huszon-öt'], 0, 'A kétjegyű számneveket egybeírjuk.'),
  mc(T, 17, 'Melyik írásmód helyes?', ['harminc kettő', 'harminckettő', 'harminc-kettő'], 1),
  mc(T, 18, 'Melyik írásmód helyes?', ['ezer kilencszáz', 'ezerkilencszáz', 'ezer-kilencszáz'], 1),
  mc(T, 19, 'Melyik írásmód helyes? (dátum)', ['2026. október 12.', '2026. Október 12.', '2026 október 12'], 0, 'A hónap neve kisbetűs, és pont van az év és a nap után.'),
  mc(T, 20, 'Melyik írásmód helyes? (dátum)', ['1848. Március 15.', '1848. március 15.', '1848 március 15'], 1),
];
