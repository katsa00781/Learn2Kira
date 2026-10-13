import { mc, mp } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-kozmondasok';

/**
 * Közmondások és szólások – 20 feladat. Szövegalkotás 3. (OH-MNY03MB), 23. oldal témája.
 * A tankönyv oldala nem áll rendelkezésre: a közmondások és szólások közismertek, nem oldalról másoltak.
 * 1–8: közmondások eleje és vége (match-pairs)
 * 9–12: szólások és jelentésük (match-pairs)
 * 13–20: jelentés felismerése (multiple-choice)
 */
export const kozmondasokExercises: Exercise[] = [
  mp(T, 1, [['Aki korán kel,', 'aranyat lel.'], ['Lassan járj,', 'tovább érsz.'], ['Ki mint vet,', 'úgy arat.'], ['Jobb későn,', 'mint soha.']], 'Párosítsd a közmondások elejét és végét!'),
  mp(T, 2, [['Aki másnak vermet ás,', 'maga esik bele.'], ['Kicsi a bors,', 'de erős.'], ['Gyakorlat', 'teszi a mestert.'], ['Aki mer,', 'az nyer.']]),
  mp(T, 3, [['Ahány ház,', 'annyi szokás.'], ['Sok kicsi', 'sokra megy.'], ['Egy fecske', 'nem csinál nyarat.'], ['Kéz kezet', 'mos.']]),
  mp(T, 4, [['Okos enged,', 'szamár szenved.'], ['Éhes disznó', 'makkal álmodik.'], ['Jó munkához', 'idő kell.'], ['Szegény ember', 'vízzel főz.']]),
  mp(T, 5, [['A beszéd ezüst,', 'a hallgatás arany.'], ['Nem mind arany,', 'ami fénylik.'], ['Madarat tolláról,', 'embert barátjáról.'], ['A jó pap', 'holtig tanul.']]),
  mp(T, 6, [['Addig jár a korsó a kútra,', 'amíg el nem törik.'], ['Más kárán tanul', 'az okos.'], ['Nincsen rózsa', 'tövis nélkül.'], ['Szegény embert', 'az ág is húzza.']]),
  mp(T, 7, [['Amilyen a mosdó,', 'olyan a törülköző.'], ['Ne mondj hopp,', 'míg át nem ugrottad.'], ['Ajándék lónak', 'ne nézd a fogát.'], ['Nem esik messze az alma', 'a fájától.']]),
  mp(T, 8, [['Aki kérdez,', 'nem tévedez.'], ['Rend a lelke', 'mindennek.'], ['Mindenki a maga', 'szerencséjének kovácsa.'], ['Nem látja a fától', 'az erdőt.']]),

  mp(T, 9, [['Nem esett a feje lágyára', 'okos'], ['Ég a keze alatt a munka', 'gyorsan dolgozik'], ['Kutyába se veszi', 'nem törődik vele'], ['Fűnek-fának', 'mindenkinek']], 'Párosítsd a szólásokat a jelentésükkel!'),
  mp(T, 10, [['Fején találja a szöget', 'pontosan eltalálja'], ['Hétpecsétes titok', 'nagyon nagy titok'], ['Kő esett le a szívéről', 'megkönnyebbült'], ['Lógatja az orrát', 'szomorú']]),
  mp(T, 11, [['Hegyezi a fülét', 'figyel'], ['Falra hányt borsó', 'hiábavaló beszéd'], ['Dugába dől', 'nem sikerül'], ['Tele van a hócipője', 'elege van']]),
  mp(T, 12, [['Szemet szúr', 'feltűnik'], ['Lúdbőrözik a háta', 'borzong'], ['Bedobja a törülközőt', 'feladja'], ['Úgy áll, mint szamár a hegyen', 'tanácstalan']]),

  mc(T, 13, 'Mit jelent: „Aki korán kel, aranyat lel”?', ['A korán kelőnek jobban sikerül a nap', 'Reggel kincset lehet találni', 'Az arany reggel van'], 0),
  mc(T, 14, 'Melyik közmondás mondja azt, hogy a gyakorlás segít?', ['Kicsi a bors, de erős.', 'Gyakorlat teszi a mestert.', 'Jobb későn, mint soha.'], 1),
  mc(T, 15, 'Mit jelent: „Jobb későn, mint soha”?', ['Elkésni nem baj, mert van idő', 'Jobb elkésni, mint el sem jönni', 'Későn ébredni jó'], 1),
  mc(T, 16, 'Mit jelent: „Nem esett a feje lágyára”?', ['Beütötte a fejét', 'Fáj a feje', 'Okos'], 2),
  mc(T, 17, 'Mit jelent: „Kő esett le a szívéről”?', ['Megkönnyebbült', 'Megijedt', 'Elesett'], 0),
  mc(T, 18, 'Melyik közmondás mondja azt, hogy a sok kis dolog összeadódik?', ['Okos enged, szamár szenved.', 'Aki mer, az nyer.', 'Sok kicsi sokra megy.'], 2),
  mc(T, 19, 'Mit jelent: „Lúdbőrözik a háta”?', ['Libát nevel', 'Borzong', 'Fáj a háta'], 1),
  mc(T, 20, 'Melyik szólás jelenti azt, hogy valaki nagyon szomorú?', ['Hegyezi a fülét', 'Fején találja a szöget', 'Lógatja az orrát'], 2),
];
