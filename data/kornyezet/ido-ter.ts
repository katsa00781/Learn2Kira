import { mc, sg, mp, oi } from '../builders';
import type { Exercise } from '@/types/exercise';

/**
 * III. Tájékozódás az időben (19–24. lecke, 50–63. oldal)
 * IV. Tájékozódás a térben (25–29. lecke, 64–77. oldal)
 * Környezetismeret 3. (OH-KOR03TA)
 *
 * A terepgyakorlat (29. lecke) kiegészítő tananyag és kint végzendő — nincs
 * benne a bankban. Az alaprajz és a térkép rajzolása szintén kimarad: amit
 * megtartottunk, az a jelek és a színek LEOLVASÁSA, amire van egy helyes válasz.
 */

// --------------------------------------------- 19–20. A Föld mozgásai (50, 52)

const T1 = 'kornyezet-fold-mozgasai';

export const foldMozgasaiExercises: Exercise[] = [
  mc(T1, 1, 'Mennyi ideig tart a Föld egy teljes forgása?', ['24 óra', '12 óra', '365 nap'], 0),
  mc(T1, 2, 'Mit okoz a Föld forgása?', ['a nappalok és éjszakák váltakozását', 'az évszakokat', 'az esőt'], 0),
  mc(T1, 3, 'Mennyi ideig tart a Föld egy keringése a Nap körül?', ['1 év', '1 hónap', '1 nap'], 0),
  mc(T1, 4, 'Mit okoz a Föld keringése?', ['az évszakok váltakozását', 'a nappalt és éjszakát', 'a szelet'], 0),
  mc(T1, 5, 'Merre kel a Nap?', ['keleten', 'nyugaton', 'északon'], 0),
  mc(T1, 6, 'Merre nyugszik a Nap?', ['nyugaton', 'keleten', 'délen'], 0),
  mc(T1, 7, 'Valójában a Nap kerüli meg a Földet?', ['Nem, a Föld forog', 'Igen'], 0),
  mc(T1, 8, 'Mi van a Föld túloldalán, amikor nálunk nappal van?', ['éjszaka', 'nappal', 'ugyanaz'], 0),
  mc(T1, 9, 'Mikor van a leghosszabb nappal nálunk?', ['nyáron', 'télen', 'ősszel'], 0),
  mc(T1, 10, 'Mikor van a legrövidebb nappal nálunk?', ['télen', 'nyáron', 'tavasszal'], 0),
  mc(T1, 11, 'Miért melegebb nyáron?', ['mert a napsugarak meredekebben érkeznek', 'mert közelebb van a Nap', 'mert nagyobb a Nap'], 0),
  mc(T1, 12, 'Hány évszak van?', ['4', '2', '6'], 0),
  oi(T1, 13, ['tavasz', 'nyár', 'ősz', 'tél'], ['ősz', 'tavasz', 'tél', 'nyár'], 'Milyen sorrendben követik egymást?'),
  mc(T1, 14, 'Hány hónapból áll egy évszak?', ['3', '2', '4'], 0),
];

// ------------------------------------------- 21. Ismétlődő jelenségek (54)

const T2 = 'kornyezet-ismetlodo-jelensegek';

export const ismetlodoExercises: Exercise[] = [
  sg(T2, 1, ['naponta ismétlődik', 'évente ismétlődik'], [['napkelte', 'naponta ismétlődik'], ['hóolvadás', 'évente ismétlődik'], ['napnyugta', 'naponta ismétlődik'], ['lombhullás', 'évente ismétlődik'], ['dél', 'naponta ismétlődik'], ['madárköltözés', 'évente ismétlődik']]),
  mp(T2, 2, [['tavasz', 'rügyfakadás'], ['nyár', 'aratás'], ['ősz', 'lombhullás'], ['tél', 'hó és fagy']], 'Párosítsd az évszakot a jellemző jelenséggel!'),
  mc(T2, 3, 'Melyik évszakban virágzik a legtöbb gyümölcsfa?', ['tavasszal', 'nyáron', 'télen'], 0),
  mc(T2, 4, 'Melyik évszakban érik a szőlő?', ['ősszel', 'tavasszal', 'télen'], 0),
  mc(T2, 5, 'Mikor költöznek el a gólyák?', ['ősszel', 'tavasszal', 'télen'], 0),
  mc(T2, 6, 'Mikor térnek vissza a fecskék?', ['tavasszal', 'ősszel', 'nyáron'], 0),
  sg(T2, 7, ['tavasz', 'ősz'], [['rügyfakadás', 'tavasz'], ['szüret', 'ősz'], ['fecskék érkezése', 'tavasz'], ['lombhullás', 'ősz'], ['virágzás', 'tavasz'], ['gólyák indulása', 'ősz']]),
  mc(T2, 8, 'Hány napból áll egy hét?', ['7', '5', '10'], 0),
  mc(T2, 9, 'Mi ismétlődik hetente?', ['a hét napjai', 'az évszakok', 'a nappal és éjszaka'], 0),
  mc(T2, 10, 'Melyik jelenség NEM ismétlődik szabályosan?', ['villámcsapás', 'napfelkelte', 'évszakváltás'], 0),
  mc(T2, 11, 'Mi a Hold változásának ismétlődő rendje?', ['holdfázisok', 'évszakok', 'napszakok'], 0),
  mc(T2, 12, 'Melyik napszakban van a legmagasabban a Nap?', ['délben', 'reggel', 'este'], 0),
];

// ------------------------------------------------ 22–24. Életszakaszok (57, 59, 62)

const T3 = 'kornyezet-eletszakaszok';

export const eletszakaszokExercises: Exercise[] = [
  oi(T3, 1, ['csecsemő', 'kisgyermek', 'kamasz', 'felnőtt', 'idős'], ['kamasz', 'csecsemő', 'idős', 'kisgyermek', 'felnőtt'], 'Az emberi élet szakaszai sorrendben.'),
  mc(T3, 2, 'Melyik életszakaszban növekszünk a leggyorsabban?', ['csecsemőkorban', 'felnőttkorban', 'időskorban'], 0),
  mc(T3, 3, 'Melyik életszakaszban vagy most?', ['kisiskolás', 'csecsemő', 'felnőtt'], 0),
  mc(T3, 4, 'Mi jellemző az időskorra?', ['lassul a szervezet működése', 'gyors növekedés', 'fogváltás'], 0),

  oi(T3, 5, ['tojás', 'csibe', 'fiatal tyúk', 'kifejlett tyúk'], ['csibe', 'kifejlett tyúk', 'tojás', 'fiatal tyúk'], 'A tyúk fejlődésének sorrendje.'),
  mc(T3, 6, 'Mi az átalakulással fejlődő állat?', ['a béka és a lepke', 'a kutya és a macska', 'a ló és a tehén'], 0, 'A fiatal egyed egészen másként néz ki, mint a kifejlett.'),
  mc(T3, 7, 'Hasonlít-e a kiskutya a felnőtt kutyára?', ['Igen, csak kisebb', 'Nem, teljesen más'], 0),
  mc(T3, 8, 'Hasonlít-e az ebihal a kifejlett békára?', ['Nem, teljesen más', 'Igen, csak kisebb'], 0),
  mp(T3, 9, [['tyúk', 'csibe'], ['kutya', 'kölyök'], ['macska', 'kiscica'], ['ló', 'csikó']], 'Párosítsd az állatot a kicsinyével!'),
  mp(T3, 10, [['tehén', 'borjú'], ['sertés', 'malac'], ['juh', 'bárány'], ['kecske', 'gida']]),

  oi(T3, 11, ['mag', 'csíranövény', 'fiatal növény', 'virágzó növény', 'termés'], ['termés', 'mag', 'virágzó növény', 'csíranövény', 'fiatal növény'], 'A növény fejlődésének sorrendje.'),
  mc(T3, 12, 'Mi kell a mag csírázásához?', ['víz, meleg és levegő', 'csak fény', 'csak föld'], 0),
  mc(T3, 13, 'Mi fejlődik ki először a magból?', ['a gyökér', 'a virág', 'a termés'], 0),
  mc(T3, 14, 'Mi lesz a beporzott virágból?', ['termés és benne mag', 'új levél', 'gyökér'], 0),
  mc(T3, 15, 'Mit nevezünk egynyári növénynek?', ['amelyik egy év alatt kifejlődik és elpusztul', 'amelyik egy évig virágzik', 'amelyik nyáron nő'], 0),
];

// ---------------------------------- 25. A földfelszín vizei, formái (64)

const T4 = 'kornyezet-foldfelszin';

export const foldfelszinExercises: Exercise[] = [
  sg(T4, 1, ['felszíni forma', 'víz'], [['hegy', 'felszíni forma'], ['folyó', 'víz'], ['domb', 'felszíni forma'], ['tó', 'víz'], ['síkság', 'felszíni forma'], ['patak', 'víz']]),
  oi(T4, 2, ['síkság', 'dombság', 'hegység'], ['hegység', 'síkság', 'dombság'], 'Rendezd a legalacsonyabbtól a legmagasabbig!'),
  mc(T4, 3, 'Mi a síkság?', ['lapos, sík terület', 'magas, meredek terület', 'vízzel borított terület'], 0),
  mc(T4, 4, 'Melyik Magyarország legnagyobb síksága?', ['az Alföld', 'a Mátra', 'a Bakony'], 0),
  mc(T4, 5, 'Mi a hegy legmagasabb pontja?', ['csúcs', 'láb', 'oldal'], 0),
  oi(T4, 6, ['forrás', 'patak', 'folyó', 'tenger'], ['tenger', 'forrás', 'folyó', 'patak'], 'Honnan hová jut a víz?'),
  mc(T4, 7, 'Honnan ered a patak?', ['forrásból', 'tóból', 'tengerből'], 0),
  mc(T4, 8, 'Mi a különbség a tó és a folyó között?', ['a tó állóvíz, a folyó folyóvíz', 'a tó nagyobb', 'a tó sósabb'], 0),
  mc(T4, 9, 'Melyik Magyarország legnagyobb tava?', ['Balaton', 'Velencei-tó', 'Fertő tó'], 0),
  mc(T4, 10, 'Melyik folyónak van a leghosszabb magyarországi szakasza?', ['a Tisza', 'a Duna', 'a Dráva'], 0, 'A Duna összességében hosszabb, de belőle rövidebb szakasz esik az országra.'),
  mc(T4, 13, 'Melyik folyó szeli ketté Budapestet?', ['a Duna', 'a Tisza', 'a Rába'], 0),
  mc(T4, 14, 'Melyik folyó mellett fekszik Paks?', ['a Duna', 'a Tisza', 'a Dráva'], 0),
  sg(T4, 11, ['állóvíz', 'folyóvíz'], [['tó', 'állóvíz'], ['folyó', 'folyóvíz'], ['tenger', 'állóvíz'], ['patak', 'folyóvíz'], ['tócsa', 'állóvíz'], ['ér', 'folyóvíz']]),
  mc(T4, 12, 'Mit nevezünk a folyó két oldalának?', ['partnak', 'medernek', 'csúcsnak'], 0),
];

// ----------------------------------- 26–28. Tájékozódás, térkép (67, 69, 72)

const T5 = 'kornyezet-tajekozodas';

export const tajekozodasExercises: Exercise[] = [
  mc(T5, 1, 'Hány fő világtáj van?', ['4', '2', '8'], 0),
  mc(T5, 2, 'Mi a négy fő világtáj?', ['észak, dél, kelet, nyugat', 'fel, le, jobbra, balra', 'nyár, tél, tavasz, ősz'], 0),
  mc(T5, 3, 'Merre van észak a térképen?', ['felül', 'alul', 'jobbra'], 0),
  mc(T5, 4, 'Merre van dél a térképen?', ['alul', 'felül', 'balra'], 0),
  mc(T5, 5, 'Merre van kelet a térképen?', ['jobbra', 'balra', 'felül'], 0),
  mc(T5, 6, 'Melyik eszközzel határozod meg a világtájakat?', ['iránytű', 'hőmérő', 'mérleg'], 0),
  mc(T5, 7, 'Merre mutat az iránytű színes vége?', ['északra', 'délre', 'keletre'], 0),
  mc(T5, 8, 'Hol van a Nap délben?', ['délen', 'északon', 'keleten'], 0),
  mc(T5, 9, 'Merre van az árnyékod délben?', ['északra', 'délre', 'keletre'], 0),

  mc(T5, 10, 'Mi az alaprajz?', ['felülnézeti rajz', 'oldalnézeti rajz', 'fénykép'], 0),
  mc(T5, 11, 'Honnan nézve készül az alaprajz?', ['felülről', 'oldalról', 'szemből'], 0),
  mc(T5, 12, 'Mi a térkép?', ['a földfelszín kicsinyített rajza felülnézetből', 'fénykép a tájról', 'festmény'], 0),
  mc(T5, 13, 'Mit mutat meg a jelmagyarázat?', ['mit jelentenek a térkép jelei', 'milyen messze van valami', 'mikor készült a térkép'], 0),
  mp(T5, 14, [['kék', 'víz'], ['zöld', 'alföld, síkság'], ['barna', 'hegység'], ['sárga', 'dombság']], 'Mit jelentenek a színek a domborzati térképen?'),
  mc(T5, 15, 'Milyen színnel jelölik a vizeket a térképen?', ['kékkel', 'zölddel', 'barnával'], 0),
  mc(T5, 16, 'Milyen színnel jelölik a hegységeket?', ['barnával', 'kékkel', 'zölddel'], 0),
  mc(T5, 17, 'Milyen színnel jelölik az alföldeket?', ['zölddel', 'barnával', 'sárgával'], 0),
  mc(T5, 18, 'Mit mutat a térkép méretaránya?', ['hányszorosára kicsinyítették a valóságot', 'milyen nagy a papír', 'hány szín van rajta'], 0),
  mc(T5, 19, 'Mit jelöl a térképen a pontozott vonal általában?', ['határt vagy ösvényt', 'folyót', 'hegycsúcsot'], 0),
  mc(T5, 20, 'Mit kell vinned, ha erdei túrára mész?', ['térképet és iránytűt', 'csak vizet', 'semmit'], 0),
];
