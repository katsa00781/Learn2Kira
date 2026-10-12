import { mc, sg, mp, oi } from '../builders';
import type { Exercise } from '@/types/exercise';

/**
 * II. Élő környezetünk – Környezetismeret 3. (OH-KOR03TA),
 * 11–18. lecke, 30–49. oldal.
 *
 * Az állatcsoportok ismertetőjegyei a gerinc, a bőr/testfedő, a légzés, a
 * szaporodás és a testhőmérséklet mentén állnak össze. A tipikus hibák külön
 * feladatot kaptak: a bálna emlős, a pók nem rovar, a denevér nem madár.
 */

// ------------------------------------- 11. Az élőlények tulajdonságai (30)

const T1 = 'kornyezet-elolenyek';

export const elolenyekExercises: Exercise[] = [
  sg(T1, 1, ['élőlény', 'élettelen'], [['fa', 'élőlény'], ['kő', 'élettelen'], ['kutya', 'élőlény'], ['asztal', 'élettelen'], ['gomba', 'élőlény'], ['víz', 'élettelen']]),
  mc(T1, 2, 'Mi jellemző minden élőlényre?', ['táplálkozik, lélegzik, szaporodik', 'mozog és beszél', 'van szeme'], 0),
  mc(T1, 3, 'Mire van szüksége minden élőlénynek?', ['vízre, levegőre, táplálékra', 'csak vízre', 'csak fényre'], 0),
  mc(T1, 4, 'Mi a növények legfontosabb különbsége az állatokhoz képest?', ['maguk állítják elő a táplálékukat', 'nem lélegeznek', 'nem szaporodnak'], 0),
  mc(T1, 5, 'Mihez van szükségük a növényeknek a táplálékkészítéshez?', ['napfényhez', 'sötéthez', 'hanghoz'], 0),
  sg(T1, 6, ['növény', 'állat', 'gomba'], [['tölgyfa', 'növény'], ['őz', 'állat'], ['vargánya', 'gomba'], ['tulipán', 'növény'], ['sas', 'állat'], ['csiperke', 'gomba']]),
  mc(T1, 7, 'Növény-e a gomba?', ['Nem, külön csoport', 'Igen', 'Igen, csak nincs levele'], 0),
  mc(T1, 8, 'Mi történik az élőlénnyel, ha nem kap vizet?', ['elpusztul', 'gyorsabban nő', 'nem változik'], 0),
  mc(T1, 9, 'Mit jelent, hogy egy élőlény fejlődik?', ['növekszik és változik az élete során', 'mindig egyforma marad', 'csak nagyobb lesz'], 0),
  mc(T1, 10, 'Melyik NEM élőlény?', ['moha', 'kavics', 'hangya'], 1),
];

// -------------------------------------------------------- 12. Növények (33)

const T2 = 'kornyezet-novenyek';

export const novenyekExercises: Exercise[] = [
  mp(T2, 1, [['gyökér', 'vizet és tápanyagot vesz fel'], ['szár', 'tartja a növényt és szállít'], ['levél', 'táplálékot készít'], ['virág', 'ebből lesz a termés']], 'Párosítsd a növény részét a feladatával!'),
  mc(T2, 2, 'Melyik rész szívja fel a vizet a talajból?', ['gyökér', 'levél', 'virág'], 0),
  mc(T2, 3, 'Melyik részben készül a növény tápláléka?', ['levél', 'gyökér', 'termés'], 0),
  mc(T2, 4, 'Mi lesz a virágból?', ['termés', 'levél', 'gyökér'], 0),
  mc(T2, 5, 'Mi van a termés belsejében?', ['mag', 'gyökér', 'virágpor'], 0),
  sg(T2, 6, ['fa', 'cserje', 'lágyszárú'], [['tölgy', 'fa'], ['málna', 'cserje'], ['tulipán', 'lágyszárú'], ['nyír', 'fa'], ['orgona', 'cserje'], ['pitypang', 'lágyszárú']], 'A fának egy vastag törzse van, a cserjének több vékony szára.'),
  sg(T2, 7, ['lombhullató', 'örökzöld'], [['tölgy', 'lombhullató'], ['fenyő', 'örökzöld'], ['juhar', 'lombhullató'], ['boróka', 'örökzöld'], ['nyír', 'lombhullató'], ['tuja', 'örökzöld']]),
  mc(T2, 8, 'Miért hullatja le a lombhullató fa a levelét ősszel?', ['hogy télen ne veszítsen vizet', 'mert elfárad', 'mert hideg van'], 0),
  mc(T2, 9, 'Mi segíti a virágok beporzását?', ['rovarok és a szél', 'eső', 'hó'], 0),
  sg(T2, 10, ['termesztett növény', 'vadon élő növény'], [['búza', 'termesztett növény'], ['pitypang', 'vadon élő növény'], ['paradicsom', 'termesztett növény'], ['csalán', 'vadon élő növény'], ['kukorica', 'termesztett növény'], ['vadrózsa', 'vadon élő növény']]),
  mc(T2, 11, 'Melyik növényi részt esszük a sárgarépánál?', ['a gyökerét', 'a levelét', 'a virágát'], 0),
  mc(T2, 12, 'Melyik növényi részt esszük a salátánál?', ['a levelét', 'a gyökerét', 'a termését'], 0),
  mc(T2, 13, 'Melyik növényi részt esszük a paradicsomnál?', ['a termését', 'a szárát', 'a gyökerét'], 0),
  mc(T2, 14, 'Szabad-e megkóstolni ismeretlen bogyót az erdőben?', ['Nem, mérgező lehet', 'Igen, ha szép színű'], 0),
];

// -------------------------------------------- 13. Állatok, általános (36)

const T3 = 'kornyezet-allatok';

export const allatokExercises: Exercise[] = [
  mc(T3, 1, 'Mivel táplálkozik a növényevő állat?', ['növényekkel', 'más állatokkal', 'mindkettővel'], 0),
  mc(T3, 2, 'Mivel táplálkozik a ragadozó?', ['más állatokkal', 'növényekkel', 'kővel'], 0),
  mc(T3, 3, 'Mit jelent, hogy egy állat mindenevő?', ['növényt és állatot is eszik', 'csak füvet eszik', 'nem eszik semmit'], 0),
  sg(T3, 4, ['növényevő', 'ragadozó', 'mindenevő'], [['őz', 'növényevő'], ['róka', 'ragadozó'], ['vaddisznó', 'mindenevő'], ['nyúl', 'növényevő'], ['farkas', 'ragadozó'], ['medve', 'mindenevő']]),
  sg(T3, 5, ['gerinces', 'gerinctelen'], [['kutya', 'gerinces'], ['hangya', 'gerinctelen'], ['ponty', 'gerinces'], ['csiga', 'gerinctelen'], ['sas', 'gerinces'], ['giliszta', 'gerinctelen']], 'A gerinceseknek csontos gerincoszlopuk van.'),
  sg(T3, 6, ['házi állat', 'vadon élő állat'], [['tehén', 'házi állat'], ['őz', 'vadon élő állat'], ['tyúk', 'házi állat'], ['farkas', 'vadon élő állat'], ['sertés', 'házi állat'], ['sün', 'vadon élő állat']]),
  mc(T3, 7, 'Hány nagy gerinces állatcsoportot tanultunk?', ['3', '5', '7'], 1, 'Emlősök, madarak, halak, kétéltűek, hüllők.'),
  mc(T3, 8, 'Mit jelent, hogy egy állat állandó testhőmérsékletű?', ['a testhője nem változik a környezettel', 'mindig fázik', 'mindig meleg van neki'], 0),
  mc(T3, 9, 'Melyik két csoport állandó testhőmérsékletű?', ['emlősök és madarak', 'halak és hüllők', 'rovarok és halak'], 0),
  mc(T3, 10, 'Miért alszik téli álmot a medve?', ['mert télen kevés a táplálék', 'mert fázik a lába', 'mert unatkozik'], 0),
];

// ------------------------------------------------- 14. Emlősállatok (39)

const T4 = 'kornyezet-emlosok';

export const emlosokExercises: Exercise[] = [
  mc(T4, 1, 'Mivel van borítva az emlősök teste?', ['szőr', 'toll', 'pikkely'], 0),
  mc(T4, 2, 'Hogyan szaporodnak az emlősök?', ['elevenszülők', 'tojást raknak', 'ikrát raknak'], 0),
  mc(T4, 3, 'Mivel táplálja kicsinyét az emlős?', ['tejjel', 'féreggel', 'fűvel'], 0),
  mc(T4, 4, 'Mivel lélegeznek az emlősök?', ['tüdővel', 'kopoltyúval', 'bőrükkel'], 0),
  mc(T4, 5, 'Milyen a testhőmérsékletük?', ['állandó', 'változó', 'nincs'], 0),
  sg(T4, 6, ['emlős', 'nem emlős'], [['kutya', 'emlős'], ['sas', 'nem emlős'], ['ló', 'emlős'], ['ponty', 'nem emlős'], ['denevér', 'emlős'], ['gyík', 'nem emlős']]),
  mc(T4, 7, 'Emlős-e a bálna?', ['Igen', 'Nem, mert a vízben él'], 0, 'Tüdővel lélegzik, elevenszülő és szoptat — csak a víz a lakóhelye.'),
  mc(T4, 8, 'Emlős-e a denevér?', ['Igen', 'Nem, mert repül'], 0, 'A szárnya bőrredő, nem toll.'),
  mc(T4, 9, 'Emlős-e a delfin?', ['Igen', 'Nem, mert hal'], 0),
  mc(T4, 10, 'Miért jön fel a bálna a víz felszínére?', ['hogy levegőt vegyen', 'hogy körülnézzen', 'hogy melegedjen'], 0),
  mc(T4, 11, 'Melyik emlős alszik téli álmot?', ['sün', 'őz', 'ló'], 0),
  mc(T4, 12, 'Hány lába van a legtöbb emlősnek?', ['4', '2', '6'], 0),
  mc(T4, 13, 'Milyen fogai vannak a ragadozó emlősnek?', ['hegyes szemfogai', 'lapos őrlőfogai', 'nincsenek fogai'], 0),
  mc(T4, 14, 'Emlős-e az ember?', ['Igen', 'Nem'], 0),
];

// ---------------------------------------------------------- 15. Madarak (41)

const T5 = 'kornyezet-madarak';

export const madarakExercises: Exercise[] = [
  mc(T5, 1, 'Mivel van borítva a madarak teste?', ['toll', 'szőr', 'pikkely'], 0),
  mc(T5, 2, 'Hogyan szaporodnak a madarak?', ['tojást raknak', 'elevenszülők', 'ikrát raknak'], 0),
  mc(T5, 3, 'Mivel lélegeznek a madarak?', ['tüdővel', 'kopoltyúval', 'bőrükkel'], 0),
  mc(T5, 4, 'Mi van a madarak szája helyén?', ['csőr', 'fog', 'orr'], 0),
  mc(T5, 5, 'Hány lába van a madaraknak?', ['2', '4', '6'], 0),
  mc(T5, 6, 'Milyen a madarak testhőmérséklete?', ['állandó', 'változó', 'nincs'], 0),
  mc(T5, 7, 'Miért könnyű a madarak csontja?', ['hogy tudjanak repülni', 'hogy több férjen beléjük', 'hogy ne fázzanak'], 0),
  sg(T5, 8, ['madár', 'nem madár'], [['gólya', 'madár'], ['denevér', 'nem madár'], ['veréb', 'madár'], ['pillangó', 'nem madár'], ['bagoly', 'madár'], ['bálna', 'nem madár']]),
  sg(T5, 9, ['költöző madár', 'itthon telelő madár'], [['gólya', 'költöző madár'], ['veréb', 'itthon telelő madár'], ['fecske', 'költöző madár'], ['széncinege', 'itthon telelő madár'], ['daru', 'költöző madár'], ['harkály', 'itthon telelő madár']]),
  mc(T5, 10, 'Miért költöznek el ősszel egyes madarak?', ['mert elfogy a táplálékuk', 'mert unják a helyet', 'mert félnek a sötéttől'], 0),
  mc(T5, 11, 'Hogyan segíthetsz a madaraknak télen?', ['madáretetőt teszek ki', 'befogom őket', 'elkergetem őket'], 0),
  mc(T5, 12, 'Mivel vadászik a bagoly?', ['éles karmaival és csőrével', 'fogaival', 'a farkával'], 0),
  mc(T5, 13, 'Milyen csőre van a magevő madárnak?', ['rövid és erős', 'hosszú és vékony', 'kanál alakú'], 0),
  mc(T5, 14, 'Melyik madár kopogtat a fatörzsön?', ['harkály', 'gólya', 'fecske'], 0),
  mc(T5, 15, 'Tud-e minden madár repülni?', ['Nem, például a strucc nem', 'Igen, mind'], 0),
];

// ------------------------------------------------------------- 16. Halak (44)

const T6 = 'kornyezet-halak';

export const halakExercises: Exercise[] = [
  mc(T6, 1, 'Mivel van borítva a halak teste?', ['pikkely', 'toll', 'szőr'], 0),
  mc(T6, 2, 'Mivel lélegeznek a halak?', ['kopoltyúval', 'tüdővel', 'bőrükkel'], 0),
  mc(T6, 3, 'Hogyan szaporodnak a halak?', ['ikrát raknak', 'tojást raknak', 'elevenszülők'], 0),
  mc(T6, 4, 'Mivel mozognak a halak?', ['úszóikkal', 'lábaikkal', 'szárnyaikkal'], 0),
  mc(T6, 5, 'Milyen a halak testhőmérséklete?', ['változó', 'állandó', 'mindig meleg'], 0, 'A környezetük hőmérsékletéhez igazodik.'),
  mc(T6, 6, 'Mi segíti a halat a vízben lebegni?', ['úszóhólyag', 'a pikkelye', 'a farka'], 0),
  sg(T6, 7, ['hal', 'nem hal'], [['ponty', 'hal'], ['delfin', 'nem hal'], ['csuka', 'hal'], ['bálna', 'nem hal'], ['harcsa', 'hal'], ['béka', 'nem hal']]),
  mc(T6, 8, 'Melyik hal ragadozó?', ['csuka', 'ponty', 'keszeg'], 0),
  mc(T6, 9, 'Melyik hal él a Balatonban?', ['fogassüllő', 'cápa', 'aranyhal'], 0),
  mc(T6, 10, 'Honnan veszik a halak az oxigént?', ['a vízben oldott oxigénből', 'a levegőből', 'a növényekből'], 0),
  mc(T6, 11, 'Mi történik a hallal, ha kiveszed a vízből?', ['nem tud lélegezni', 'gyorsabban úszik', 'semmi'], 0),
  mc(T6, 12, 'Miért nyálkás a hal bőre?', ['hogy könnyebben sikluljon a vízben', 'hogy csúszós legyen a kézben', 'hogy melegen tartsa'], 0),
];

// -------------------------------------------- 17. Kétéltűek és hüllők (46)

const T7 = 'kornyezet-ketelt-hullo';

export const kteltHulloExercises: Exercise[] = [
  mc(T7, 1, 'Milyen a kétéltűek bőre?', ['csupasz és nedves', 'pikkelyes és száraz', 'szőrös'], 0),
  mc(T7, 2, 'Hol rakják az ikrájukat a kétéltűek?', ['vízben', 'homokban', 'fán'], 0),
  mc(T7, 3, 'Mivel lélegzik az ebihal?', ['kopoltyúval', 'tüdővel', 'bőrével'], 0),
  mc(T7, 4, 'Mivel lélegzik a kifejlett béka?', ['tüdővel és bőrével', 'csak kopoltyúval', 'csak kopoltyúval és uszonnyal'], 0),
  oi(T7, 5, ['pete (ikra)', 'ebihal', 'lábas ebihal', 'kifejlett béka'], ['ebihal', 'kifejlett béka', 'pete (ikra)', 'lábas ebihal'], 'A béka fejlődésének sorrendje.'),
  mc(T7, 6, 'Milyen a hüllők bőre?', ['száraz és pikkelyes', 'nedves és csupasz', 'tollas'], 0),
  mc(T7, 7, 'Hol rakják a tojásukat a hüllők?', ['szárazföldön', 'vízben', 'fán, fészekben'], 0),
  mc(T7, 8, 'Mivel lélegzenek a hüllők?', ['tüdővel', 'kopoltyúval', 'bőrükkel'], 0),
  sg(T7, 9, ['kétéltű', 'hüllő'], [['béka', 'kétéltű'], ['gyík', 'hüllő'], ['gőte', 'kétéltű'], ['kígyó', 'hüllő'], ['szalamandra', 'kétéltű'], ['teknős', 'hüllő']]),
  mc(T7, 10, 'Milyen a kétéltűek és hüllők testhőmérséklete?', ['változó', 'állandó', 'mindig hideg'], 0),
  mc(T7, 11, 'Miért süttetik magukat a gyíkok a napon?', ['mert a napfénytől melegszik fel a testük', 'mert szeretik a színét', 'mert ott biztonságos'], 0),
  mc(T7, 12, 'Mit csinál a gyík, ha megfogják a farkánál?', ['leszakad a farka és elmenekül', 'megharap', 'elalszik'], 0),
  mc(T7, 13, 'Miért kell a kétéltűeknek nedves környezet?', ['mert a bőrükön át is lélegeznek', 'mert szomjasak', 'mert úszni szeretnek'], 0),
  mc(T7, 14, 'Hogyan mozog a kígyó?', ['a testét hullámoztatva', 'ugrálva', 'a farkával tolja magát'], 0),
];

// ------------------------------------------------------------ 18. Rovarok (48)

const T8 = 'kornyezet-rovarok';

export const rovarokExercises: Exercise[] = [
  mc(T8, 1, 'Hány lába van a rovaroknak?', ['6', '4', '8'], 0),
  mc(T8, 2, 'Hány részből áll a rovarok teste?', ['3', '2', '4'], 0, 'Fej, tor és potroh.'),
  mc(T8, 3, 'Mi a rovarok testének három része?', ['fej, tor, potroh', 'fej, has, láb', 'fej, szárny, láb'], 0),
  mc(T8, 4, 'Mivel tapogatják ki a környezetüket a rovarok?', ['csápjaikkal', 'lábaikkal', 'szárnyaikkal'], 0),
  mc(T8, 5, 'Hol van a rovarok váza?', ['kívül, a testüket borítja', 'belül, mint nálunk', 'nincs vázuk'], 0),
  sg(T8, 6, ['rovar', 'nem rovar'], [['hangya', 'rovar'], ['pók', 'nem rovar'], ['méh', 'rovar'], ['csiga', 'nem rovar'], ['katicabogár', 'rovar'], ['giliszta', 'nem rovar']]),
  mc(T8, 7, 'Rovar-e a pók?', ['Nem, mert 8 lába van', 'Igen'], 0),
  mc(T8, 8, 'Hány lába van a póknak?', ['8', '6', '10'], 0),
  oi(T8, 9, ['pete', 'hernyó', 'báb', 'lepke'], ['báb', 'pete', 'lepke', 'hernyó'], 'A lepke fejlődésének sorrendje.'),
  mc(T8, 10, 'Mi lesz a hernyóból?', ['báb, majd lepke', 'rögtön lepke', 'bogár'], 0),
  mc(T8, 11, 'Mit gyűjt a méh a virágokról?', ['nektárt és virágport', 'levelet', 'vizet'], 0),
  mc(T8, 12, 'Miért hasznos a méh?', ['beporozza a virágokat', 'megeszi a kártevőket', 'ássa a földet'], 0),
  mc(T8, 13, 'Mit eszik a katicabogár?', ['levéltetveket', 'leveleket', 'virágport'], 0),
  mc(T8, 14, 'Hogyan élnek a hangyák?', ['nagy közösségben, bolyban', 'magányosan', 'párban'], 0),
  mc(T8, 15, 'Melyik rovar él még közösségben?', ['méh', 'szúnyog', 'légy'], 0),
];
