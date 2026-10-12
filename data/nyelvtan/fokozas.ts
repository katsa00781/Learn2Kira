import { mc, oi } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-fokozas';

/**
 * A tulajdonságot kifejező szavak fokozása – 20 feladat. Tankönyv 92. oldal.
 * Alapfok / középfok (-bb) / felsőfok (leg- …-bb).
 * A 15–20. feladatok a helyesírási buktatóra mennek: a legmagasabb egy szó,
 * és a -bb a szótő végi magánhangzót megnyújtja (drága → drágább).
 */
export const fokozasExercises: Exercise[] = [
  mc(T, 1, 'Mi a középfoka? magas', ['magasabb', 'legmagasabb', 'magas'], 0, 'A középfok jele: -bb'),
  mc(T, 2, 'Mi a felsőfoka? magas', ['magasabb', 'legmagasabb', 'magas'], 1, 'A felsőfok jele: leg- és -bb együtt.'),
  mc(T, 3, 'Mi a középfoka? gyors', ['leggyorsabb', 'gyorsabb', 'gyors'], 1),
  mc(T, 4, 'Mi a felsőfoka? szép', ['szebb', 'legszebb', 'szép'], 1),
  mc(T, 5, 'Mi a középfoka? nagy', ['nagyobb', 'legnagyobb', 'nagy'], 0),
  mc(T, 6, 'Mi a felsőfoka? kicsi', ['kisebb', 'legkisebb', 'kicsi'], 1),
  mc(T, 7, 'Mi a középfoka? okos', ['legokosabb', 'okosabb', 'okos'], 1),
  mc(T, 8, 'Mi a felsőfoka? erős', ['erősebb', 'legerősebb', 'erős'], 1),

  oi(T, 9, ['magas', 'magasabb', 'legmagasabb'], ['legmagasabb', 'magas', 'magasabb'], 'Alapfok, középfok, felsőfok sorrendben.'),
  oi(T, 10, ['gyors', 'gyorsabb', 'leggyorsabb'], ['gyorsabb', 'leggyorsabb', 'gyors']),
  oi(T, 11, ['szép', 'szebb', 'legszebb'], ['legszebb', 'szebb', 'szép']),
  oi(T, 12, ['jó', 'jobb', 'legjobb'], ['jobb', 'jó', 'legjobb']),

  mc(T, 13, 'Melyik fokon áll? legügyesebb', ['alapfok', 'középfok', 'felsőfok'], 2),
  mc(T, 14, 'Melyik fokon áll? vastagabb', ['alapfok', 'középfok', 'felsőfok'], 1),

  mc(T, 15, 'Melyik írásmód helyes?', ['leg magasabb', 'legmagasabb', 'leg-magasabb'], 1, 'A leg- egybeíródik a szóval.'),
  mc(T, 16, 'Melyik írásmód helyes?', ['legjobb', 'leg jobb', 'legjob'], 0),
  mc(T, 17, 'Melyik a helyes középfok? drága', ['drágabb', 'drágább', 'drágáb'], 1, 'A szó végi á hosszú marad, és a bb kettőzve van.'),
  mc(T, 18, 'Melyik a helyes középfok? olcsó', ['olcsóbb', 'olcsobb', 'olcsób'], 0),
  mc(T, 19, 'Melyik a helyes középfok? lassú', ['lassubb', 'lassúbb', 'lassúb'], 1),
  mc(T, 20, 'Melyik mondat helyes?', ['Kira magasabb, mint a testvére.', 'Kira magasab, mint a testvére.'], 0),
];
