import { ni, mc, sg } from '../builders';
import type { Exercise } from '@/types/exercise';

/**
 * Válogatás, csoportosítás (52.), összefüggések és szabályszerűségek (58.),
 * adatgyűjtés (189.) és valószínűség (190. oldal).
 */

// ------------------------------------------------- válogatás, csoportosítás

const TV = 'matek-valogatas';

export const valogatasExercises: Exercise[] = [
  sg(TV, 1, ['páros', 'páratlan'], [['24', 'páros'], ['37', 'páratlan'], ['50', 'páros'], ['63', 'páratlan'], ['86', 'páros'], ['95', 'páratlan']], 'A páros szám 0, 2, 4, 6 vagy 8 számjegyre végződik.'),
  sg(TV, 2, ['páros', 'páratlan'], [['128', 'páros'], ['341', 'páratlan'], ['470', 'páros'], ['555', 'páratlan'], ['602', 'páros'], ['789', 'páratlan']]),
  sg(TV, 3, ['kétjegyű', 'háromjegyű'], [['47', 'kétjegyű'], ['208', 'háromjegyű'], ['90', 'kétjegyű'], ['715', 'háromjegyű'], ['63', 'kétjegyű'], ['100', 'háromjegyű']]),
  sg(TV, 4, ['osztható 5-tel', 'nem osztható 5-tel'], [['35', 'osztható 5-tel'], ['42', 'nem osztható 5-tel'], ['70', 'osztható 5-tel'], ['68', 'nem osztható 5-tel'], ['95', 'osztható 5-tel'], ['81', 'nem osztható 5-tel']], '5-tel az osztható, ami 0-ra vagy 5-re végződik.'),
  sg(TV, 5, ['osztható 10-zel', 'nem osztható 10-zel'], [['40', 'osztható 10-zel'], ['45', 'nem osztható 10-zel'], ['300', 'osztható 10-zel'], ['307', 'nem osztható 10-zel'], ['90', 'osztható 10-zel'], ['99', 'nem osztható 10-zel']]),
  sg(TV, 6, ['osztható 2-vel', 'osztható 3-mal', 'mindkettővel'], [['14', 'osztható 2-vel'], ['9', 'osztható 3-mal'], ['12', 'mindkettővel'], ['21', 'osztható 3-mal'], ['22', 'osztható 2-vel'], ['18', 'mindkettővel']]),
  sg(TV, 7, ['100-nál kisebb', '100 és 500 között', '500-nál nagyobb'], [['67', '100-nál kisebb'], ['340', '100 és 500 között'], ['820', '500-nál nagyobb'], ['95', '100-nál kisebb'], ['275', '100 és 500 között'], ['640', '500-nál nagyobb']]),
  sg(TV, 8, ['kerek tízes', 'kerek százas', 'egyik sem'], [['70', 'kerek tízes'], ['400', 'kerek százas'], ['263', 'egyik sem'], ['150', 'kerek tízes'], ['900', 'kerek százas'], ['487', 'egyik sem']]),
  mc(TV, 9, 'Melyik szám páros?', ['37', '52', '91'], 1),
  mc(TV, 10, 'Melyik szám osztható 5-tel?', ['63', '74', '85'], 2),
  mc(TV, 11, 'Melyik szám osztható 3-mal?', ['25', '27', '29'], 1),
  mc(TV, 12, 'Melyik szám osztható 10-zel is és 5-tel is?', ['25', '60', '35'], 1),
];

// -------------------------------------------------- sorozatok, szabályszerűségek

const TS = 'matek-sorozatok';

export const sorozatokExercises: Exercise[] = [
  ni(TS, 1, 'Folytasd! 2, 4, 6, 8, ?', 10, { hint: 'Mindig 2-vel nő.' }),
  ni(TS, 2, 'Folytasd! 5, 10, 15, 20, ?', 25),
  ni(TS, 3, 'Folytasd! 3, 6, 9, 12, ?', 15),
  ni(TS, 4, 'Folytasd! 10, 20, 30, 40, ?', 50),
  ni(TS, 5, 'Folytasd! 7, 14, 21, 28, ?', 35),
  ni(TS, 6, 'Folytasd! 100, 200, 300, 400, ?', 500),
  ni(TS, 7, 'Folytasd! 4, 8, 12, 16, ?', 20),
  ni(TS, 8, 'Folytasd! 9, 18, 27, 36, ?', 45),
  ni(TS, 9, 'Folytasd! 50, 45, 40, 35, ?', 30, { hint: 'Ez csökkenő sorozat.' }),
  ni(TS, 10, 'Folytasd! 100, 90, 80, 70, ?', 60),
  ni(TS, 11, 'Folytasd! 64, 56, 48, 40, ?', 32),
  ni(TS, 12, 'Folytasd! 1000, 900, 800, 700, ?', 600),
  ni(TS, 13, 'Folytasd! 1, 2, 4, 8, ?', 16, { hint: 'Mindig kétszerezünk.' }),
  ni(TS, 14, 'Folytasd! 2, 6, 18, ?', 54, { hint: 'Mindig háromszorozunk.' }),
  ni(TS, 15, 'Folytasd! 125, 150, 175, 200, ?', 225),
  ni(TS, 16, 'Folytasd! 310, 320, 330, 340, ?', 350),
  ni(TS, 17, 'Mi a hiányzó tag? 12, 24, ?, 48, 60', 36),
  ni(TS, 18, 'Mi a hiányzó tag? 15, ?, 45, 60', 30),
  ni(TS, 19, 'Mi a hiányzó tag? 200, 250, ?, 350', 300),
  ni(TS, 20, 'Mi a hiányzó tag? 81, 72, ?, 54', 63),
  mc(TS, 21, 'Mi a szabály? 6, 12, 18, 24', ['6-tal nő', '2-vel szorzódik', '6-tal csökken'], 0),
  mc(TS, 22, 'Mi a szabály? 96, 48, 24, 12', ['felére csökken', '48-cal csökken', 'kétszereződik'], 0),
  mc(TS, 23, 'Mi a szabály? 7, 10, 13, 16', ['3-mal nő', '7-tel nő', 'kétszereződik'], 0),
  ni(TS, 24, 'Gép: beteszel 5-öt, kijön 15. Beteszel 8-at, kijön 24. Mi jön ki, ha 7-et teszel be?', 21, { hint: 'A gép megszorozza a számot.' }),
  ni(TS, 25, 'Gép: beteszel 10-et, kijön 7. Beteszel 25-öt, kijön 22. Mi jön ki, ha 40-et teszel be?', 37, { hint: 'A gép kivon valamennyit.' }),
];

// ------------------------------------------------------- adatok, valószínűség

const TD = 'matek-adatok-esely';

export const adatokEselyExercises: Exercise[] = [
  ni(TD, 1, 'Az osztály kedvenc gyümölcse: alma 8, banán 5, szőlő 7 fő. Hányan szavaztak összesen?', 20, { unit: 'fő' }),
  ni(TD, 2, 'Alma 8, banán 5, szőlő 7. Hánnyal kapott többet az alma a banánnál?', 3),
  mc(TD, 3, 'Alma 8, banán 5, szőlő 7. Melyik a legnépszerűbb?', ['alma', 'banán', 'szőlő'], 0),
  ni(TD, 4, 'Hétfőn 12, kedden 15, szerdán 9 könyvet kölcsönöztek. Mennyi összesen?', 36, { unit: 'db' }),
  ni(TD, 5, 'Hétfőn 12, kedden 15, szerdán 9 könyv. Mennyi a legtöbb és a legkevesebb különbsége?', 6),
  mc(TD, 6, 'Mit mutat meg egy táblázat vagy diagram?', ['az adatokat áttekinthetően', 'csak a legnagyobb számot', 'a számolás menetét'], 0),

  mc(TD, 7, 'Egy dobókockával dobsz. Biztos, hogy 7-et dobsz?', ['Lehetetlen', 'Biztos', 'Lehetséges'], 0, 'A kockán csak 1-től 6-ig vannak számok.'),
  mc(TD, 8, 'Egy dobókockával dobsz. Biztos, hogy 6-nál kisebbet vagy egyenlőt dobsz?', ['Biztos', 'Lehetetlen', 'Néha'], 0),
  mc(TD, 9, 'Egy dobókockával dobsz. Milyen eséllyel dobsz párosat?', ['ugyanannyi, mint páratlant', 'nagyobb', 'kisebb'], 0, 'Három páros és három páratlan szám van.'),
  mc(TD, 10, 'Egy zsákban 5 piros és 1 kék golyó van. Melyiket húzod nagyobb eséllyel?', ['piros', 'kék', 'egyforma'], 0),
  mc(TD, 11, 'Egy zsákban 3 piros és 3 kék golyó van. Melyiket húzod nagyobb eséllyel?', ['piros', 'kék', 'egyforma eséllyel'], 2),
  mc(TD, 12, 'Egy zsákban csak piros golyók vannak. Mi igaz?', ['biztos, hogy pirosat húzol', 'lehetetlen pirosat húzni', 'néha kéket húzol'], 0),
  mc(TD, 13, 'Holnap felkel a Nap. Ez…', ['biztos', 'lehetetlen', 'lehetséges, de nem biztos'], 0),
  mc(TD, 14, 'Holnap esni fog az eső. Ez…', ['biztos', 'lehetetlen', 'lehetséges, de nem biztos'], 2),
];
