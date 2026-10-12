# Feature task lista – Learning2Kira v1

> **Ez a fájl egyben munkanapló is.** Minden elvégzett feladat után ki kell pipálni a
> sort, be kell írni a munkanapló bejegyzést a fájl végére, és commitolni kell.
> A részletes szabályok a `CLAUDE.md` „Munkanapló és commitok" szakaszában vannak.

### Setup (egyszeri)
- [x] Expo projekt létrehozása (`npx create-expo-app@latest learning2kira --template`)
- [x] Git init, első commit: "init"
- [x] `app.json`: `supportsTablet: true`, `requireFullScreen: true`, iPad orientáció
- [x] NativeWind telepítése és konfigurálása, színek a `tailwind.config.js`-be
- [x] Nunito betűtípus betöltése (`expo-font`)
- [x] `react-native-svg` + `react-native-svg-transformer` beállítása (metro config)
- [x] Maskot assetek elhelyezése: `assets/images/mascot/mascot-base.png`
- [x] `constants/colors.ts` és `constants/images.ts` létrehozása
- [x] Lint és typecheck parancsok bekötése
- [x] `validate` npm script bekötése (`tsx scripts/validate.ts`)
- [x] Feladatbank bemásolása a csomagból (`types/`, `data/`, `scripts/`)
- [x] CLAUDE.md a projekt gyökerébe, ez a fájl a `docs/` mappába
- [ ] Push GitHub-ra

### Alapok
- [x] `lib/leitner.ts` – `nextBox()`, `dueDate()`, `selectSessionExercises()` + unit tesztek
- [x] `store/progressStore.ts` – XP, streak, jelvények, AsyncStorage perzisztencia
- [x] `store/reviewStore.ts` – Leitner kártyaállapotok, perzisztencia
- [x] `components/ui/` – `AnswerButton`, `Card`, `ProgressBar` alapkomponensek

### Tartalom – KÉSZ (2026-10-12)
**1574 feladat, 66 témakör, négy tantárgy.** A négy tankönyv fejezetei szerint,
`Topic.book` oldalszámmal, validátorral.

- [x] `types/exercise.ts` – Topic, Exercise (7 típus), SubjectId, SZOCSOPORT, `paper`
- [x] `data/builders.ts` – ml, mc, sg, oi, pu, mp, ni, nip
- [x] `data/index.ts` – subjects, allTopics, allExercises, lekérdezők
- [x] `scripts/validate.ts` – integritás-ellenőrző + számtani kiértékelő
- [x] Nyelvtan: 16 témakör, 330 feladat (OH-MNY03TB fejezetei)
- [x] Helyesírás: 3 témakör, 90 feladat (hangok, elválasztás, j/ly)
- [x] Matek: 28 témakör, 895 feladat (OH-MAT03TB fejezetei)
- [x] Környezet: 19 témakör, 259 feladat (OH-KOR03TA 29 leckéje)

### Tartalom – hátralévő
- [ ] Közmondások, szólások (`match-pairs`) – Szövegalkotás 3., 23. oldal

### Feladattípus komponensek
- [x] `components/exercise/MultipleChoice.tsx` — 563 feladat, ez a leggyakoribb
- [x] `components/exercise/NumericInput.tsx` + `NumberPad` — 756 feladat, a legtöbbet használt
- [x] `components/exercise/MissingLetter.tsx` — 70 feladat
- [x] `components/exercise/SortIntoGroups.tsx` (érintéses, lásd D-032) — 96 feladat
- [x] `components/exercise/OrderItems.tsx` — 42 feladat
- [x] `components/exercise/MatchPairs.tsx` — 32 feladat
- [x] `components/exercise/Punctuation.tsx` — 15 feladat
- [x] `components/exercise/ExerciseRenderer.tsx` – típus alapján választ komponenst
- [ ] **Füzetes mód** (`paper: true`): külön képernyő, nincs időnyomás, „Vedd elő a füzeted!" jelzés, a maskot vár

### Képernyők (sorrendben)
- [x] Kezdőlap – üdvözlés Kirának, streak, XP, „Kezdjük!" gomb, maskot
- [x] Tantárgyválasztó – **4 kártya rácsban**, mind élesben
- [x] Témaválasztó – témakörök haladásjelzővel, tankönyvi sorrendben
- [x] Gyakorló képernyő – 8-10 feladat, azonnali visszajelzés, haladássáv
- [x] Eredmény képernyő – pontszám, XP-animáció, mi jön vissza legközelebb
- [x] Jutalmak – jelvények, streak-naptár (matricák: lásd D-030)

### Motivációs réteg
- [x] Maskot komponens 4 állapottal, válaszra reagál
- [x] Haptika bekötése (helyes / hibás)
- [ ] Hangeffektek + kikapcsolási lehetőség
- [ ] Streak logika + „mentőöv" nap havonta
- [x] Jelvényrendszer: első kör, 3/7/14/30 napos sorozat, 100% egy körben (min. 8 feladat), téma befejezése
- [x] Jelvényképek (10 db) bekötése a Jutalmak képernyőre és az Eredmény képernyőre
- [ ] Napi cél megjelenítése és teljesítés visszajelzése

### Design
- [x] Kezdőlap igazítása a `Learning2Kira.pdf` mockuphoz
- [x] Tantárgyválasztó igazítása a PDF-hez
- [x] Témaválasztó igazítása a PDF-hez
- [x] Gyakorló képernyő igazítása a PDF-hez
- [ ] `design-prompts.md` 2. promptjának átírása: 3 kártya egy sorban → 4 kártya rácsban
- [ ] Maskot `thinking`, `celebrate`, `encourage` állapotok generálása a `base` referenciával
- [ ] Füzetes mód képernyőjéhez prompt (nyugodt, váró hangulat)

### Ship előtt
- [ ] Teljes primary flow tesztelése éles iPaden
- [ ] Edge case-ek: üres állapot, minden feladat kész, nincs esedékes ismétlés, app első indítás
- [ ] Fekvő és álló mód ellenőrzése iPaden
- [ ] Lint + typecheck + validate hibák nélkül
- [ ] CodeRabbit code review az AI által írt feature-ökhöz
- [ ] Dev utilities eltávolítása (test gombok, console.log-ok, mock data)
- [ ] App ikon és splash screen a maskottal
- [ ] EAS Build production binary + éles iPaden tesztelés
- [ ] TestFlight feltöltés, Kira eszközének meghívása

---
---

# Munkanapló

Minden befejezett feladat után ide kerül egy bejegyzés, **legfelülre** (fordított
időrend, a legfrissebb legyen elöl). Ugyanabba a commitba, mint a kód.

Sablon:

```
## ÉÉÉÉ-HH-NN – [feladat neve]

**Mit:** egy-két mondat arról, mi készült el.
**Fájlok:** [érintett fájlok]
**Tesztelve:** [eszköz, mit próbáltál]
**Nyitva maradt:** [ha van]
**Commit:** [commit üzenet]
```

<!-- ÚJ BEJEGYZÉSEK IDE, LEGFELÜLRE -->

## 2026-10-12 – Jelvényképek bekötése

**Mit:** A tíz jelvénykép (PNG) bekerült az appba. A `BadgeCard` az SVG-ikon helyett a képet rajzolja (zárolt állapotban halvány és szürkített, lakattal), ugyanez látszik az Eredmény képernyő „Új jelvényt szereztél!" sorában. A képek a `constants/images.ts`-ben vannak (`badgeImages`, a jelvény-azonosítók szerint); a `constants/badges.ts` jegyzékéből kikerült az `icon` és a `color` mező, a `Badge.id` típusa a képek kulcsa (új jelvény kép nélkül nem fordul). A felesleges SVG-ikonok (zászló, villám, korona, könyv, ceruza, célkereszt) törölve. A sorrend: első kör, sorozatok, hibátlan kör, tantárgyak. A kapott képek átnézése: a tíz kép egységes stílusú, de **kilenc nem volt átlátszó**: a „sakktábla" átlátszóság-minta valódi pixelekként volt a kör körül, ami az app krémszínű hátterén szürke négyzetekként látszott volna. Ezért körbevágtam őket (a kör szélén 1px-es lágy éllel), és 512×512 pontra kicsinyítettem (~330 KB/db, az eredeti ~2 MB), a megjelenítési méret (108pt, 3x = 324 px) így is bőven fedett. D-033.
**Fájlok:** `assets/images/badges/{first-lesson,streak-3,streak-7,streak-14,streak-30,perfect-round,topic-nyelvtan,topic-helyesiras,topic-matek,topic-kornyezet}.png`, `constants/images.ts`, `constants/badges.ts`, `components/ui/BadgeCard.tsx`, `components/ui/Icons.tsx`
**Tesztelve:** `npm test` 69/69, `typecheck`, `lint`, `expo export --platform ios`. Gyűjtőkép krémszínű háttéren: mind a tíz tiszta. Eszközön NEM néztem meg; a zárolt állapot `filter: grayscale` stílusa iOS-en ellenőrizendő.
**Nyitva maradt:** a `streak-3`, `streak-7`, `streak-14`, `streak-30` fájlok az eredeti (1254 px, sakktáblás) változatot **felülírták** a körbevágott 512 px-esekkel (azonos fájlnév, az én hibám); a többi eredeti (`first-session`, `perfect-session`, `subject-*`) érintetlen és nincs commitolva. A `first-lesson.png` széle (a csillag kilóg a körből) enyhén szálkás, a kép alfa-csatornás volt, ezt nem vágtam. A `docs/badge-prompts.md` „Bekötés" szakasza elavult (require-térkép helyett importok vannak).
**Commit:** `feat: jelvényképek bekötése`

## 2026-10-12 – `SortIntoGroups` komponens

**Mit:** Csoportosítás érintéssel (`components/exercise/SortIntoGroups.tsx`): felül a kevert szavak készlete, alatta a csoportok (fekvőben egymás mellett, telefonon egymás alatt). A gyerek megérinti a szót (kiemelődik), aztán a csoportot; a csoportok ilyenkor szaggatott rózsaszín keretet kapnak. Jó csoport: a szó zölden bekerül. Rossz csoport: a csoport 0,7 mp-re terrakotta, a szó visszakerül a készletbe, a tévedés számít. A feladat akkor helyes, ha egyetlen tévedés nélkül sikerült (mint a `MatchPairs`, D-022). Az utasítás fix („Válogasd csoportokba a szavakat!"), a `hint` „Tipp" gombra nyílik. A gyakorló kör innentől a `sort-into-groups` feladatokat is adja (a szűrés megszűnt), így a három rövid témakör (`nyelvtan-mit-fejeznek-ki`, `matek-valogatas`, `kornyezet-allatok`) is eléri a 8-10 feladatot, és a témakör-„kész" állapot is elérhető. A maskot az alsó sávban marad (D-028).
**Fájlok:** `components/exercise/SortIntoGroups.tsx`, `components/exercise/ExerciseRenderer.tsx` (az ÁTMENETI helyettesítő törölve), `hooks/usePracticeSession.ts`, `app/practice/[topicId].tsx`
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`. Adat: 96 feladat, 2–4 csoport, 4–6 elem, a leghosszabb elem 28, a leghosszabb csoportnév 26 karakter. Eszközön NEM próbáltam; a hosszú csoportnevek 4 csoportnál fekvő iPaden (szűk oszlop) tördelődnek, ellenőrizendő.
**Nyitva maradt:** nincs húzás (D-032). Tévedés után a gyerek addig próbálkozik, amíg ki nem jön, helyes megoldást nem mutatunk (D-022 szerint).
**Commit:** `feat: SortIntoGroups feladatkomponens`

## 2026-10-12 – 14 napos jelvény, hibátlan kör minimuma

**Mit:** Új jelvény: 14 napos sorozat (a 7 és a 30 közötti ugrás egy 3. osztályosnak túl nagy). A Hibátlan kör csak legalább 8 feladatos körért jár (`PERFECT_ROUND_MIN`), mert egy témakör végén maradó 2-3 feladatos kör túl könnyű. A Jutalmak rácsa a csonka utolsó sort üres helykitöltőkkel tölti ki, hogy a 10. jelvény ne nyúljon szét a teljes sorra. D-031.
**Fájlok:** `lib/badges.ts`, `lib/badges.test.ts`, `constants/badges.ts`, `components/ui/BadgeCard.tsx`, `app/(tabs)/rewards.tsx`, `docs/badge-prompts.md` (új: jelvénykép-promptok)
**Tesztelve:** `npm test` 69/69, `typecheck`, `lint` (átnézve és lefuttatva a `SortIntoGroups` után). Az eszközös próba hátravan.
**Nyitva maradt:** a jelvényképek (PNG) még nincsenek; addig a `BadgeCard` SVG ikont rajzol, a 14 naposé `clock`.
**Commit:** `feat: 14 napos jelvény, hibátlan kör min. 8 feladat`

## 2026-10-12 – Jelvényrendszer

**Mit:** A kör végén a rendszer kiértékeli a jelvényeket (`lib/badges.ts`, `newBadges`, 7 teszt): Első kör, 3/7/30 napos sorozat (a kör utáni sorozat alapján), Hibátlan kör (minden válasz jó), és a „téma befejezése" tantárgyanként (a kör témaköre kész = minden feladatára válaszolt legalább egyszer, D-026). A feloldás a `usePracticeSession.next()`-ben történik, a `progressStore.unlockBadge`-gyel; a megszerzett jelvények a `resultStore`-ba kerülnek, és az Eredmény képernyőn „Új jelvényt szereztél!" felirattal, rugós beúszással jelennek meg. A Jutalmak képernyőn a feloldott jelvények innentől színesek.
**Fájlok:** `lib/badges.ts`, `lib/badges.test.ts`, `hooks/usePracticeSession.ts`, `store/resultStore.ts`, `app/result.tsx`
**Tesztelve:** `npm test` 67/67, `typecheck`, `lint`, `expo export --platform ios`. Eszközön és a teljes úton NEM próbáltam.
**Nyitva maradt:** a „téma befejezése" jelvény csak olyan témakörben jár, amelyben nincs `sort-into-groups` feladat, mert azokat a gyakorló kör még nem adja (a `SortIntoGroups` komponens hiányzik), így a témakör „kész" aránya nem érheti el az 1-et. A korábban (a jelvényrendszer előtt) abszolvált körök jelvényei nem járnak vissza. A „mentőöv" nap és a streak-szabály külön feladat.
**Commit:** `feat: jelvényrendszer`

## 2026-10-12 – Jutalmak

**Mit:** A PDF 6. képernyője szerint (`app/(tabs)/rewards.tsx`): „Jutalmaid" cím az ünneplő maskottal; a sorozatkártya a nagy számmal és az aktuális hónap naptárával (hétfővel kezdődő hetek; gyakorolt nap zöld pipás, kimaradt nap szürke, ma rózsaszín keretes, a többi körvonalas); a jelvények 3 oszlopos rácsban, a megszerzett színesen, a zárolt szürkén lakattal. Fekvő iPaden a naptár balra, a rács jobbra; telefonon egymás alatt, „Jelvények N / 9" fejléccel. A naptárhoz a `progressStore` új `practiceDays` mezőt kapott (a kör végén kerül bele a mai nap). Új tiszta függvény `monthGrid` (`lib/calendar.ts`, 4 teszt). A jelvények jegyzéke a `constants/badges.ts`-ben van.
**Fájlok:** `app/(tabs)/rewards.tsx`, `components/ui/{StreakCalendar,BadgeCard,Icons}.tsx`, `constants/badges.ts`, `lib/calendar.ts`, `lib/calendar.test.ts`, `store/progressStore.ts`
**Tesztelve:** `npm test` 60/60, `typecheck`, `lint`, `expo export --platform ios`. Eszközön NEM néztem meg (nincs iPad-szimulátor).
**Nyitva maradt:** **minden jelvény zárolt marad, amíg a „Jelvényrendszer" feladat el nem készül** (a feloldás ott lesz: `unlockBadge` hívások a kör végén). A korábbi gyakorlásokról nincs napi előzmény (a `practiceDays` az első új körtől gyűlik); a „mentőöv" nap a naptárban még nem látszik (Streak logika feladat). Matricák nincsenek (D-030).
**Commit:** `feat: jutalmak képernyő`

## 2026-10-12 – Eredmény képernyő

**Mit:** A PDF 5. képernyője szerint (`app/result.tsx`): ünneplő maskot, „Szép munka!" (hibátlan körnél „Hibátlan, Kira!"), három csempe (helyes/összes, szerzett XP, napos sorozat), szintsáv, türkiz szélű sáv „mi jön vissza" üzenettel, „Még egy kör" és „Kész" gomb. XP-animáció: az XP-csempe rugósan beúszik, a szintsávban a most szerzett rész halvány barackként kinő (Reanimated). A gyakorló képernyő a kör végén ide vált (`router.replace`), az átmeneti „Kész, Kira!" összegzés megszűnt. Az üzenet a kör feladatainak Leitner-állapotából jön: „N feladat még ma visszajön…" (a rontottak az 1. dobozban aznapra esedékesek), ha nincs ilyen, „A következő ismétlés N nap múlva vár rád." Új tiszta függvények tesztekkel: `levelOf`/`levelBar` (`lib/level.ts`), `reviewOutlook` (`lib/progress.ts`).
**Fájlok:** `app/result.tsx`, `app/practice/[topicId].tsx`, `hooks/usePracticeSession.ts`, `store/resultStore.ts`, `components/ui/{LevelBar,ResultStat,Icons}.tsx`, `lib/level.ts`, `lib/level.test.ts`, `lib/progress.ts`, `lib/progress.test.ts`
**Tesztelve:** `npm test` 56/56, `typecheck`, `lint`, `expo export --platform ios`. Eszközön és a teljes úton (kezdőlap → gyakorlás → eredmény → „Még egy kör" / „Kész") NEM próbáltam; az animáció időzítése és a három csempe szélessége álló telefonon ellenőrizendő.
**Nyitva maradt:** jelvény a kör végén (a „Jelvényrendszer" feladat); az XP-szám nem számol fel (csak a csempe és a sáv animál); a „Még egy kör" gomb akkor is él, ha a témakörből nincs több feladat (a gyakorló képernyő ilyenkor a „mindent átnéztél" üzenetet mutatja). A „Kész" a témaválasztóra lép vissza.
**Commit:** `feat: eredmény képernyő`

## 2026-10-12 – Javítás: a statisztika-pirulák számai kilógtak

**Mit:** A `StatPill` számának sormagassága (32pt) kisebb volt a 28pt-os Nunito természetes sormagasságánál, ezért iOS-en a szám felfelé kilógott a kártyából. A sormagasság 38pt-ra, a címkéé 20pt-ra nőtt, a kártya függőleges belső tere 12→16pt.
**Fájlok:** `components/ui/StatPill.tsx`
**Tesztelve:** `typecheck`, `lint`. Eszközön NEM ellenőriztem (nincs iPad-szimulátor), a javítás a sormagasság-hiba okán alapul.
**Nyitva maradt:** ugyanez a hiba máshol is előfordulhat, ahol nagy Nunito szöveg szűk `leading`-gel áll (pl. témakörkártya 20/24, `NumberPad`); eszközön érdemes végignézni.
**Commit:** `fix: statisztika-pirulák számainak sormagassága`

## 2026-10-12 – Gyakorló képernyő igazítása a PDF-hez

**Mit:** Felül kerek ✕ gomb és **szakaszos haladássáv** (feladatonként egy szakasz: kész zöld, jelenlegi rózsa, hátralévő halvány) a számláló helyett. A kérdéskártya bal alsó sarkában áll a maskot (`thinking` → `celebrate` / `encourage`), a kártya fekvőben magasabb. A „Hiányzó betű" a PDF szerint: kis útmutató felül („Egészítsd ki a hiányzó betűket!"), 72pt-os szó, barackszínű szaggatott rés, két magas (110pt) válaszgomb rózsaszín kerettel a kártya mellett függőlegesen középen. A válaszgombok alapkerete mostantól rózsaszín (3pt) minden típusnál. Új „Tipp" gomb (villanykörte): a tipp csak érintésre jelenik meg (MissingLetter, Punctuation). Az alsó sáv („Tovább") csak válasz után jön elő.
**Fájlok:** `app/practice/[topicId].tsx`, `components/exercise/ExerciseCard.tsx` (új), `components/exercise/{MissingLetter,MultipleChoice,NumericInput,Punctuation}.tsx`, `components/ui/{SegmentedProgress,HintButton,AnswerButton,Icons}.tsx`
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`. Képernyőképes összevetés NEM történt (nincs iPad-szimulátor), a kártyán belüli maskot és a magas kártya fekvőben eszközön ellenőrizendő, főleg `NumericInput` (a számbillentyűs kártya magasabb a maskotnál?).
**Nyitva maradt:** a `MatchPairs` és `OrderItems` kártyája maga a kezelőfelület, ott a maskot az alsó sávban marad (D-028). A `MultipleChoice` és `NumericInput` nem mutat tippet (eddig sem mutatott). Válasz után a sáv megjelenése eltolja a görgethető területet.
**Commit:** `feat: gyakorló képernyő igazítása a PDF mockuphoz`

## 2026-10-12 – Témaválasztó igazítása a PDF-hez

**Mit:** Nagyobb, középre igazított cím (44pt) a tantárgy körével; az összegző kártya fekvőben egy sorban (felirat, sáv, százalék rózsaszín sötét árnyalatban), telefonon felirat + százalék egy sorban, alatta a sáv. A témakörkártyák körei halvány hátteret és sötét számot kaptak, négy színt váltogatva (barack, türkiz, rózsa, zöld). A kész témakör sávja zöld, a folyamatban lévőé rózsa. Fekvőben a **gondolkodó** maskot áll jobb alul, telefonon a fejlécben van, a kártyákat nem takarja. Az összegző kártya és a témakörkártyák lágy árnyékot kaptak, a sávok vékonyabbak.
**Fájlok:** `app/subject/[id].tsx`, `components/ui/TopicCard.tsx` (a `color` prop megszűnt)
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`. Képernyőképes összevetés NEM történt (nincs iPad-szimulátor).
**Nyitva maradt:** a PDF a köröket szakkifejezés-rövidítéssel jelöli (Aa, ba, N, V…), nálunk a tankönyvi sorszám áll bennük, mert a témakörökhöz nincs ilyen adat, és a PDF rövidítései szófaji szakszavak (D-008). A körök színe a sorszámtól függ, nem a témától.
**Commit:** `feat: témaválasztó igazítása a PDF mockuphoz`

## 2026-10-12 – Tantárgyválasztó igazítása a PDF-hez

**Mit:** Fekvő iPaden (szélesség ≥ 700) magas kártyák 2×2-es rácsban: nagy színes kör, 36pt-os cím, haladássáv, „N témakör"; telefonon vízszintes kártyák egymás alatt (kör balra, cím + sáv + szám jobbra), a PDF álló nézete szerint. A cím fekvőben középen (44pt), telefonon balra, két sorban. A jobb felső sarokban az ünneplő maskot (`celebrate`) a kártyák fölé lóg, nem fogja el az érintést. A már elkezdett tantárgy rózsaszín keretet és rózsaszínes árnyékot kap (a PDF-ben az első kártya ilyen).
**Fájlok:** `app/subjects.tsx`, `components/ui/SubjectCard.tsx` (`layout` prop)
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`. Képernyőképes összevetés NEM történt (nincs iPad-szimulátor).
**Nyitva maradt:** a PDF-ben a kiemelt kártya jelentése nem volt megadva; én „már elkezdett tantárgy"-ként értelmeztem (haladás > 0). A PDF „Coming soon" és lakat állapota nincs, mert mind a négy tantárgy éles.
**Commit:** `feat: tantárgyválasztó igazítása a PDF mockuphoz`

## 2026-10-12 – Kezdőlap igazítása a PDF-hez

**Mit:** Az eddigi képernyők szöveges prompt alapján készültek, mockup nélkül; most a `docs/Learning2Kira.pdf` a mérték. Kezdőlapon: a statisztika-pirulák tartalom-szélesek (fekvőben), körvonalas láng- és csillag-ikonnal; a „Mai cél" fehér kártyába került, cím + százalék egy sorban, vastag zöld sáv bézs sávhátteren; a „Kezdjük" gomb nyilat kapott és rózsaszín árnyékot; a maskot rózsás, kétrétegű talapzaton áll, szétszórt színes pöttyökkel és csillagokkal. Álló módban a sorrend: üdvözlés, maskot, pirulák, cél, a gomb alul. A `ProgressBar` sávháttere tónusfüggő lett (rózsás / bézs), `size="lg"` vastag változattal; ez az összes képernyőn érvényes.
**Fájlok:** `app/(tabs)/index.tsx`, `components/ui/Icons.tsx` (+`outline`, +ArrowRightIcon), `components/ui/ProgressBar.tsx`, `components/ui/StatPill.tsx`, `constants/colors.ts` (+`darkTones`)
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`. Képernyőképes összevetés NEM történt: nincs elérhető iPad-szimulátor ezen a gépen, az arányok a PDF-ből mért értékek (px ÷ 1,39) alapján készültek.
**Nyitva maradt:** a mai cél most csak 0% vagy 100% (egy kör = a cél); a PDF 60%-ot mutat, ahhoz a napi cél több körből álljon (lásd „Napi cél" feladat). A pöttyök és csillagok helye közelítés.
**Commit:** `feat: kezdőlap igazítása a PDF mockuphoz`

## 2026-10-12 – Témaválasztó

**Mit:** A `design-prompts.md` 3. promptja szerint: felül vissza gomb és a tantárgy neve a színes jelével; alatta összegző sáv („X / Y témakör kész" + sáv); alatta a témakörök kétoszlopos rácsban, tankönyvi sorrendben (`Topic.order`). Kártyánként sorszámozott színes kör, cím, vékony haladássáv és jobbra egy jelzés: **esedékes ismétlések száma** (rózsa kör) > **kész** (zöld pipa) > **még nem kezdett** (halvány pont); a folyamatban lévő, de nem esedékes témakörnek nincs jelzése. A kártya a `/practice/[topicId]` gyakorlókört indítja. Jobb alsó sarokban kis maskot (nem fogja el a kattintásokat). Az eddig tantárgykártyán lévő kör-jel közös komponens lett (`SubjectIcon`), a sorokra bontás pedig `lib/chunk.ts` (3 teszt).
**Fájlok:** `app/subject/[id].tsx`, `components/ui/TopicCard.tsx`, `components/ui/SubjectIcon.tsx`, `components/ui/SubjectCard.tsx`, `components/ui/Icons.tsx` (+CheckIcon), `lib/progress.ts` (+`dueCount`, 2 teszt), `lib/chunk.ts`, `lib/chunk.test.ts`, `app/subjects.tsx`
**Tesztelve:** `npm test` 47/47, `typecheck`, `lint`, `expo export --platform ios`. Eszközön NEM néztem meg; mockup-kép nem volt. A teljes út (Kezdőlap → tantárgy → témakör → gyakorlás) kézzel még nincs végigpróbálva.
**Nyitva maradt:** a témakör „kész" állapota a kipróbált arányon alapul (D-026), nem az elsajátításon; a témakör sorszáma a tankönyvi sorrendben a listabeli hely, nem a tankönyvi fejezetszám (az `Topic.book` oldalszám nem jelenik meg); kicsi képernyőn a jobb alsó maskot ráfedhet az utolsó sorra (alsó térköz 140pt).
**Commit:** `feat: témaválasztó`

## 2026-10-12 – Tantárgyválasztó

**Mit:** A `design-prompts.md` 2. promptja szerint, de a CLAUDE.md-nek megfelelően **4 kártya 2×2-es rácsban** (a prompt még 3 kártyát ír, lásd feladat a Design szakaszban): felül kerek vissza gomb, középen „Válassz tantárgyat!", jobbra kis maskot. Kártyánként színes kör (Nyelvtan: barack „Aa", Helyesírás: rózsa „ly", Matek: türkiz „12", Környezet: zsálya levél), cím, haladássáv és „N témakör". A haladás a kipróbált feladatok aránya (`lib/progress.ts` `seenRatio`, 5 teszt). Mind a négy kártya éles, nincs „hamarosan" állapot. A kártya a `/subject/[id]` útra visz.
**Fájlok:** `app/subjects.tsx`, `app/subject/[id].tsx` (ÁTMENETI), `components/ui/SubjectCard.tsx`, `components/ui/BackButton.tsx`, `components/ui/Icons.tsx` (+BackIcon, LeafIcon), `constants/subjects.ts`, `lib/progress.ts`, `lib/progress.test.ts`
**Tesztelve:** `npm test` 42/42, `typecheck`, `lint`, `expo export --platform ios`. Eszközön NEM néztem meg; mockup-kép nem volt, az arányok közelítések.
**Nyitva maradt:** a `/subject/[id]` ÁTMENETI (következő feladat: Témaválasztó); a `subjects[].available` mező nincs használva (mind éles); a haladás „kipróbált" és nem „elsajátított" — lásd D-026.
**Commit:** `feat: tantárgyválasztó`

## 2026-10-12 – Kezdőlap (+ tabok)

**Mit:** A `design-prompts.md` 1. promptja szerint: bal oldalt a maskot puha talapzaton, kis lebegő díszekkel; jobb oldalt „Szia Kira!" (poros rózsa), almondat, két statisztika-pirula (napos sorozat, XP), mai cél sáv (zsálya zöld) és a nagy „Kezdjük!" gomb. Álló módban és telefonon egymás alatt. Alul két tab: Kezdőlap és Jutalmak. A kijelzett sorozat `currentStreak()` (3 teszt): ha tegnap óta nem gyakorolt, 0-t mutat, nem a régi számot. A `startDay()` induláskor lefut (betöltés után). A „Kezdjük!" a `/subjects` útra visz. Az ideiglenes próbaoldal (feladat-galéria) törölve, a gyakorló kör innentől a valódi útvonalon érhető el.
**Fájlok:** `app/(tabs)/_layout.tsx`, `app/(tabs)/index.tsx`, `app/(tabs)/rewards.tsx` (ÁTMENETI), `app/subjects.tsx` (ÁTMENETI), `app/index.tsx` (törölve), `components/ui/Icons.tsx`, `components/ui/StatPill.tsx`, `components/ui/ProgressBar.tsx` (`tone`), `lib/streak.ts`, `lib/streak.test.ts`
**Tesztelve:** `npm test` 37/37, `typecheck`, `lint`, `expo export --platform ios`. Eszközön NEM néztem meg; mockup-kép nem volt, a prompt szöveges leírása alapján készült, ezért az arányok közelítések.
**Nyitva maradt:** a Jutalmak és a Tantárgyválasztó ÁTMENETI helyettesítő (utóbbi a következő feladat); a mai cél egyelőre „1 gyakorlókör" (a Motivációs rétegben lévő napi cél sor még nyitott); ha lesz mockup, az arányokat egyeztetni kell.
**Commit:** `feat: kezdőlap és tabok`

## 2026-10-12 – Gyakorló képernyő (+ maskot, haptika)

**Mit:** `app/practice/[topicId].tsx`: felül kilépés + haladássáv + számláló, középen az `ExerciseRenderer`, alul sáv a maskottal, üzenettel és „Tovább" / „Befejezés" gombbal. Válasz után: haptika (siker / figyelmeztetés), a maskot `celebrate` / `encourage` állapotra vált, a válasz a `reviewStore`-ba kerül (Leitner), hibánál „Majdnem! Nézd meg így:" terrakotta felirattal. A kör az esedékes ismétlésekből + újakból áll (max. 10). Kör végén XP jóváírás és sorozat frissítés (`progressStore`). Üres eset: „Ebből a témából ma már mindent átnéztél." Az üzleti logika a `hooks/usePracticeSession.ts`-ben van, a kör állapota a `sessionStore`-ban (nem perzisztált). Új: `components/mascot/Mascot.tsx` (4 állapot), `hooks/useStoresHydrated.ts`. A próbaoldalon (`app/index.tsx`) négy gomb indít gyakorlókört, tantárgyanként az első témakörben.
**Fájlok:** `app/practice/[topicId].tsx`, `hooks/usePracticeSession.ts`, `hooks/useStoresHydrated.ts`, `store/sessionStore.ts`, `components/mascot/Mascot.tsx`, `app/index.tsx`, `eslint.config.js` (`.expo/` kiszedve a lintből)
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`. Adatellenőrzés: nincs üres témakör a `sort-into-groups` kiszűrése után sem. Eszközön, AsyncStorage-perzisztenciával és a teljes körrel NEM próbáltam.
**Nyitva maradt:** (1) az ÁTMENETI kör végi összegzés az Eredmény képernyő feladatra vár (a kilépés ✕-szel XP nélkül zár; a már megválaszolt feladatok a Leitnerben megmaradnak); (2) három témakör rövidebb 8 feladatnál, amíg a `SortIntoGroups` nincs kész: `nyelvtan-mit-fejeznek-ki` (1), `matek-valogatas` (4), `kornyezet-allatok` (7); (3) füzetes mód (`paper`) még nincs; (4) hangeffektek még nincsenek, a Haptika viszont kész; (5) a maskot nem animált.
**Commit:** `feat: gyakorló képernyő maskottal és haptikával`

## 2026-10-12 – `ExerciseRenderer`

**Mit:** Egy belépési pont a feladatok megjelenítéséhez: a `type` alapján választ komponenst, kimerítő `switch`-csel (új feladattípusnál a fordító szól, ha nincs lekezelve). A próbaoldal már csak ezt használja, típusonként 3 feladattal.
**Fájlok:** `components/exercise/ExerciseRenderer.tsx`, `app/index.tsx` (próbaoldal)
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`. Eszközön NEM néztem meg.
**Nyitva maradt:** a `sort-into-groups` ágon ÁTMENETI helyettesítő szöveg van („hamarosan érkezik"), mert a `SortIntoGroups` még nincs kész – a gyakorló képernyő összeállításánál ezt a típust addig ki kell szűrni, különben 96 feladat zsákutcába vezet. A füzetes mód (`paper`) szintén nincs bekötve: a 133 füzetes számbeírós feladat most a sima `NumericInput`-ot kapja.
**Commit:** `feat: ExerciseRenderer`

## 2026-10-12 – `MatchPairs` komponens

**Mit:** Párosítás érintéssel, két oszlopban: előbb a bal oldali elemet kell megérinteni (kiemelődik), aztán a hozzá tartozó jobb oldalit. Jó pár: mindkettő zöld és zárolódik. Rossz pár: a két elem rövid ideig (0,7 mp) terrakottára vált, a kijelölés megszűnik, újra lehet próbálni. A jobb oldal kevert, de sosem egyezik a bal oldali sorrenddel. A feladat akkor számít helyesnek, ha egyetlen rossz párosítás nélkül sikerült (`onAnswer` az utolsó pár után hívódik). Az `AnswerButton` új `selected` állapotot kapott. A keverés közös: `lib/shuffle.ts` (3 teszt), a `lib/leitner.ts` is ezt használja.
**Fájlok:** `components/exercise/MatchPairs.tsx`, `lib/shuffle.ts`, `lib/shuffle.test.ts`, `lib/leitner.ts`, `components/ui/AnswerButton.tsx`, `app/index.tsx` (próbaoldal)
**Tesztelve:** `npm test` 34/34, `typecheck`, `lint`, `expo export --platform ios`. Eszközön NEM néztem meg. Adat: 32 feladat, 4 vagy 5 párral, a leghosszabb elem 28 karakter.
**Nyitva maradt:** a hosszú elemek (28 karakter) álló telefonon, fél szélességű oszlopban tördelődnek, eszközön ellenőrizendő. Hibázás után nincs „helyes megoldás" mutatás, mert a gyerek addig próbálkozik, amíg ki nem jön – lásd D-022.
**Commit:** `feat: MatchPairs feladatkomponens`

## 2026-10-12 – `OrderItems` komponens

**Mit:** Sorbarendezés érintéssel: a gyerek a sorrendben megérinti az elemeket, azok a sorszámozott helyekre kerülnek; egy betett elemre érintve visszakerül. Ha minden hely tele van, a „Kész" gomb élesedik. Ellenőrzés után a helyek pozíciónként zöldek/terrakottaszínűek, hibánál „Helyes sorrend: a → b → c". A `hint` itt utasítás (27 feladatnál van, pl. ábécésorrend), a kártya tetején jelenik meg; ha nincs, „Tedd sorrendbe az elemeket!". Az ellenőrzés `lib/answers.ts` `isOrderCorrect()`, 3 teszttel.
**Fájlok:** `components/exercise/OrderItems.tsx`, `lib/answers.ts`, `lib/answers.test.ts`, `app/index.tsx` (próbaoldal)
**Tesztelve:** `npm test` 31/31, `typecheck`, `lint`, `expo export --platform ios`. Eszközön NEM néztem meg. Adat: 42 feladat, 3–5 elemmel, egyik sem érkezik már rendezetten, nincs ismétlődő elem (így az elemek szövege egyértelműen azonosít).
**Nyitva maradt:** Nincs húzás (drag), csak érintés – lásd D-021.
**Commit:** `feat: OrderItems feladatkomponens`

## 2026-10-12 – `Punctuation` komponens

**Mit:** Mondatvégi írásjel: a mondat után szaggatott keretű rés, a három írásjel (`.` `?` `!`) egy sorban, nagy (44pt) gombokon. Válasz után a rés és a gombok zöld/terrakotta jelzést kapnak. Az `AnswerButton` új, opcionális `large` propot kapott a rövid jelekhez (a meglévő használat nem változik).
**Fájlok:** `components/exercise/Punctuation.tsx`, `components/ui/AnswerButton.tsx`, `app/index.tsx` (próbaoldal)
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`. Eszközön NEM néztem meg. Adat: 15 feladat, mind `. ? !` opcióval, a mondat legfeljebb 31 karakter.
**Nyitva maradt:** a felirat („Milyen írásjel kerül a mondat végére?") a komponensben van, ha a gyakorló képernyő saját utasítássort kap, innen kivehető.
**Commit:** `feat: Punctuation feladatkomponens`

## 2026-10-12 – `MissingLetter` komponens

**Mit:** Hiányzó betűs feladat: nagy (48pt) szó, a hiányzó rész helyén szaggatott keretű rés, ahová a választott betű kerül. A rés zöld/terrakotta lesz, a gombok ugyanúgy jelzik a helyes választ, mint a `MultipleChoice`-nál. A `hint` mind a 70 feladatnál van, és kitalálós nyom (pl. „Ezen mész be az udvarra."), ezért a feladat mellett már válasz előtt látszik, halványan. Fekvő iPaden bal oldalt a szó, jobb oldalt a két betű; álló módban egymás alatt.
**Fájlok:** `components/exercise/MissingLetter.tsx`, `app/index.tsx` (próbaoldal)
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`. Eszközön NEM néztem meg. Adat: 70 feladat, mind pontosan 2 opcióval, a szó legfeljebb 6 betűs.
**Nyitva maradt:** A többbetűs opciók (`ly`, `yu`) elférnek a résben, de a 48pt-os szó hosszabb szavaknál tördelődhet álló telefonon, eszközön ellenőrizendő. A próbaoldal „Majdnem! Nézd meg így:" szövege ideiglenes, a gyakorló képernyő adja a végleges visszajelzést.
**Commit:** `feat: MissingLetter feladatkomponens`

## 2026-10-12 – `NumericInput` és `NumberPad`

**Mit:** Számbeírásos feladat saját számbillentyűzettel (1–9, törlés, 0, „Kész"; 68pt magas gombok, nincs rendszerbillentyűzet). A kérdés alatt nagy kijelző mutatja a beírtat a mértékegységgel; „Kész" után zöld/terrakotta lesz, hibánál kiírja: „Helyes válasz: …". Fekvő iPaden bal oldalt a feladat, jobb oldalt a billentyűzet. A javítás tiszta függvény: `lib/answers.ts` `isNumericCorrect()` (tűréssel), 6 teszttel. A próbaoldal már vegyesen mutat feleletválasztós és számbeírós feladatokat.
**Fájlok:** `components/exercise/NumericInput.tsx`, `components/ui/NumberPad.tsx`, `lib/answers.ts`, `lib/answers.test.ts`, `app/index.tsx`
**Tesztelve:** `npm test` 28/28, `typecheck`, `lint`, `expo export --platform ios`. Eszközön NEM néztem meg. Adatelemzés: mind a 756 válasz nemnegatív egész, legfeljebb 4 számjegyű, 7-nek van tűrése, 125-nek mértékegysége, 133 `paper`.
**Nyitva maradt:** a 133 `paper: true` feladat ugyanezt a komponenst kapja, amíg el nem készül a füzetes mód képernyője („Vedd elő a füzeted!", nincs időnyomás); nincs tizedes- és negatív szám támogatás (az adatban nincs ilyen). A „⌫" jel rendszerbetűvel jelenik meg (a Nunito nem tartalmazza), eszközön ellenőrizendő.
**Commit:** `feat: NumericInput és NumberPad`

## 2026-10-12 – `MultipleChoice` komponens

**Mit:** Feleletválasztós feladat. Fekvő iPaden (szélesebb mint magas, ≥700pt) bal oldalt a kérdés, jobb oldalt a válaszok; álló módban és telefonon egymás alatt (`useWindowDimensions`). Válasz után zár: a választott gomb zöld/terrakotta, hibánál a helyes is zöldre vált. Közös szerződés minden típusnak: `components/exercise/types.ts` (`ExerciseProps<T>`). Az `app/index.tsx` ideiglenes próbaoldala az összes valódi feleletválasztós feladaton végigmegy, „Tovább" gombbal.
**Fájlok:** `components/exercise/types.ts`, `components/exercise/MultipleChoice.tsx`, `app/index.tsx`
**Tesztelve:** `typecheck`, `lint`, `validate`, `expo export --platform ios` (a `data/` bundle-be kerül). Eszközön NEM néztem meg, iPad fekvő elrendezést sem.
**Nyitva maradt:** haptika, hang és maskot reakció (a Motivációs réteg sorai, a szülő képernyő dolga); a visszajelző szöveg és a „Tovább" gomb a gyakorló képernyőre kerül; a válaszok sorrendje fix (az adatban megadott), nincs keverés. A próbaoldalt a Kezdőlap feladat cseréli le.
**Commit:** `feat: MultipleChoice feladatkomponens`

## 2026-10-12 – Alap UI komponensek

**Mit:** `Card` (surface, 24px sarok, lágy árnyék), `AnswerButton` (min. 60pt, 22pt Nunito 600, `idle` / `correct` zsálya / `wrong` terrakotta állapot, lenyomáskor kicsit összenyomódik), `ProgressBar` (0–1 érték, rózsa kitöltés). Az árnyék közös: `constants/shadows.ts`. Az `app/index.tsx` ideiglenes próbaoldal a három komponenssel.
**Fájlok:** `components/ui/Card.tsx`, `AnswerButton.tsx`, `ProgressBar.tsx`, `constants/shadows.ts`, `app/index.tsx`
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`. Eszközön a megjelenést még NEM néztem meg.
**Nyitva maradt:** az `app/index.tsx` próbaoldalt a Kezdőlap feladat cseréli le (ne maradjon ship előtt). A hibás válasz „helyes válasz mutatása" a feladatkomponensek dolga. A `ProgressBar` nem animált, a gyakorló képernyőnél érdemes Reanimated-re cserélni.
**Commit:** `feat: alap UI komponensek`

## 2026-10-12 – Nunito betűtípus

**Mit:** `@expo-google-fonts/nunito` + `expo-font` telepítve. A gyökér layout betölti a 400/600/700 súlyt, és a splash addig marad, amíg kész (hiba esetén is továbbindul). A Tailwindben `font-title` (700), `font-task` (600), `font-body` (400) osztályok. A kezdőlap próbaszövege `font-title`-t használ.
**Fájlok:** `app/_layout.tsx`, `tailwind.config.ts`, `app/index.tsx`, `package.json`, `app.json` (az `expo install` felvette az `expo-font` plugint)
**Tesztelve:** `typecheck`, `lint`, `expo export --platform ios`: a bundle csak a három .ttf-et tartalmazza. Eszközön a megjelenést még NEM néztem meg.
**Nyitva maradt:** `expo-audio` jóváhagyva, de még nincs telepítve (a hangeffektek feladatánál jön).
**Commit:** `feat: Nunito betűtípus betöltése`

## 2026-10-12 – `reviewStore` (Leitner kártyák)

**Mit:** Zustand store AsyncStorage perzisztenciával: `cards: Record<exerciseId, { box, dueAt }>` és `recordAnswer(exerciseId, correct, today)`, ami a `lib/leitner.ts` `answerCard()`-ját hívja. A kör összeállításához a `cards` közvetlenül átadható a `selectSessionExercises`-nek.
**Fájlok:** `store/reviewStore.ts`
**Tesztelve:** `typecheck`, `lint`. A perzisztenciát eszközön NEM próbáltam.
**Nyitva maradt:** `sessionStore` (az aktuális kör, nem perzisztált) a gyakorló képernyő feladatánál jön; nincs "adatok törlése" művelet (szülői beállítás, v1-ben nem kell).
**Commit:** `feat: reviewStore`

## 2026-10-12 – `progressStore` (XP, sorozat, jelvények)

**Mit:** Zustand store AsyncStorage perzisztenciával: `xp`, `streak`, `lastPracticeDate`, `unlockedBadges`, `dailyGoalDone`. Akciók: `completeSession(xp, today)`, `startDay(today)` (új napon nyitja a napi célt), `unlockBadge(id)`. A sorozatszámítás tiszta függvény a `lib/streak.ts`-ben, 5 teszttel.
**Fájlok:** `store/progressStore.ts`, `lib/streak.ts`, `lib/streak.test.ts`, `lib/leitner.ts` (az `addDays` exportálva)
**Tesztelve:** `npm test` 22/22, `typecheck`, `lint`. A store perzisztenciáját eszközön NEM próbáltam.
**Nyitva maradt:** a „mentőöv" nap havonta (külön sor a Motivációs rétegben, a `nextStreak` bővítendő); a `startDay` hívása az app indulásakor még nincs bekötve; a jelvények feltételei.
**Commit:** `feat: progressStore és sorozatszámítás`

## 2026-10-12 – Leitner-ismétlés (`lib/leitner.ts`)

**Mit:** Tiszta függvények: `nextBox()`, `dueDate()`, `selectSessionExercises()`, plusz a `answerCard()` (a kártya új állapota egy válasz után) és a `toDay()` (helyi nap szövegként). 17 unit teszt `node:test`-tel. Új `npm test` script.
**Fájlok:** `lib/leitner.ts`, `lib/leitner.test.ts`, `package.json`
**Tesztelve:** `npm test` 17/17, `typecheck`, `lint` tiszta. Határesetek: hónap-/évhatár, nyári időszámítás, 5. doboz plafon, rontás bárhonnan az 1. dobozba, kör mérete, nem esedékes kártya nem számít újnak, bemenet nem módosul.
**Nyitva maradt:** A `reviewStore` még nincs megírva (a következő sor). D-017 még nyitott: az `expo-audio` jóváhagyva ("mehet"), de nincs telepítve (a hangfeladatnál jön); a Nunito forrásáról még nem döntöttél.
**Commit:** `feat: Leitner-ismétlés unit tesztekkel`

## 2026-10-12 – Projekt setup (Expo SDK 57 + NativeWind)

**Mit:** Az Expo váz felépítve a meglévő tartalom mellé (a `create-expo-app` ideiglenes mappában futott, hogy ne írjon felül semmit). Git init + "init" commit a meglévő tartalommal. Telepítve: expo-router, NativeWind 4 (+ tailwind 3), reanimated + worklets, gesture-handler, svg + svg-transformer, haptics, async-storage, zustand. Színtokenek egy helyen (`constants/colors.ts`), a Tailwind config ebből olvas. Minimális `app/_layout.tsx` + `app/index.tsx` (maskot + „Szia Kira!") bizonyítja, hogy a NativeWind osztályok és a központi képimport működnek.
**Fájlok:** `app.json`, `package.json`, `tsconfig.json`, `babel.config.js`, `metro.config.js`, `tailwind.config.ts`, `global.css`, `app-env.d.ts`, `svg.d.ts`, `eslint.config.js`, `constants/colors.ts`, `constants/images.ts`, `app/_layout.tsx`, `app/index.tsx`, ikon/splash assetek
**Tesztelve:** `npm run typecheck`, `npm run lint`, `npm run validate` (1574 feladat, 66 témakör, hiba nélkül), `expo export --platform ios` lefut. Eszközön/szimulátoron még NEM futtattam.
**Nyitva maradt:** Nunito betűtípus (D-017), hangeffektek könyvtára (D-017), GitHub push (kérésre), a `(tabs)` struktúra (a kezdőlap feladatnál jön), `GestureHandlerRootView` a drag & drop feladatnál, szimulátoros próba.
**Commit:** `setup: Expo, NativeWind, svg, színtokenek, lint és typecheck`

## 2026-10-12 – Matek és környezet feladatbank, hetedik feladattípus

**Mit:** A bank 420-ról 1574 feladatra nőtt. Új `numeric-input` típus
számbillentyűzettel, és új `paper` jelző a füzetben megoldandó feladatokhoz.
Matek: 28 témakör 895 feladattal (OH-MAT03TB). Környezet: 19 témakör 259
feladattal (OH-KOR03TA). A mechanikus tartalom (szorzótábla, maradékos osztás,
fejben számolás, írásbeli műveletek) számítva készül, nem kézzel listázva.

**Fájlok:** `types/exercise.ts`, `data/builders.ts`, `data/index.ts`,
`data/matek/*` (12 fájl + index), `data/kornyezet/*` (3 fájl + index),
`scripts/validate.ts`, `README.md`

**Tesztelve:** `tsc --noEmit` strict + `noUncheckedIndexedAccess` alatt tiszta;
`validate.ts` hiba nélkül fut. A számtani kiértékelőt szándékos hibákkal
teszteltem: elkapta őket, és közben kiderült egy saját hibája (a `(hányados)`
utótagot levágó regex a `6 × (10 − 4)` zárójelét is levágta, így azok a
feladatok csendben kimaradtak az ellenőrzésből) — javítva.

**Nyitva maradt:** Hét feladattípus-komponensből egy sincs megírva. A füzetes
mód külön képernyőt igényel. A `design-prompts.md` még 3 kártyát ír.

**Commit:** `content: matek és környezet feladatbank, numeric-input típus`

## 2026-10-12 – Feladatbank átstrukturálása a tankönyv szerint

**Mit:** A nyelvtan tankönyv tartalomjegyzéke alapján a bank 250-ről 420
feladatra nőtt, és két tantárgyra vált szét. A szócsoportok elnevezése a
tankönyvhöz igazodott (szófaji szakszavak helyett leíró nevek). A `Topic` kapott
egy `book` mezőt a tankönyvi oldalszámnak, és a validátor ellenőrzi, hogy az
`order` ne mondjon ellent neki. Öt új nyelvtani témakör készült, a `match-pairs`
típus megtelt.

**Fájlok:** `types/exercise.ts`, `data/index.ts`, `data/nyelvtan/*` (16 fájl +
index), `data/helyesiras/*` (3 fájl + index), `scripts/validate.ts`, `README.md`

**Tesztelve:** `tsc --noEmit` tiszta, `validate.ts` hiba nélkül fut. A validátor
futás közben talált egy valós hibát (két azonos opció a `fokozas` 16.
feladatában), javítva.

**Nyitva maradt:** A `match-pairs` komponens még nincs megírva.

**Commit:** `content: feladatbank átstrukturálása a tankönyv fejezetei szerint`

---
---

# Döntésnapló

Ide kerül minden nem triviális döntés, amit később meg lehetne kérdőjelezni.
Sorszámozva (`D-001`, `D-002`, …), hogy commit üzenetből hivatkozni lehessen rá.

**Egy döntés egy bekezdés.** A *miért* mindig legyen benne, és az is, hogy mi volt
a másik szóba jöhető opció.

---

## D-001 – Nincs adatbázis a v1-ben
**Dátum:** 2026-09-09
**Döntés:** A haladás és a Leitner-állapot AsyncStorage-ban tárolódik, a feladatbank hardcoded TypeScript fájlokban. Nincs Supabase, nincs hálózati hívás.
**Miért:** Egy gyerek, egy eszköz. Offline működés mellett nincs hálózati hibalehetőség gyakorlás közben, nincs adatvédelmi kérdés, és nincs havidíj. A store-okat úgy tervezzük, hogy később rá lehessen tenni egy szinkron-réteget.
**Alternatíva:** A meglévő familyBudget Supabase projekt újrahasználása. Elvetve: pénzügyi adat mellé gyerekapp táblákat keverni közös migrációs historyval és backuppal később fájt volna. Ha kell DB, külön Supabase projekt legyen (az ingyenes csomagban két aktív projekt fér el).
**Visszavonható?** Igen, v2-ben szinkron-réteggel.

## D-002 – Nincs futásidejű LLM hívás
**Dátum:** 2026-09-09
**Döntés:** A feladatbank generálása build-time történik (kézzel vagy külön generátor scripttel), az eredmény commitolva van a repóba.
**Miért:** Költség, latency, és legfőképp ellenőrizetlen kimenet. Gyerekappban minden feladatszövegnek átnézettnek kell lennie.
**Alternatíva:** Élő API hívás végtelen feladatért. Elvetve a fentiek miatt, és mert offline működést zárt volna ki.
**Visszavonható?** Igen, de csak szülői előszűréssel.

## D-003 – iPad-first, `requireFullScreen: true`
**Dátum:** 2026-09-09
**Döntés:** Az app elsődleges célpontja az iPad, fekvő layouttal. A `requireFullScreen: true` tiltja a Slide Overt és a Split View-t.
**Miért:** A gyerek iPaden fogja használni, és a többablakos mód félbevágná a gyakorlóképernyőt, ami rontja a drag & drop feladatok használhatóságát. Egyben figyelemelterelés-védelem is.
**Alternatíva:** Multitasking támogatása reszponzív layouttal. Elvetve: több munka, és itt kifejezetten nem előny.
**Visszavonható?** Igen, egy app.json módosítással.

## D-004 – Első tantárgy: nyelvtan
**Dátum:** 2026-09-09
**Döntés:** A v1 csak nyelvtant tartalmaz élesben, a matek és környezetismeret kártyája látszik, de „hamarosan" állapotban.
**Miért:** A munka 80%-a a tartalom, nem a kód. Egy tantárggyal végigvinni a teljes flow-t gyorsabban ad használható appot, és a feladatmotor kiderül élesben, mielőtt három tantárgyra skálázzuk.
**Alternatíva:** Mindhárom tantárgy egyszerre, kevesebb feladattal fejenként. Elvetve: híg tartalom mindenhol, és a Leitner-ismétlésnek kell egy elég nagy bank ahhoz, hogy értelmes legyen.
**Visszavonható?** Igen, a v2 hozza a matekot.
**Kiegészítés (2026-10-12):** megdőlt. A tankönyvek megérkezésével mind a négy tantárgy feladatbankja elkészült egy menetben, mert a tartalomgyártás sokkal gyorsabb volt a vártnál (a mechanikus részek számíthatók, lásd D-013). A kód továbbra sincs elkezdve, tehát a „végigvinni egy tantárggyal" indok nem veszett el: a komponenseket továbbra is a nyelvtan feladattípusaival érdemes először kipróbálni.

## D-005 – Leitner-ismétlés, nem véletlenszerű feladatsor
**Dátum:** 2026-09-09
**Döntés:** A gyakorlókör összeállítása Leitner-dobozok alapján történik (1-3-7-14 nap), a hibás válasz visszateszi a kártyát az 1. dobozba.
**Miért:** Ez az app egyetlen valódi pedagógiai értéke — enélkül csak véletlen feladatokat kérdez, és pont azt nem gyakoroltatja, amit Kira nem tud.
**Alternatíva:** Egyszerű véletlen kiválasztás témakörön belül. Elvetve: nem célozza a gyenge pontokat.
**Visszavonható?** Nem érdemes — ez a termék lényege.

## D-006 – Hibajelzés terrakotta, nem piros; a maskot soha nem szomorú
**Dátum:** 2026-09-09
**Döntés:** A hibás válasz jelzése `#E07A5F` terrakotta, a maskot biztató arcot vág, a szöveg soha nem szemrehányó.
**Miért:** A projekt fő problémája a motiváció hiánya. A piros jelzés és a csalódott karakter szorongást kelt harmadikban, ami pont a gyakorlástól tántorítana el.
**Alternatíva:** Klasszikus piros/zöld visszajelzés, életek rendszer. Elvetve: bevált játékmechanika, de rossz ehhez a célcsoporthoz és ehhez a célhoz.
**Visszavonható?** Igen, de nem javasolt.

## D-007 – A helyesírás külön tantárgykártya
**Dátum:** 2026-10-12
**Döntés:** A hangok időtartama, az elválasztás és a j/ly nem a nyelvtan témalistájában van, hanem saját „Helyesírás" tantárgykártyán. Ezzel a tantárgyválasztó 4 kártyás rácsra vált.
**Miért:** Ezek a témák a tankönyvben nem önálló fejezetek — a 2. osztály ismétlésében és a „Gyakorold a helyesírást!" blokkokban élnek, végig az éven szétszórva. A nyelvtan témalistájába keverve elrontanák a tanmenet-követő sorrendet, miközben pont ez a fajta spirálisan visszatérő anyag az, amire a Leitner-ismétlés való.
**Alternatíva:** Elkülönített szekció a nyelvtan témalistájának alján. Elvetve: kevesebb kattintás lett volna, de összemosta volna a „heti lecke" és az „egész éves drill" jellegű témákat.
**Visszavonható?** Igen, a `Topic.subject` mező átírásával.

## D-008 – A tankönyv terminológiája, nem a szófaji szakszavak
**Dátum:** 2026-10-12
**Döntés:** A szócsoportok neve „megnevező szó", „cselekvést kifejező szó", „tulajdonságot kifejező szó", „mennyiséget kifejező szó". A `types/exercise.ts` `SZOCSOPORT` konstansa tartja őket, és a validátor hibát dob, ha egy csoportnév szófaji szakszó.
**Miért:** A Nyelvtan és helyesírás 3. (OH-MNY03TB) ezeket az elnevezéseket használja, és a NAT kerettanterv is szándékosan kerüli a szófaji fogalmakat ezen az évfolyamon. Ha az app „főnév"-et ír, Kira olyan szót lát, amit az iskolában még nem tanult — pont az ellenkezője annak, amiért az app készül.
**Alternatíva:** A hagyományos szófajnevek, mert felsőben úgyis azokat tanulja. Elvetve: a gyakorlóapp dolga a mostani anyag megerősítése, nem a következő évek előrehozása. A bank első verziója még a szakszavakat használta, ez a döntés írta át.
**Visszavonható?** Igen, a `SZOCSOPORT` konstans átírásával — de csak akkor, ha a füzetben is megjelennek a szakszavak.

## D-009 – A szövegalkotás kimarad
**Dátum:** 2026-10-12
**Döntés:** Az app a nyelvtan-helyesírás anyagot gyakoroltatja. A magyar tantárgy másik munkafüzete (Szövegalkotás 3., OH-MNY03MB) nem kerül bele.
**Miért:** Címadás, anyaggyűjtés, mesemondás, szóismétlés kerülése — ezekre nincs egy helyes válasz, amit a Leitner-motor értékelni tudna. Egy feleletválasztóssá erőltetett szövegalkotási feladat rosszabb lenne, mint a hiánya.
**Alternatíva:** Szabad szöveges válasz valamilyen értékeléssel. Elvetve: futásidejű LLM hívás nélkül nem megoldható (lásd D-002), azzal meg nem akarjuk.
**Kivétel:** a közmondások és szólások (Szövegalkotás 3., 23. oldal) `match-pairs`-re alkalmasak, ezek később bejöhetnek.
**Visszavonható?** Részben — a közmondások igen, a szövegalkotás érdemi része nem.

## D-010 – A rajzos és építős feladatok kimaradnak
**Dátum:** 2026-10-12
**Döntés:** Nem kerül az appba: testek építése (matek 138.), tükörképek készítése (178.), kicsinyítés-nagyítás (182.), parkettázás (184.), az „Okos(k)odunk" logikai blokkok, és a környezetismeret terepgyakorlata (29. lecke).
**Miért:** Ezeknek a feladatoknak nincs ellenőrizhető válaszuk. Kockákkal építeni és papíron tükrözni kell, és az eredmény egy tárgy vagy egy rajz, amit az app nem lát. Az „Okos(k)odunk" fejtörők nyitott végűek, több jó megoldással.
**Alternatíva:** Felvenni őket leírásként, ellenőrzés nélkül. Elvetve: Kira kifejezett kérése az volt, hogy az ellenőrzés és a visszajelzés a lényeg — egy feladat, amire az app csak annyit mond, hogy „ügyes vagy", nem gyakoroltat semmit.
**Visszavonható?** Nem érdemes.

## D-011 – Hetedik feladattípus: `numeric-input`
**Dátum:** 2026-10-12
**Döntés:** Új feladattípus számbillentyűzettel. A `unit` mező a mértékegységes válaszokhoz, a `tolerance` a becsléses feladatokhoz (ott egy sáv a jó válasz).
**Miért:** A szorzótáblára a feleletválasztós alkalmatlan. A `7 × 8 = ?` négy opcióval kitippelhető, és akkor Kira a kizárásos módszert gyakorolja a szorzótábla helyett. Ez a típus lett a legtöbbet használt az appban (756 feladat).
**Alternatíva:** Maradni a hat meglévő típusnál, és kihagyni a szorzótáblát. Elvetve: az vette volna el a matek feladatbank értelmét.
**Visszavonható?** Nem.

## D-012 – A megoldás lehet offline, a válasz nem
**Dátum:** 2026-10-12
**Döntés:** Egy feladat bekerülhet az appba akkor is, ha füzetben kell megoldani — feltéve, hogy a végeredmény szám vagy választás. Ezek `paper: true` jelzővel mennek, és külön képernyőt kapnak: nincs időnyomás, „Vedd elő a füzeted!" jelzés, a maskot vár és nem sürget.
**Miért:** Ez nyitotta meg a szöveges feladatokat és az írásbeli műveleteket. Az írásbeli összeadás lényege, hogy egymás alá írja és oszloponként számol — fejben megoldva pont azt nem gyakorolja, amiért a fejezet van. A papír nem korlát, hanem a feladat része.
**Alternatíva:** Csak a fejben megoldható feladatokat felvenni. Elvetve: kimaradt volna a matek egyik fele.
**Visszavonható?** Nem érdemes.

## D-013 – A mechanikus tartalom számítva készül, nem kézzel listázva
**Dátum:** 2026-10-12
**Döntés:** A szorzótábla, a maradékos osztás, a fejben számolás és az írásbeli műveletek feladatai futásidőben számított tömbökként állnak elő a data fájlokban, nem begépelt listaként.
**Miért:** 200+ szorzat kézi begépelése garantáltan hozott volna hibás eredményt, és a validátor sem fogta volna meg — nincs mihez hasonlítania. Így a szorzat definíció szerint helyes. Új mechanikus tartalmat is így kell generálni.
**Alternatíva:** Generátor script, ami kiírja a feladatokat fájlba. Elvetve: ugyanaz az eredmény, de egy plusz build lépéssel és egy nagy generált fájllal, amit senki nem olvas.
**Visszavonható?** Nem érdemes.

## D-014 – A validátor kiszámolja a számtani feladatokat
**Dátum:** 2026-10-12
**Döntés:** A `scripts/validate.ts` tartalmaz egy kis kifejezés-kiértékelőt. Ha egy `numeric-input` kérdés tiszta számtani kifejezés, kiértékeli és összeveti a megadott válasszal.
**Miért:** Egy elgépelt eredmény így build-time derül ki, nem Kira előtt. Jelenleg 506 feladat esik ellenőrzés alá. A maradék szöveges vagy mértékegység-váltás — azoknál a kézi gondosság az egyetlen védelem, és ezt tudni kell.
**Figyelmeztetés:** az ellenőrzőt is ellenőrizni kell. Az első verzió csendben átugrott minden zárójelre végződő kifejezést, mert a `(hányados)` utótagot levágó regex a `6 × (10 − 4)` zárójelét is levágta. Szándékos hibákkal tesztelve derült ki. Ha bővíted a validátort, teszteld szándékos hibával.
**Visszavonható?** Nem.

## D-015 – Expo SDK 57, gyökér `app/` mappa
**Dátum:** 2026-10-12
**Döntés:** A `create-expo-app` jelenlegi sablonja SDK 57-et ad `src/app` elrendezéssel; mi a CLAUDE.md szerinti gyökér `app/`, `components/` stb. struktúrát tartjuk, a sablon demó kódját nem vettük át. Az `app.json`-ban `orientation: "default"` (fekvő és álló is), `userInterfaceStyle: "light"` (a paletta csak világos), `typedRoutes` be.
**Miért:** A CLAUDE.md mappastruktúrája a forrás; a demó komponensek (themed-text, tabs, web badge) nem kellenek.
**Alternatíva:** `src/` elrendezés a sablon szerint. Elvetve: eltér a dokumentált struktúrától.
**Visszavonható?** Igen.

## D-016 – NativeWind 4 + Tailwind 3, a config TypeScript
**Dátum:** 2026-10-12
**Döntés:** A stabil NativeWind 4.2.7-et használjuk Tailwind 3.4-gyel (az 5-ös csak rc). A `tailwind.config.ts` a `constants/colors.ts`-ből olvas, így a tokenek egyetlen helyen élnek. A `nativewind/preset` importja `@ts-expect-error`-t kap, mert a csomag nem exportál típust. A `lint` script `eslint .` (az `expo lint` elhasalt a még üres `components/` mappán).
**Miért:** CLAUDE.md: a színek legyenek `constants/colors.ts`-ben és a NativeWind themeben is; kettős karbantartás helyett egy forrás. Stabil verzió egy gyerekappnál.
**Alternatíva:** `tailwind.config.js` másolt hex értékekkel. Elvetve: a két lista előbb-utóbb eltérne.
**Visszavonható?** Igen.

## D-017 – Hang- és betűtípus-könyvtár: `expo-audio`, `@expo-google-fonts/nunito`
**Dátum:** 2026-10-12
**Döntés:** Hanghoz `expo-audio` az `expo-av` helyett (jóváhagyva, telepítés a hangfeladatnál). Nunito-hoz a `@expo-google-fonts/nunito` csomag (telepítve), súlyonkénti importtal, hogy csak a 400/600/700 kerüljön a bundle-be.
**Miért:** Az `expo-av` utolsó kiadása (16.x) nem az SDK 57-hez készült, az `expo-audio` a támogatott utód. A betűcsomag kényelmesebb, mint a kézzel bemásolt .ttf-ek, és a verziót az `expo install` kezeli.
**Alternatíva:** Kézzel bemásolt .ttf fájlok az `assets/fonts/`-ba (nincs extra csomag, de karbantartandó fájlok); `expo-av` 16.x erőltetése (összeférhetetlenségi kockázat).
**Megjegyzés:** a CLAUDE.md tech stack szakasza még `expo-av`-t említ, ezt érdemes `expo-audio`-ra átírni.
**Visszavonható?** Igen.

## D-018 – `react-dom` pin és TypeScript 6
**Dátum:** 2026-10-12
**Döntés:** `react-dom@19.2.3` devDependency-ként rögzítve, `typescript@~6.0.3` (az Expo ezt várja).
**Miért:** Pin nélkül az npm `react-dom@19.3`-at próbált húzni, ami `react@19.3`-at kér, és minden további `npm i` ERESOLVE hibával elhasalt. Nem fő függőség (nem számít a 10-es limitbe), az app nem használ webet.
**Alternatíva:** `legacy-peer-deps` az `.npmrc`-ben. Elvetve: elfedne valódi konfliktusokat is.
**Visszavonható?** Igen.

## D-019 – Leitner: `node:test`, helyi nap szövegként, átadott „ma"
**Dátum:** 2026-10-12
**Döntés:** A tesztek `node:test`-tel futnak `tsx` alatt (nincs új függőség). A `dueAt` és a „ma" helyi nap, "ÉÉÉÉ-HH-NN" szövegként; a függvények a mát paraméterként kapják, nem hívják a `new Date()`-et. A dobozok típusa `Box = 1|2|3|4|5`. Az 1. doboz intervalluma 0 nap, tehát a rontott feladat még aznap (következő körben) visszajöhet. Az új feladatok keverése `random` paraméterrel cserélhető.
**Miért:** A CLAUDE.md szerint a modul tiszta, UI és storage nélkül; a dátum átadásával determinisztikusan tesztelhető. A szöveges nap AsyncStorage-ban JSON-barát és időzónaproblémát nem okoz (a Date-alapú dueAt éjfél körül elcsúszna). A `jest` Expo-s beállítása több függőség és konfiguráció egyetlen tiszta modulért.
**Alternatíva:** `jest` + `jest-expo`. Elvetve a fenti okból; ha később komponenseket is tesztelünk, érdemes újragondolni.
**Visszavonható?** Igen.

## D-020 – Feladatkomponens-szerződés: `onAnswer(correct)`, a visszajelzés a szülőé
**Dátum:** 2026-10-12
**Döntés:** Minden feladattípus-komponens `{ exercise, onAnswer(correct) }` propokat kap. A komponens egyszer hívja az `onAnswer`-t, utána lezár, és csak a saját válaszkijelzését (zöld/terrakotta, helyes válasz mutatása) intézi. Haptika, hang, maskot, visszajelző szöveg és a „Tovább" a gyakorló képernyő dolga. Új feladatnál a szülő `key={exercise.id}`-t ad, hogy a belső állapot nullázódjon.
**Miért:** Hét komponens ugyanazt a visszajelzést nem másolhatja; egy helyen (szülő) a motivációs réteg egységes marad, a komponensek pedig egyszerűek és külön próbálhatók.
**Alternatíva:** Mindegyik komponens maga hívja a haptikát és a maskotot. Elvetve: hétszeres ismétlés.
**Visszavonható?** Igen.

## D-021 – Sorbarendezés érintéssel, nem húzással
**Dátum:** 2026-10-12
**Döntés:** Az `OrderItems` nem drag & drop, hanem „érintsd sorban az elemeket" jellegű. A betett elemet érintéssel lehet visszavenni. Húzás csak a `SortIntoGroups`-hoz készül (ott nincs jó érintéses megoldás).
**Miért:** Az érintés pontosabb gyerekujjnak, nem igényel Gesture Handlert és Reanimated animációt, nincs „félrecsúszó" elem, és elérhetőbb (VoiceOver). A feladat tárgya a sorrend ismerete, nem a mozgatás ügyessége. A CLAUDE.md a komponens módját nem rögzíti.
**Alternatíva:** Húzással átrendezhető lista. Elvetve: több kód és több hibalehetőség ugyanazért a tanulási eredményért. Ha Kira unalmasnak találja, később cserélhető, a szerződés (`exercise`, `onAnswer`) nem változik.
**Visszavonható?** Igen.

## D-022 – Párosításnál a hibázás nem zár, csak számít
**Dátum:** 2026-10-12
**Döntés:** A `MatchPairs` rossz párosításnál nem fejezi be a feladatot és nem mutatja meg a megoldást: a gyerek újra próbálhat. A Leitner-motornak adott eredmény `mistakes === 0`, tehát egy rossz próbálkozás is „hibásnak" számít, és a feladat visszakerül az 1. dobozba.
**Miért:** Párosításnál a kizárásos módszer eleve működik (az utolsó pár adott), ezért egy hibázás utáni „vége, itt a megoldás" csak büntetne. A Leitner-jelzés ugyanakkor őszinte marad: amit elsőre nem tudott, azt gyakorolnia kell.
**Alternatíva:** Az első hibánál lezárni és mutatni a helyes párosítást (mint a többi típusnál). Elvetve: frusztráló egy 5 párosnál, és nem tanít többet.
**Visszavonható?** Igen.

## D-023 – XP: 10 pont helyes válaszonként, a kör végén jóváírva
**Dátum:** 2026-10-12
**Döntés:** Egy helyes válasz 10 XP, hibás 0. Az XP csak a kör befejezésekor kerül a `progressStore`-ba, a sorozattal együtt. Ha a gyerek kilép a kör közepén, nem kap XP-t és nem nő a sorozat, de a megválaszolt feladatok Leitner-állapota mentve marad.
**Miért:** A CLAUDE.md a kör végére teszi az XP-animációt és a sorozatot („legalább egy kört befejezett"). Fél kör jóváírása kiskaput nyitna a sorozatra. A Leitner-állapotot viszont azonnal menteni kell, mert az a tanulás valódi eredménye, és a kilépés ne dobja el.
**Alternatíva:** Válaszonkénti azonnali XP. Elvetve: a sorozat szabályával ütközik, és a kör végi animáció elveszti a lényegét. A 10 pont kezdő érték, a jelvényrendszernél finomítható.
**Visszavonható?** Igen.

## D-024 – A kör csak a store-ok betöltése után áll össze
**Dátum:** 2026-10-12
**Döntés:** A `usePracticeSession` megvárja, hogy a `progressStore` és a `reviewStore` betöltődjön az AsyncStorage-ból (`useStoresHydrated`), és csak utána hívja a `selectSessionExercises`-t. A kör egyszer áll össze, belépéskor; a kilépéskor a `sessionStore` törlődik.
**Miért:** A perzisztált store-ok betöltése aszinkron. Üres `cards`-szal az esedékes ismétlések kimaradnának, és a gyerek „új" feladatként kapná újra, amit már rontott: a Leitner-ismétlés csendben nem működne, hibaüzenet nélkül.
**Alternatíva:** Splash-en várni a betöltésre az egész appban. Elvetve: a többi képernyő nem függ tőle, és a hook helyi, egyszerű megoldás.
**Visszavonható?** Igen.

## D-025 – Útvonalak: `/subjects` önálló képernyő, két tab
**Dátum:** 2026-10-12
**Döntés:** A tantárgyválasztó külön útvonal (`app/subjects.tsx`), a kezdőlapról a „Kezdjük!" nyitja meg; a CLAUDE.md mappastruktúrájához ez az egy fájl került hozzá. A tabbar csak a két fő helyen van (Kezdőlap, Jutalmak), a gyakorló és a választó képernyők a tabokon kívül, teljes képernyősek. A tabikonok egyszerű SVG-k (`components/ui/Icons.tsx`), nincs ikonkönyvtár.
**Miért:** A gyakorlás közben nem szabad tabbar (figyelemelterelés, véletlen kilépés). Ikonkönyvtár (expo-symbols, vector-icons) új függőség lett volna néhány alakzatért.
**Alternatíva:** A tantárgykártyák a kezdőlapon, külön képernyő nélkül. Elvetve: a prompt külön képernyőt ír le, és a kezdőlap így nyugodt marad.
**Visszavonható?** Igen.

## D-026 – Haladás = kipróbált feladatok aránya
**Dátum:** 2026-10-12
**Döntés:** A tantárgy- és (a következő feladatban) a témakör-haladásjelző azt mutatja, hogy a feladatok hányadára válaszolt Kira legalább egyszer (van Leitner-kártyája). Nem azt, hogy mennyit tud biztosan.
**Miért:** A CLAUDE.md haladásjelzőt kér, hogy a nagy témakörök (legfeljebb 75 feladat) ne tűnjenek végtelennek; ehhez a sáv folyamatos, gyors mozgása számít, és minden körrel látszik előrelépés. Egy „elsajátított" mérték (pl. 4–5. doboz) lassan és ugrálva mozogna, és a rontás visszavenne belőle, ami a motivációnak árt.
**Alternatíva:** Elsajátítottsági arány (doboz ≥ 3). Pedagógiailag pontosabb, de demotiváló. Később egy második, halvány réteggel kiegészíthető.
**Visszavonható?** Igen, a `seenRatio` cseréjével.

## D-027 – Származtatott sötét árnyalatok a design tokeneken túl
**Dátum:** 2026-10-12
**Döntés:** A `constants/colors.ts`-ben külön `darkTones` (primary, secondary, accent, success sötétebb változata) szerepel, szövegekhez halvány kör- vagy sávhátteren (pl. a „0%" felirat, később a témakör-körök betűi).
**Miért:** A PDF-ben a százalékok és a körökben lévő jelek a tokenszínek sötétebb árnyalatai; a tokenszín (pl. #7FB069) fehér/halvány háttéren olvashatatlanul világos lenne, a gyerek pedig nehezen olvas. Nem kerültek a Tailwind témába, hogy a fő tokenlista változatlan maradjon.
**Alternatíva:** Csak a tokenszínek használata (rosszabb kontraszt); átlátszóság-trükk (nem ad sötétebb színt).
**Visszavonható?** Igen.

## D-028 – A maskot a kérdéskártyában áll, kontextuson át
**Dátum:** 2026-10-12
**Döntés:** A PDF szerint a maskot a kérdéskártya bal alsó sarkában van. A gyakorló képernyő egy `ExerciseMascotContext`-en adja át az állapotot, az `ExerciseCard` (a négy kártyás típus kérdéskártyája) ebből rajzolja ki. A `MatchPairs` és `OrderItems` típusnál, ahol a kártya a kezelőfelületet is tartalmazza, a maskot az alsó sávban marad (`MASCOT_IN_BAR`).
**Miért:** A D-020 szerint a maskot a szülő dolga, a komponensek ne ismerjék; a kontextus ezt megtartja, és nem kell mind a hét komponensnek `mascot` propot kapnia. A két interaktív típusnál a sarokban álló maskot az elemekre lógna.
**Alternatíva:** `mascot` prop minden feladatkomponensnek (sok átadás); a maskot abszolút pozícióval a képernyőn (a kártya magassága típusonként más, ráfedne a tartalomra).
**Visszavonható?** Igen.

## D-029 – Szint: 100 XP / szint; a kör eredménye külön, nem perzisztált store-ban
**Dátum:** 2026-10-12
**Döntés:** A PDF „Level" sávjához a szint `floor(xp / 100) + 1`, a sáv az aktuális szinten belüli XP-t mutatja. Ha egy kör szintet lépett, a sáv az új szint elejéről indul, és „Új szint: N." feliratot kap. A kör összegzése (`correct`, `total`, `xpEarned`, `xpBefore`, feladat-azonosítók) a `resultStore`-ba kerül, mert a `sessionStore` a gyakorló képernyő elhagyásakor törlődik.
**Miért:** A szintnek nincs más forrása a tervben, és a progressStore alakját sem akartam bővíteni: a szint az XP-ből számolható, így nincs mit szinkronban tartani. Egy kör ~100 XP-ig tart (10 feladat × 10), tehát nagyjából kétnaponta lép szintet, ami motiváló. A `resultStore` nem perzisztált: a következő indításkor az eredményképernyőnek nincs mit mutatnia.
**Alternatíva:** Növekvő szintküszöbök (bonyolultabb, nincs rá igény); az eredmény route-paraméterekben (a feladatlista nem fér bele).
**Visszavonható?** Igen, `lib/level.ts` egy helyen tartja.

## D-030 – Kilenc jelvény, nincsenek matricák, `practiceDays` a store-ban
**Dátum:** 2026-10-12
**Döntés:** A PDF 12 jelvényéből kilenc marad: Első kör, 3/7/30 napos sorozat, Hibátlan kör, és tantárgyanként egy „téma befejezése" jelvény (Nyelvtan-felfedező, Helyesírás-bajnok, Matekzseni, Természetbúvár). Kimaradt a „Korán kelő", a „Jószívű" és az „Éjszakai bagoly". A matricák (CLAUDE.md motivációs réteg) kimaradnak a v1-ből. A naptárhoz a `progressStore` `practiceDays: string[]` mezőt kapott.
**Miért:** A kimaradt háromhoz nincs mérhető feltétel, vagy rossz szokást ösztönözne (késő esti gyakorlás gyereknél); a jelvényeket úgy választottam, hogy mind a négy tantárgy kapjon egyet, és a feladatlista jelvényei (első kör, 7 nap, 100%, téma befejezése) mind benne legyenek. A PDF-ben sincsenek matricák, és a CLAUDE.md az első verziótól a legkisebb működő változatot kéri. A `practiceDays` a legegyszerűbb forrás a naptárnak; a régi mentésben hiányzó mező üres listával indul, nincs migráció.
**Alternatíva:** Mind a 12 jelvény (három feloldhatatlan lenne); a naptár a sorozatból visszaszámolva (kimaradt napokat nem tudná mutatni).
**Visszavonható?** Igen, a jegyzék egy fájl.

## D-031 – Tíz jelvény: 14 napos sorozat, hibátlan kör min. 8 feladattal
**Dátum:** 2026-10-12
**Döntés:** A D-030 kilenc jelvénye kiegészül egy 14 napos sorozattal, és a Hibátlan kör csak legalább 8 feladatos körért jár.
**Miért:** A 7 és a 30 nap között túl nagy az ugrás, a 30 nap egy 3. osztályosnak elérhetetlennek tűnik. A Hibátlan kör egy témakör végi 1-3 feladatos maradék körrel ingyen járt volna. A 8 a normál kör (8-10 feladat) alsó határa.
**Alternatíva:** Kilenc jelvény maradt volna (D-030); a minimum az aktuális kör tervezett hossza lett volna (bonyolultabb, a hívónak kellene tudnia).
**Visszavonható?** Igen: `PERFECT_ROUND_MIN` és a `constants/badges.ts` egy-egy sora.

## D-032 – Csoportosítás érintéssel, nem húzással
**Dátum:** 2026-10-12
**Döntés:** A `SortIntoGroups` érintéses („szó, aztán csoport"), nem drag & drop. Ez felülírja a D-021 megjegyzését, hogy a húzás a `SortIntoGroups`-hoz készül. Gesture Handler és Reanimated nem kell hozzá.
**Miért:** A D-021 érvei itt is állnak (pontos gyerekujjnak, elérhető VoiceOverrel, nincs félrecsúszó elem), és az érintés tökéletesen működik: a szó kijelölése után a csoportok kiemelődnek. A húzáshoz célzónák mérése és gesztus-kezelés kellene, amit szimulátor nélkül nem tudnék eszközön ellenőrizni; ugyanazt a tanulási eredményt adja, mint az érintés. Egységes marad a `MatchPairs`-szal és az `OrderItems`-szel.
**Alternatíva:** Húzás Reanimated + Gesture Handlerrel (a feladatlista eredeti terve). Ha Kira unalmasnak találja, később cserélhető, a szerződés (`exercise`, `onAnswer`) nem változik.
**Visszavonható?** Igen.

## D-033 – Jelvényképek körbevágva, 512 px, a képtérkép a jegyzék kulcsa
**Dátum:** 2026-10-12
**Döntés:** A jelvényképek kör alakú alfa-maszkkal, 512×512 pontra kicsinyítve kerülnek az appba, id-nevű fájlokban. A `constants/badges.ts` az `icon`/`color` helyett csak az azonosítót, a címet és a leírást tartja; az azonosító típusa a `badgeImages` kulcsa. Zárolt állapot: ugyanaz a kép, halványítva és szürkítve (`filter: grayscale`), külön szürke fájl nincs.
**Miért:** A képek valódi pixelként tartalmazták az átlátszóság-mintát, a kör alakú jelvényhez a körvágás a legegyszerűbb tiszta megoldás, és nem torzít. A 512 px 108pt-nél 4,7×-es (3x kijelzőn is bőven éles), és fájlonként 6×-kisebb, így a bundle ~3,3 MB, nem ~20 MB. A típus-kapcsolat miatt új jelvény képe nélkül a fordító hibát ad.
**Alternatíva:** Eredeti 1254 px-es képek (20 MB az appban, a minta kivágása nélkül szürke négyzetekkel); a háttér színalapú kivágása (a minta és a kép színei keverednének, szálkás szél); külön szürke képek a zároltakhoz (felesleges asset).
**Visszavonható?** Igen: a képek cserélhetők, a térkép egy blokk.

<!-- ÚJ DÖNTÉSEK IDE, ALULRA, NÖVEKVŐ SORSZÁMMAL -->
