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
- [ ] `components/exercise/MissingLetter.tsx` — 70 feladat
- [ ] `components/exercise/SortIntoGroups.tsx` (drag & drop, Reanimated + Gesture Handler) — 96 feladat
- [ ] `components/exercise/OrderItems.tsx` — 42 feladat
- [ ] `components/exercise/MatchPairs.tsx` — 32 feladat
- [ ] `components/exercise/Punctuation.tsx` — 15 feladat
- [ ] `components/exercise/ExerciseRenderer.tsx` – típus alapján választ komponenst
- [ ] **Füzetes mód** (`paper: true`): külön képernyő, nincs időnyomás, „Vedd elő a füzeted!" jelzés, a maskot vár

### Képernyők (sorrendben)
- [ ] Kezdőlap – üdvözlés Kirának, streak, XP, „Kezdjük!" gomb, maskot
- [ ] Tantárgyválasztó – **4 kártya rácsban**, mind élesben
- [ ] Témaválasztó – témakörök haladásjelzővel, tankönyvi sorrendben
- [ ] Gyakorló képernyő – 8-10 feladat, azonnali visszajelzés, haladássáv
- [ ] Eredmény képernyő – pontszám, XP-animáció, mi jön vissza legközelebb
- [ ] Jutalmak – jelvények, matricák, streak-naptár

### Motivációs réteg
- [ ] Maskot komponens 4 állapottal, válaszra reagál
- [ ] Haptika bekötése (helyes / hibás)
- [ ] Hangeffektek + kikapcsolási lehetőség
- [ ] Streak logika + „mentőöv" nap havonta
- [ ] Jelvényrendszer: első kör, 7 napos sorozat, 100% egy körben, téma befejezése
- [ ] Napi cél megjelenítése és teljesítés visszajelzése

### Design
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

<!-- ÚJ DÖNTÉSEK IDE, ALULRA, NÖVEKVŐ SORSZÁMMAL -->
