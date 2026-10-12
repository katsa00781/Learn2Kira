import { oi } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-beturend';

/**
 * Ábécé és betűrend – 20 feladat.
 * 1–6: eltérő kezdőbetűk (könnyű)
 * 7–14: kétjegyű betűk (c/cs, s/sz, g/gy, n/ny, t/ty, z/zs)
 * 15–20: azonos kezdőbetű, a második betű dönt — köztük rövid/hosszú
 *        magánhangzó párok (e/é, a/á, o/ó), ami a legnehezebb.
 */
export const beturendExercises: Exercise[] = [
  oi(T, 1, ['alma', 'banán', 'citrom', 'dió'], ['citrom', 'alma', 'dió', 'banán']),
  oi(T, 2, ['erdő', 'fa', 'gomba', 'hegy'], ['hegy', 'gomba', 'erdő', 'fa']),
  oi(T, 3, ['iskola', 'játék', 'kutya', 'labda'], ['labda', 'kutya', 'iskola', 'játék']),
  oi(T, 4, ['macska', 'nyuszi', 'oroszlán', 'párduc'], ['párduc', 'oroszlán', 'macska', 'nyuszi']),
  oi(T, 5, ['rák', 'sün', 'teknős', 'uborka'], ['uborka', 'teknős', 'rák', 'sün']),
  oi(T, 6, ['malac', 'medve', 'mókus'], ['mókus', 'malac', 'medve']),
  oi(T, 7, ['cica', 'cukor', 'csiga'], ['csiga', 'cukor', 'cica'], 'A cs a c után jön az ábécében.'),
  oi(T, 8, ['sárga', 'sün', 'szék'], ['szék', 'sün', 'sárga'], 'Az sz az s után jön.'),
  oi(T, 9, ['golyó', 'gomb', 'gyerek'], ['gyerek', 'gomb', 'golyó'], 'A gy a g után jön.'),
  oi(T, 10, ['nád', 'nap', 'nyár'], ['nyár', 'nap', 'nád'], 'Az ny az n után jön.'),
  oi(T, 11, ['tanár', 'teknős', 'tyúk'], ['tyúk', 'teknős', 'tanár'], 'A ty a t után jön.'),
  oi(T, 12, ['cica', 'virág', 'zebra', 'zsiráf'], ['zsiráf', 'zebra', 'cica', 'virág'], 'A zs a z után jön.'),
  oi(T, 13, ['dió', 'dzsungel', 'fa'], ['fa', 'dzsungel', 'dió']),
  oi(T, 14, ['lámpa', 'liba', 'lyuk'], ['lyuk', 'liba', 'lámpa'], 'Az ly az l után jön.'),
  oi(T, 15, ['ablak', 'alma', 'asztal'], ['asztal', 'alma', 'ablak'], 'A második betűt nézd!'),
  oi(T, 16, ['bagoly', 'béka', 'bogár'], ['bogár', 'béka', 'bagoly']),
  oi(T, 17, ['hal', 'ház', 'hó'], ['hó', 'ház', 'hal'], 'Az a megelőzi az á-t.'),
  oi(T, 18, ['kalap', 'kert', 'kép'], ['kép', 'kert', 'kalap'], 'Vigyázz: az e megelőzi az é-t!'),
  oi(T, 19, ['tej', 'tél', 'tó'], ['tó', 'tél', 'tej'], 'Először e, aztán é, végül o.'),
  oi(T, 20, ['olló', 'óra', 'ötlet'], ['ötlet', 'óra', 'olló'], 'Sorrend: o, ó, ö.'),
];
