import { ni, mc, sg } from '../builders';
import type { Exercise } from '@/types/exercise';

/**
 * Alakzatok (136–149.) és kerület (150. oldal).
 *
 * A testek építése, a tükörképek rajzolása, a kicsinyítés-nagyítás és a
 * parkettázás NINCS itt: azok kézzel építős és rajzolós feladatok, nincs
 * ellenőrizhető válaszuk. Ami bekerült: a tulajdonságok felismerése és a
 * kerületszámítás — mindkettőnek van egy helyes válasza.
 */

// ---------------------------------------------------------------- alakzatok

const TA = 'matek-alakzatok';

export const alakzatokExercises: Exercise[] = [
  mc(TA, 1, 'Hány lapja van a kockának?', ['4', '6', '8'], 1),
  mc(TA, 2, 'Hány csúcsa van a kockának?', ['6', '8', '12'], 1),
  mc(TA, 3, 'Hány éle van a kockának?', ['8', '10', '12'], 2),
  mc(TA, 4, 'Milyen alakú a kocka minden lapja?', ['négyzet', 'téglalap', 'háromszög'], 0),
  mc(TA, 5, 'Hány lapja van a téglatestnek?', ['4', '6', '8'], 1),
  mc(TA, 6, 'Milyen alakúak a téglatest lapjai?', ['téglalapok', 'háromszögek', 'körök'], 0),
  mc(TA, 7, 'Minden kocka téglatest is egyben?', ['Igen', 'Nem'], 0, 'A kocka olyan téglatest, aminek minden éle egyforma.'),
  mc(TA, 8, 'Minden téglatest kocka is egyben?', ['Igen', 'Nem'], 1),

  mc(TA, 9, 'Hány oldala van a háromszögnek?', ['3', '4', '5'], 0),
  mc(TA, 10, 'Hány oldala van a négyszögnek?', ['3', '4', '5'], 1),
  mc(TA, 11, 'Hány oldala van az ötszögnek?', ['4', '5', '6'], 1),
  mc(TA, 12, 'Hány csúcsa van a hatszögnek?', ['5', '6', '7'], 1),
  mc(TA, 13, 'Mi igaz a négyzetre?', ['minden oldala egyenlő', 'két oldala egyenlő', 'nincs egyenlő oldala'], 0),
  mc(TA, 14, 'Mi igaz a téglalapra?', ['a szemközti oldalai egyenlők', 'minden oldala egyenlő', 'nincs egyenlő oldala'], 0),
  mc(TA, 15, 'Minden négyzet téglalap is?', ['Igen', 'Nem'], 0),
  mc(TA, 16, 'Hány derékszöge van a téglalapnak?', ['2', '4', '0'], 1),

  sg(TA, 17, ['síkidom', 'test'], [['négyzet', 'síkidom'], ['kocka', 'test'], ['háromszög', 'síkidom'], ['téglatest', 'test'], ['kör', 'síkidom'], ['gömb', 'test']], 'A síkidom lapos, a test térbeli.'),
  sg(TA, 18, ['egyenes vonal', 'görbe vonal'], [['szakasz', 'egyenes vonal'], ['körvonal', 'görbe vonal'], ['félegyenes', 'egyenes vonal'], ['hullámvonal', 'görbe vonal'], ['egyenes', 'egyenes vonal'], ['spirál', 'görbe vonal']]),
  sg(TA, 19, ['van derékszöge', 'nincs derékszöge'], [['négyzet', 'van derékszöge'], ['kör', 'nincs derékszöge'], ['téglalap', 'van derékszöge'], ['szabályos ötszög', 'nincs derékszöge']]),

  mc(TA, 20, 'Melyik alakzatnak nincs csúcsa?', ['háromszög', 'kör', 'négyzet'], 1),
  mc(TA, 21, 'Melyik szög nagyobb a derékszögnél?', ['hegyesszög', 'tompaszög', 'egyik sem'], 1),
  mc(TA, 22, 'Melyik szög kisebb a derékszögnél?', ['hegyesszög', 'tompaszög', 'egyenesszög'], 0),
  mc(TA, 23, 'Hány csúcsa van a kockának összesen a lapjaival együtt megszámolva? Hány lap + hány csúcs?', ['6 + 8 = 14', '6 + 12 = 18', '8 + 12 = 20'], 0),
];

// ------------------------------------------------------------------ kerület

const TK = 'matek-kerulet';

export const keruletExercises: Exercise[] = [
  mc(TK, 1, 'Mit jelent egy síkidom kerülete?', ['az oldalainak összege', 'a lapjainak száma', 'a csúcsainak száma'], 0),
  ni(TK, 2, 'Mekkora egy négyzet kerülete, ha az oldala 5 cm?', 20, { unit: 'cm', hint: 'Négy egyforma oldal.' }),
  ni(TK, 3, 'Mekkora egy négyzet kerülete, ha az oldala 8 cm?', 32, { unit: 'cm' }),
  ni(TK, 4, 'Mekkora egy négyzet kerülete, ha az oldala 12 cm?', 48, { unit: 'cm' }),
  ni(TK, 5, 'Mekkora egy négyzet kerülete, ha az oldala 25 cm?', 100, { unit: 'cm' }),
  ni(TK, 6, 'Mekkora egy téglalap kerülete, ha az oldalai 6 cm és 4 cm?', 20, { unit: 'cm', hint: 'Két hosszú és két rövid oldal.' }),
  ni(TK, 7, 'Mekkora egy téglalap kerülete, ha az oldalai 10 cm és 7 cm?', 34, { unit: 'cm' }),
  ni(TK, 8, 'Mekkora egy téglalap kerülete, ha az oldalai 15 cm és 9 cm?', 48, { unit: 'cm' }),
  ni(TK, 9, 'Mekkora egy téglalap kerülete, ha az oldalai 20 cm és 13 cm?', 66, { unit: 'cm' }),
  ni(TK, 10, 'Mekkora egy háromszög kerülete, ha az oldalai 5 cm, 7 cm és 9 cm?', 21, { unit: 'cm' }),
  ni(TK, 11, 'Mekkora egy háromszög kerülete, ha az oldalai 12 cm, 15 cm és 18 cm?', 45, { unit: 'cm' }),
  ni(TK, 12, 'Mekkora egy szabályos ötszög kerülete, ha egy oldala 6 cm?', 30, { unit: 'cm' }),
  ni(TK, 13, 'Mekkora egy szabályos hatszög kerülete, ha egy oldala 4 cm?', 24, { unit: 'cm' }),

  ni(TK, 14, 'Egy négyzet kerülete 36 cm. Mekkora egy oldala?', 9, { unit: 'cm', hint: 'Oszd négyfelé.' }),
  ni(TK, 15, 'Egy négyzet kerülete 100 cm. Mekkora egy oldala?', 25, { unit: 'cm' }),
  ni(TK, 16, 'Egy téglalap kerülete 40 cm, az egyik oldala 12 cm. Mekkora a másik oldala?', 8, { unit: 'cm', paper: true, hint: 'Két 12 cm-es oldal már 24 cm — mennyi marad a másik kettőre?' }),
  ni(TK, 17, 'Egy téglalap kerülete 26 cm, az egyik oldala 5 cm. Mekkora a másik oldala?', 8, { unit: 'cm', paper: true }),

  ni(TK, 18, 'Egy négyzet alakú kert oldala 15 m. Hány méter kerítés kell köré?', 60, { unit: 'm', paper: true }),
  ni(TK, 19, 'Egy téglalap alakú udvar 18 m és 12 m. Hány méter a kerülete?', 60, { unit: 'm', paper: true }),
  ni(TK, 20, 'Egy képkeret oldalai 30 cm és 20 cm. Hány cm léc kell hozzá?', 100, { unit: 'cm', paper: true }),
];
