import { mc, sg } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-igeidok';

const IDO = ['múlt idő', 'jelen idő', 'jövő idő'];

/**
 * Az ige ideje és az igekötő – 25 feladat.
 * 1–8: felismerés feleletválasztóssal
 * 9–14: csoportosítás három igeidőbe
 * 15–20: igeidő átalakítás
 * 21–25: igekötő felismerése
 */
export const igeidokExercises: Exercise[] = [
  mc(T, 1, 'Milyen időben van az ige? futott', IDO, 0, 'Már megtörtént.'),
  mc(T, 2, 'Milyen időben van az ige? olvas', IDO, 1, 'Éppen most történik.'),
  mc(T, 3, 'Milyen időben van az ige? írni fog', IDO, 2, 'Még ezután történik.'),
  mc(T, 4, 'Milyen időben van az ige? játszott', IDO, 0),
  mc(T, 5, 'Milyen időben van az ige? énekel', IDO, 1),
  mc(T, 6, 'Milyen időben van az ige? tanulni fog', IDO, 2),
  mc(T, 7, 'Milyen időben van az ige? aludt', IDO, 0),
  mc(T, 8, 'Milyen időben van az ige? rajzol', IDO, 1),

  sg(T, 9, IDO, [['nézett', 'múlt idő'], ['néz', 'jelen idő'], ['nézni fog', 'jövő idő'], ['ugrott', 'múlt idő'], ['ugrik', 'jelen idő'], ['ugrani fog', 'jövő idő']]),
  sg(T, 10, IDO, [['evett', 'múlt idő'], ['eszik', 'jelen idő'], ['enni fog', 'jövő idő'], ['ivott', 'múlt idő'], ['iszik', 'jelen idő'], ['inni fog', 'jövő idő']]),
  sg(T, 11, IDO, [['épített', 'múlt idő'], ['épít', 'jelen idő'], ['építeni fog', 'jövő idő'], ['festett', 'múlt idő'], ['fest', 'jelen idő'], ['festeni fog', 'jövő idő']]),
  sg(T, 12, IDO, [['sétált', 'múlt idő'], ['sétál', 'jelen idő'], ['sétálni fog', 'jövő idő'], ['szaladt', 'múlt idő'], ['szalad', 'jelen idő'], ['szaladni fog', 'jövő idő']]),
  sg(T, 13, IDO, [['nevetett', 'múlt idő'], ['nevet', 'jelen idő'], ['nevetni fog', 'jövő idő'], ['dolgozott', 'múlt idő'], ['dolgozik', 'jelen idő'], ['dolgozni fog', 'jövő idő']]),
  sg(T, 14, IDO, [['főzött', 'múlt idő'], ['főz', 'jelen idő'], ['főzni fog', 'jövő idő'], ['mosott', 'múlt idő'], ['mos', 'jelen idő'], ['mosni fog', 'jövő idő']]),

  mc(T, 15, 'Tedd múlt időbe: fut', ['futott', 'fut', 'futni fog'], 0),
  mc(T, 16, 'Tedd jövő időbe: olvas', ['olvasott', 'olvas', 'olvasni fog'], 2),
  mc(T, 17, 'Tedd jelen időbe: énekelt', ['énekelni fog', 'énekel', 'énekelt'], 1),
  mc(T, 18, 'Tedd múlt időbe: rajzol', ['rajzolni fog', 'rajzolt', 'rajzol'], 1),
  mc(T, 19, 'Tedd jövő időbe: tanul', ['tanult', 'tanulni fog', 'tanul'], 1),
  mc(T, 20, 'Tedd jelen időbe: aludt', ['alszik', 'aludni fog', 'aludt'], 0),

  mc(T, 21, 'Melyik az igekötő? megírta', ['meg', 'írta', 'ta'], 0, 'Az igekötő az ige elé kerülő rövid szó.'),
  mc(T, 22, 'Melyik az igekötő? elment', ['ment', 'el', 'nt'], 1),
  mc(T, 23, 'Melyik az igekötő? kinyitotta', ['nyit', 'ki', 'otta'], 1),
  mc(T, 24, 'Melyik az igekötő? felállt', ['fel', 'állt', 'lt'], 0),
  mc(T, 25, 'Melyik szóban nincs igekötő?', ['leült', 'beszélt', 'visszajött'], 1),
];
