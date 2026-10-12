import { nip } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'matek-szoveges-feladatok';

/**
 * Szöveges feladatok – a tankönyv végig szórja őket (20., 36., 49., 91.,
 * 102., 113., 164. oldal), plusz a "Matematika a mindennapokban" fejezet
 * (191–193. oldal: vásárlás, metró, komp, menetrend).
 *
 * MIND `paper: true`. A gyerek füzetben számol, és csak az eredményt írja be.
 * Nincs időnyomás, a maskot vár. A megoldási utat az app nem látja és nem is
 * próbálja értékelni — az ellenőrzés és a visszajelzés a lényeg.
 *
 * Minden eredmény 1000-en belül van, a tankönyv számkörének megfelelően.
 */
export const szovegesFeladatokExercises: Exercise[] = [
  nip(T, 1, 'Kira 3 csomag matricát vett. Minden csomagban 8 matrica van. Hány matricája lett?', 24, { unit: 'db' }),
  nip(T, 2, 'Egy csomag ceruza 125 Ft. Mennyit fizetsz 4 csomagért?', 500, { unit: 'Ft' }),
  nip(T, 3, 'A boltban 640 Ft-ért vásároltál, és 1000 Ft-ot adtál. Mennyi a visszajáró?', 360, { unit: 'Ft' }),
  nip(T, 4, '7 dobozban 6-6 tojás van. Hány tojás van összesen?', 42, { unit: 'db' }),
  nip(T, 5, '56 gyereket 8 fős csoportokba osztunk. Hány csoport lesz?', 7, { unit: 'csoport' }),
  nip(T, 6, 'Az osztályban 24 gyerek van, közülük 11 fiú. Hány lány van?', 13, { unit: 'fő' }),
  nip(T, 7, 'Az iskolában 3 harmadik osztály van, mindegyikben 22 gyerek. Hányan vannak összesen?', 66, { unit: 'fő' }),
  nip(T, 8, 'Egy könyv 248 oldalas. Kira elolvasott 135 oldalt. Hány oldal van még hátra?', 113, { unit: 'oldal' }),
  nip(T, 9, '3 barát egyenlően osztozik 27 szem cukron. Hány szem jut egynek?', 9, { unit: 'db' }),
  nip(T, 10, 'Egy zsák krumpli 25 kg. Hány kiló 4 zsák?', 100, { unit: 'kg' }),

  nip(T, 11, 'A nagymama 150 befőttet tett el, és egyenlően szétosztotta 10 polcon. Hány befőtt került egy polcra?', 15, { unit: 'db' }),
  nip(T, 12, 'Egy kerékpártúra első napján 28 km-t, a másodikon 35 km-t tekertek. Hány kilométer volt összesen?', 63, { unit: 'km' }),
  nip(T, 13, '500 Ft-od van. Veszel 3 fagyit, egy 120 Ft. Mennyi pénzed marad?', 140, { unit: 'Ft' }),
  nip(T, 14, 'A buszon 38 utas ült. A megállóban 12-en leszálltak és 9-en felszálltak. Hányan vannak most a buszon?', 35, { unit: 'fő' }),
  nip(T, 15, '84 almát 4 kosárba osztunk egyenlően. Hány alma kerül egy kosárba?', 21, { unit: 'db' }),
  nip(T, 16, '1 kg alma 390 Ft. Mennyibe kerül 2 kg?', 780, { unit: 'Ft' }),
  nip(T, 17, 'Egy bálában 9 szalmacsomó van. Hány csomó van 7 bálában?', 63, { unit: 'db' }),
  nip(T, 18, 'Kira 45 matricát gyűjtött, a testvére 28-at. Hánnyal van Kirának több?', 17, { unit: 'db' }),
  nip(T, 19, 'Egy osztálykiránduláson naponta 280 Ft az ebéd. Mennyi 3 napra?', 840, { unit: 'Ft' }),
  nip(T, 20, 'Egy dobozban 100 gemkapocs volt, 37-et elhasználtunk. Mennyi maradt?', 63, { unit: 'db' }),

  nip(T, 21, 'Egy téglalap oldalai 12 cm és 8 cm. Mekkora a kerülete?', 40, { unit: 'cm', hint: 'Mind a négy oldalt add össze.' }),
  nip(T, 22, 'Egy négyzet oldala 9 cm. Mekkora a kerülete?', 36, { unit: 'cm' }),
  nip(T, 23, 'Egy téglalap kerülete 30 cm, az egyik oldala 10 cm. Mekkora a másik oldala?', 5, { unit: 'cm', hint: 'Két hosszabb oldal már 20 cm — mennyi marad a másik kettőre?' }),

  nip(T, 24, 'A metró 4 percenként indul. Hány metró indul egy óra alatt?', 15, { unit: 'db' }),
  nip(T, 25, 'A komp 45 percenként indul. Reggel 7 órakor ment az első. Hány perc múlva indul a harmadik?', 90, { unit: 'perc' }),
  nip(T, 26, 'Kira 6 óra 30 perckor kel, és 7 óra 15 perckor indul az iskolába. Hány perce van reggelire és készülődésre?', 45, { unit: 'perc' }),
  nip(T, 27, 'Egy film 95 perc hosszú. Hány perccel tart tovább egy óránál?', 35, { unit: 'perc' }),
  nip(T, 28, 'Hány perc két és fél óra?', 150, { unit: 'perc' }),

  nip(T, 29, 'Egy 2 literes üveg hány deciliter?', 20, { unit: 'dl' }),
  nip(T, 30, 'Fél kilogramm hány dekagramm?', 50, { unit: 'dkg' }),
];
