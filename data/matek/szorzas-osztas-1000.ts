import { ni, mc } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'matek-szorzas-osztas-1000';

/**
 * Szorzás és osztás az 1000-es számkörben – tankönyv 121–133. oldal.
 * A szorzás és az osztás tulajdonságai, 10-zel és 100-zal, tízesekkel és
 * százasokkal, végül nagyobb számok. Az eredmények számítva készülnek.
 */

const mk = (
  items: [a: number, b: number][],
  op: '×' | ':',
  from: number,
  hint?: string,
): Exercise[] =>
  items.map(([a, b], i) =>
    ni(T, from + i, `${a} ${op} ${b}`, op === '×' ? a * b : a / b, { hint: i === 0 ? hint : undefined }),
  );

export const szorzasOsztas1000Exercises: Exercise[] = [
  // 10-zel és 100-zal (125–126. o.)
  ...mk([[14, 10], [27, 10], [35, 10], [48, 10], [60, 10], [93, 10]], '×', 1, 'Tízzel szorozva egy nulla kerül a szám végére.'),
  ...mk([[3, 100], [5, 100], [7, 100], [9, 100]], '×', 7, 'Százzal szorozva két nulla kerül a végére.'),
  ...mk([[180, 10], [450, 10], [620, 10], [900, 10], [370, 10]], ':', 11, 'Tízzel osztva egy nulla tűnik el a végéről.'),
  ...mk([[300, 100], [700, 100], [500, 100], [900, 100]], ':', 16),

  // tízesekkel, százasokkal (127–128. o.)
  ...mk([[20, 4], [30, 3], [40, 5], [60, 8], [70, 6], [80, 9], [50, 7], [90, 4]], '×', 20, 'Számolj az egyesekkel, aztán tedd a végére a nullát.'),
  ...mk([[200, 3], [300, 2], [100, 9], [400, 2]], '×', 28),
  ...mk([[240, 4], [360, 6], [480, 8], [560, 7], [630, 9], [720, 8]], ':', 32),

  // nagyobb számok szorzása (129–130. o.)
  ...mk([[12, 5], [13, 6], [14, 4], [16, 3], [23, 4], [34, 2], [15, 6], [18, 5]], '×', 38),

  // nagyobb számok osztása (131. o.)
  ...mk([[96, 4], [84, 6], [78, 3], [92, 4], [85, 5]], ':', 46),

  // a szorzás és az osztás kapcsolata (124. o.)
  ni(T, 51, '7 × ? = 490', 70),
  ni(T, 52, '? × 6 = 360', 60),
  ni(T, 53, '240 : ? = 8', 30),
  ni(T, 54, '? : 5 = 60', 300),
  mc(T, 55, 'Ha 8 × 9 = 72, mennyi 72 : 9?', ['8', '9', '72'], 0, 'Az osztás a szorzás megfordítása.'),
  mc(T, 56, 'Megváltozik az eredmény, ha felcseréled a szorzótényezőket? 4 × 7 és 7 × 4', ['Nem', 'Igen'], 0),
  mc(T, 57, 'Megváltozik az eredmény, ha felcseréled az osztandót és az osztót? 12 : 4 és 4 : 12', ['Igen', 'Nem'], 0, 'Az osztásnál a sorrend számít.'),
  mc(T, 58, 'Mennyi bármely szám osztva önmagával?', ['1', '0', 'maga a szám'], 0),
];
