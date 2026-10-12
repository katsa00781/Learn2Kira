import { mc, sg, mp, oi } from '../builders';
import type { Exercise } from '@/types/exercise';

/**
 * I. Az élettelen környezet kölcsönhatásai – Környezetismeret 3. (OH-KOR03TA),
 * 1–10. lecke, 6–29. oldal.
 *
 * A tankönyv kísérletekre épül ("Fellobban a láng?"). A kísérletet magát nem
 * lehet appban elvégezni — ami bekerül, az a kísérlet TANULSÁGA: mitől ég
 * valami, mi történik a vízzel melegítéskor. A kísérlet leírása a füzetbe
 * való, nem ide.
 */

// -------------------------------------------- 1. A tárgyak tulajdonságai (6)

const T1 = 'kornyezet-targyak-tulajdonsagai';

export const targyakExercises: Exercise[] = [
  mc(T1, 1, 'Mi az anyag?', ['amiből a tárgy készült', 'a tárgy neve', 'a tárgy színe'], 0),
  mc(T1, 2, 'Miből van a pohár, ha átlátszó és könnyen törik?', ['üveg', 'fa', 'fém'], 0),
  mc(T1, 3, 'Melyik anyag vezeti jól a hőt?', ['fém', 'fa', 'műanyag'], 0, 'Ezért lesz forró a fémkanál a levesben.'),
  mc(T1, 4, 'Miért fából van a fakanál nyele?', ['mert a fa nem vezeti jól a hőt', 'mert a fa olcsó', 'mert a fa nehéz'], 0),
  mc(T1, 5, 'Melyik tulajdonság NEM az anyagé?', ['keménység', 'rugalmasság', 'a tárgy neve'], 2),
  sg(T1, 6, ['átlátszó', 'nem átlátszó'], [['üveg', 'átlátszó'], ['fa', 'nem átlátszó'], ['víz', 'átlátszó'], ['fém', 'nem átlátszó'], ['celofán', 'átlátszó'], ['kő', 'nem átlátszó']]),
  sg(T1, 7, ['rugalmas', 'merev'], [['gumi', 'rugalmas'], ['üveg', 'merev'], ['szivacs', 'rugalmas'], ['kő', 'merev'], ['gumiszalag', 'rugalmas'], ['tégla', 'merev']]),
  sg(T1, 8, ['kemény', 'puha'], [['kő', 'kemény'], ['vatta', 'puha'], ['vas', 'kemény'], ['szivacs', 'puha'], ['üveg', 'kemény'], ['gyurma', 'puha']]),
  sg(T1, 9, ['természetes anyag', 'mesterséges anyag'], [['fa', 'természetes anyag'], ['műanyag', 'mesterséges anyag'], ['gyapjú', 'természetes anyag'], ['üveg', 'mesterséges anyag'], ['kő', 'természetes anyag'], ['papír', 'mesterséges anyag']]),
  mc(T1, 10, 'Melyik anyag vonzza a mágnes?', ['vas', 'fa', 'üveg'], 0),
  mc(T1, 11, 'Melyik tárgyat vonzza a mágnes?', ['vasszög', 'ceruza', 'pohár'], 0),
  mc(T1, 12, 'Mi történik a gyurmával, ha megnyomod?', ['megváltozik az alakja', 'visszaugrik', 'eltörik'], 0),
];

// --------------------------------------------- 2. A tárgyak érzékelése (8)

const T2 = 'kornyezet-erzekszervek';

export const erzekszervekExercises: Exercise[] = [
  mp(T2, 1, [['szem', 'látás'], ['fül', 'hallás'], ['orr', 'szaglás'], ['nyelv', 'ízlelés'], ['bőr', 'tapintás']], 'Párosítsd az érzékszervet az érzékeléssel!'),
  mc(T2, 2, 'Melyik érzékszerveddel veszed észre a virág illatát?', ['orr', 'szem', 'fül'], 0),
  mc(T2, 3, 'Melyik érzékszerveddel érzed, hogy forró a tea?', ['bőr', 'nyelv', 'orr'], 0),
  mc(T2, 4, 'Melyik érzékszerveddel érzed, hogy édes a csoki?', ['nyelv', 'orr', 'bőr'], 0),
  mc(T2, 5, 'Hány fő érzékszervünk van?', ['3', '5', '7'], 1),
  sg(T2, 6, ['látás', 'hallás', 'tapintás'], [['piros', 'látás'], ['hangos', 'hallás'], ['érdes', 'tapintás'], ['kerek', 'látás'], ['csendes', 'hallás'], ['sima', 'tapintás']]),
  sg(T2, 7, ['ízlelés', 'szaglás'], [['édes', 'ízlelés'], ['illatos', 'szaglás'], ['savanyú', 'ízlelés'], ['büdös', 'szaglás'], ['keserű', 'ízlelés'], ['füstszagú', 'szaglás']]),
  mc(T2, 8, 'Miért kell vigyázni a szemünkre?', ['mert a legtöbb információt vele szerezzük', 'mert a legkisebb érzékszerv', 'mert nem fáj soha'], 0),
  mc(T2, 9, 'Mi véd a hangos zajtól?', ['füldugó', 'szemüveg', 'kesztyű'], 0),
  mc(T2, 10, 'Melyik ízt NEM érezzük a nyelvünkkel?', ['édes', 'sós', 'hideg'], 2, 'A hideget a bőrünkkel és a nyelvünk tapintásával érezzük, nem ízként.'),
  mc(T2, 11, 'Ha becsukod a szemed, melyik érzékszerveddel ismered fel a tárgyat?', ['tapintás', 'látás', 'hallás'], 0),
  mc(T2, 12, 'Mi történik, ha megfázol és eldugul az orrod?', ['kevésbé érzed az ízeket', 'jobban hallasz', 'jobban látsz'], 0, 'Az ízlelés és a szaglás összefügg.'),
];

// --------------------------------------------------------- 3. A mozgás (11)

const T3 = 'kornyezet-mozgas';

export const mozgasExercises: Exercise[] = [
  mc(T3, 1, 'Mit jelent, hogy egy test mozog?', ['változtatja a helyét', 'nagyobb lesz', 'melegszik'], 0),
  mc(T3, 2, 'Melyik gyorsabb? gyaloglás vagy futás', ['gyaloglás', 'futás'], 1),
  mc(T3, 3, 'Melyik gyorsabb? kerékpár vagy autó', ['kerékpár', 'autó'], 1),
  oi(T3, 4, ['csiga', 'gyalogos', 'kerékpár', 'autó', 'repülő'], ['autó', 'csiga', 'repülő', 'gyalogos', 'kerékpár'], 'Rendezd a leglassabbtól a leggyorsabbig!'),
  mc(T3, 5, 'Mitől indul el egy álló tárgy?', ['erő hat rá', 'magától elindul', 'ha nézed'], 0),
  mc(T3, 6, 'Mi lassítja le a guruló labdát?', ['a súrlódás', 'a levegő színe', 'a labda súlya'], 0),
  mc(T3, 7, 'Hol gurul tovább a labda?', ['sima padlón', 'szőnyegen', 'füvön'], 0),
  sg(T3, 8, ['egyenes vonalú mozgás', 'körmozgás'], [['guruló labda egyenesen', 'egyenes vonalú mozgás'], ['körhinta', 'körmozgás'], ['zuhanó alma', 'egyenes vonalú mozgás'], ['óramutató', 'körmozgás'], ['lift', 'egyenes vonalú mozgás'], ['kerék', 'körmozgás']]),
  mc(T3, 9, 'Merre esik a feldobott labda?', ['lefelé', 'felfelé', 'oldalra'], 0, 'A Föld vonzza magához.'),
  mc(T3, 10, 'Mit nevezünk a Föld vonzásának?', ['gravitáció', 'súrlódás', 'mágnesesség'], 0),
  mc(T3, 11, 'Miért kell biztonsági öv az autóban?', ['mert hirtelen fékezésnél előrelendülünk', 'mert szép', 'mert melegít'], 0),
  mc(T3, 12, 'Mivel mérjük, mennyi idő alatt teszel meg egy távot?', ['órával', 'mérleggel', 'vonalzóval'], 0),
];

// ----------------------------------------- 4–5. Fellobban a láng? Tűz van! (14, 16)

const T4 = 'kornyezet-tuz';

export const tuzExercises: Exercise[] = [
  mc(T4, 1, 'Mi kell az égéshez?', ['éghető anyag, levegő és hő', 'csak gyufa', 'csak éghető anyag'], 0),
  mc(T4, 2, 'Mi történik, ha leborítod a gyertyát egy pohárral?', ['elalszik, mert elfogy a levegő', 'nagyobb lesz a láng', 'nem történik semmi'], 0),
  mc(T4, 3, 'A levegő melyik része kell az égéshez?', ['oxigén', 'nitrogén', 'szén-dioxid'], 0),
  sg(T4, 4, ['éghető', 'nem éghető'], [['papír', 'éghető'], ['kő', 'nem éghető'], ['fa', 'éghető'], ['üveg', 'nem éghető'], ['textil', 'éghető'], ['vas', 'nem éghető']]),
  mc(T4, 5, 'Mi keletkezik égéskor?', ['hő és fény', 'csak hideg', 'csak hang'], 0),
  mc(T4, 6, 'Mi marad a fa elégése után?', ['hamu', 'víz', 'semmi'], 0),

  mc(T4, 7, 'Mi a tűzoltóság hívószáma Magyarországon?', ['105', '104', '107'], 0, 'A 112 az egységes segélyhívó, azon is eléred.'),
  mc(T4, 8, 'Melyik szám az egységes európai segélyhívó?', ['112', '911', '100'], 0),
  mc(T4, 9, 'Mit teszel, ha tüzet látsz?', ['szólok egy felnőttnek és hívom a segítséget', 'megpróbálom egyedül eloltani', 'elbújok'], 0),
  mc(T4, 10, 'Mivel NEM szabad égő olajat oltani?', ['vízzel', 'fedővel', 'tűzoltó takaróval'], 0, 'A víz a forró olajban szétfröccsen, és nagyobb lesz a tűz.'),
  mc(T4, 11, 'Mit teszel, ha füstöl a szoba?', ['lehajolva megyek ki', 'felállok és futok', 'kinyitom az összes ablakot'], 0, 'A füst felfelé száll, lent tisztább a levegő.'),
  mc(T4, 12, 'Mit mondasz be elsőként, ha segélyhívót tárcsázol?', ['hol van a baj', 'hány éves vagyok', 'mi a kedvenc színem'], 0),
  mc(T4, 13, 'Szabad-e gyufával játszani?', ['Nem', 'Igen, ha óvatos vagy'], 0),
  mc(T4, 14, 'Mit teszel, ha meggyullad a ruhád?', ['leguggolok és gurulok', 'futok', 'legyezem'], 0, 'A futástól még jobban lángra kap.'),
];

// ----------------------------- 6–9. A víz és a halmazállapotok (18, 21, 23, 25)

const T5 = 'kornyezet-halmazallapotok';

export const halmazallapotokExercises: Exercise[] = [
  sg(T5, 1, ['szilárd', 'folyékony', 'légnemű'], [['jég', 'szilárd'], ['víz', 'folyékony'], ['vízgőz', 'légnemű'], ['kő', 'szilárd'], ['olaj', 'folyékony'], ['levegő', 'légnemű']]),
  sg(T5, 2, ['szilárd', 'folyékony', 'légnemű'], [['vas', 'szilárd'], ['tej', 'folyékony'], ['oxigén', 'légnemű'], ['fa', 'szilárd'], ['méz', 'folyékony'], ['füst', 'légnemű']]),
  mc(T5, 3, 'Hány fokon fagy meg a víz?', ['0 °C', '10 °C', '100 °C'], 0),
  mc(T5, 4, 'Hány fokon forr a víz?', ['50 °C', '100 °C', '0 °C'], 1),
  mc(T5, 5, 'Hogy hívjuk, amikor a jég vízzé válik?', ['olvadás', 'fagyás', 'párolgás'], 0),
  mc(T5, 6, 'Hogy hívjuk, amikor a víz jéggé válik?', ['fagyás', 'olvadás', 'forrás'], 0),
  mc(T5, 7, 'Hogy hívjuk, amikor a víz vízgőzzé válik?', ['párolgás', 'fagyás', 'olvadás'], 0),
  mc(T5, 8, 'Hogy hívjuk, amikor a vízgőz vízzé válik?', ['lecsapódás', 'párolgás', 'olvadás'], 0),
  mp(T5, 9, [['jég → víz', 'olvadás'], ['víz → jég', 'fagyás'], ['víz → vízgőz', 'párolgás'], ['vízgőz → víz', 'lecsapódás']]),
  mc(T5, 10, 'Miért párásodik be a hideg ablak télen?', ['a meleg levegő vízgőze lecsapódik rajta', 'beázik az ablak', 'kint esik az eső'], 0),
  mc(T5, 11, 'Mi történik a kiterített ruhával?', ['elpárolog belőle a víz', 'megfagy', 'megolvad'], 0),
  mc(T5, 12, 'Melyik halmazállapotnak nincs saját alakja, de van saját térfogata?', ['folyékony', 'szilárd', 'légnemű'], 0, 'A víz felveszi a pohár alakját, de a mennyisége nem változik.'),
  mc(T5, 13, 'Melyik halmazállapot tölti ki a rendelkezésre álló teret?', ['légnemű', 'szilárd', 'folyékony'], 0),
  mc(T5, 14, 'Melyik halmazállapotnak van saját alakja?', ['szilárd', 'folyékony', 'légnemű'], 0),
  mc(T5, 15, 'Mi történik a vízzel, ha megfagy?', ['kitágul', 'összehúzódik', 'nem változik'], 0, 'Ezért repedhet szét a tele vizesüveg a fagyasztóban.'),
  mc(T5, 16, 'Miért úszik a jég a víz tetején?', ['mert könnyebb a víznél', 'mert nehezebb', 'mert hideg'], 0),
  mc(T5, 17, 'Van-e tömege a levegőnek?', ['Igen', 'Nem'], 0),
  mc(T5, 18, 'Mi történik a levegővel, ha melegítjük?', ['kitágul és felfelé száll', 'összehúzódik', 'megfagy'], 0),
];

// ------------------------------------------------- 10. A víz körforgása (27)

const T6 = 'kornyezet-viz-korforgasa';

export const vizKorforgasaExercises: Exercise[] = [
  oi(T6, 1, ['párolgás', 'felhőképződés', 'csapadék', 'visszafolyás a tengerbe'], ['csapadék', 'párolgás', 'visszafolyás a tengerbe', 'felhőképződés'], 'Milyen sorrendben történnek?'),
  mc(T6, 2, 'Mi indítja el a víz körforgását?', ['a Nap melege', 'a szél', 'a hold'], 0),
  mc(T6, 3, 'Honnan párolog el a legtöbb víz?', ['tengerekből és óceánokból', 'a pocsolyákból', 'a növényekből'], 0),
  mc(T6, 4, 'Miből keletkezik a felhő?', ['a lecsapódott vízgőzből', 'füstből', 'porból'], 0),
  mc(T6, 5, 'Mi hullik a felhőből?', ['csapadék', 'vízgőz', 'levegő'], 0),
  sg(T6, 6, ['csapadék', 'nem csapadék'], [['eső', 'csapadék'], ['szél', 'nem csapadék'], ['hó', 'csapadék'], ['villám', 'nem csapadék'], ['jégeső', 'csapadék'], ['szivárvány', 'nem csapadék']]),
  mc(T6, 7, 'Milyen csapadék hullik télen, ha fagy van?', ['hó', 'eső', 'harmat'], 0),
  mc(T6, 8, 'Mi a harmat?', ['éjjel lecsapódott vízgőz', 'eső', 'olvadt hó'], 0),
  mc(T6, 9, 'Mi a köd?', ['a talaj közelében lebegő apró vízcseppek', 'füst', 'por'], 0),
  mc(T6, 10, 'Elfogy-e valaha a víz a körforgásban?', ['Nem, körbejár', 'Igen, elpárolog', 'Igen, elfolyik'], 0),
  mc(T6, 11, 'Miért fontos a víz takarékos használata?', ['mert az ivóvíz nem végtelen', 'mert drága a csap', 'mert nehéz'], 0),
  mc(T6, 12, 'Hová jut a talajba szivárgó víz?', ['a talajvízbe', 'a levegőbe', 'a felhőkbe'], 0),
];
