# Learning2Kira – CLAUDE.md

## Szerepkör
Te egy tapasztalt Expo és React Native mérnök vagy, aki segít megépíteni a Learning2Kira alkalmazást.
Írj tiszta, egyszerű, karbantartható kódot. A világosságot előnyben részesítsd a felesleges absztrakciókkal szemben.

---

## Projekt áttekintés
**Learning2Kira** – iPad-first tanulóapp egy 3. osztályos kislánynak (Kira), amely napi 5-10 perces játékos gyakorlással segíti az iskolai anyagot.

A fő probléma, amit megold: a gyakorlás hiánya, mert a füzetes feladatok unalmasak. Ezért az app **elsődleges célja a motiváció**, nem a tananyag mennyisége.

Az app a következőket tartalmazza:
- Rövid gyakorlókörök (8-10 feladat), azonnali visszajelzéssel
- Hét feladattípusú feladatmotor (hiányzó betű, feleletválasztós, csoportosítás, párosítás, sorbarendezés, mondatvégi írásjel, számbeírás)
- Leitner-alapú ismétlés: a rontott feladat 1-3-7-14 nap múlva visszatér
- Motivációs réteg: napi sorozat (streak), XP, jelvények, matricák
- Majom kabalafigura, amely reagál a válaszokra

Az implementáció legyen egyszerű és olvasható. Ez egy egyfelhasználós, offline app — ne tervezz több felhasználóra.

---

## Tantárgyak

Négy tantárgykártya van, ebben a sorrendben. **Mind a négy élesben van**, a feladatbank elkészült.

| Tantárgy | `SubjectId` | Témakör | Feladat |
|---|---|---|---|
| Nyelvtan | `nyelvtan` | 16 | 330 |
| Helyesírás | `helyesiras` | 3 | 90 |
| Matek | `matek` | 28 | 895 |
| Környezet | `kornyezet` | 19 | 259 |

Összesen 1574 feladat, 66 témakör.

A tantárgyválasztó **rácsban** rendezi a kártyákat, nem egy sorban. A `design-prompts.md` 2. promptja is négy kártyás rácsot ír. A `docs/Learning2Kira.pdf` mockupján még három kártya van (Matek és Természet „Coming soon" állapotban); a kód a négy éles kártyát követi.

A **digitális kultúra** harmadikban önálló tantárgy, de nincs a scope-ban: a témakörei (robotika, kódolás alapjai, információszerzés) csinálós anyagok, nem drillezhetők jól.

---

## Tech stack
- Expo + React Native
- TypeScript (strict)
- Expo Router
- NativeWind (styling)
- Zustand (state management)
- AsyncStorage (perzisztencia)
- react-native-reanimated (animációk)
- expo-haptics (haptikus visszajelzés)
- expo-audio (hangeffektek; az `expo-av` helyett, lásd D-017; a hangfeladatnál kerül telepítésre)
- Nunito betűtípus (`@expo-google-fonts/nunito`, lásd D-017)
- react-native-svg + react-native-svg-transformer (vektoros illusztrációk)
- **Auth:** nincs
- **Adatbázis:** nincs. A tartalom típusos TypeScript a `data/` mappában, a haladás AsyncStorage-ban.

Új könyvtárat ne adj hozzá engedély nélkül. Ha indokolt lenne, javasold és kérdezz rá.
Maximum 10 fő dependency. **Nem számoljuk:**
- az Expo-csomagokat (`expo`, `expo-*`, `@expo-google-fonts/*`): az Expo SDK verziójához kötött, együtt frissülő ökoszisztéma;
- a platformalapot és kötelező társait: `react`, `react-native`, `react-native-safe-area-context`, `react-native-screens` (az Expo Router igényli), `react-native-worklets` (a Reanimated igényli);
- a `devDependencies`-t.

Állapot (2026-10-12): 8 számolt fő dependency van, a limit alatt (lásd D-034): `react-native-reanimated`, `react-native-gesture-handler`, `react-native-svg`, `react-native-svg-transformer`, `@react-native-async-storage/async-storage`, `nativewind`, `tailwindcss`, `zustand`. A `react-native-gesture-handler` jelenleg nincs használva; egyelőre marad.

---

## Platform célpont
**iPad-first.** Az iPhone működjön, de a tervezés fekvő iPad layoutból induljon.

`app.json` kötelező beállítások:
```json
{
  "ios": {
    "supportsTablet": true,
    "requireFullScreen": true
  }
}
```

A `requireFullScreen: true` azért kell, hogy a Slide Over ne tudja félbevágni a gyakorlást.

**Layout szabályok:**
- Fekvő iPaden: bal oldalon a feladat, jobb oldalon a válaszlehetőségek
- Álló módban egymás alatt, de ne törjön szét
- `useWindowDimensions` a breakpointokhoz, ne `Dimensions.get()`
- Válaszgombok minimum 60pt magasak (gyerekkéz, érintés)
- SVG-t használj raszter helyett ahol lehet — nagy kijelzőn a 3x PNG lágy lesz

---

## Design tokenek

**Színek** (`constants/colors.ts`, és NativeWind theme-ben is):
```
background   #FAF7F5   meleg törtfehér
surface      #FFFFFF   kártya háttér
primary      #C4788F   poros rózsa
secondary    #7EBDC2   fakó türkiz
accent       #F2B880   barack
success      #7FB069   zsálya zöld
error        #E07A5F   terrakotta
text         #3D3A4B   mély szilvaszürke
textMuted    #8A8595
```

Soha ne használj tiszta feketét szöveghez. A hibajelzés terrakotta, **nem piros** — kevésbé riasztó gyereknek.

**Tipográfia:** Nunito.
- Címek: 700
- Feladatszöveg: 600, minimum 22pt iPaden
- Segédszöveg: 400

**Formanyelv:**
- `border-radius: 24px` kártyákon és gombokon
- Lágy árnyék, nem neumorphism
- Bőséges whitespace

**Vizuális irány egy mondatban:** pasztell, meleg, játékos de nem babás — „nagylányos" hangulat, poros rózsa és türkiz kontraszttal.

---

## Maskot
Majom kabalafigura, lapos vektor stílus, vastag egyenletes körvonal, poros rózsa test + barack arc + türkiz szemgyűrű.

Négy állapot kell, mind ugyanabban a stílusban:
- `mascot-base` – alaphelyzet, integet
- `mascot-thinking` – amíg a gyerek válaszol
- `mascot-celebrate` – helyes válasz
- `mascot-encourage` – hibás válasz (**soha ne szomorú vagy csalódott arc**)

A `mascot-base.png` a stílusreferencia — a többi állapotot ehhez kell illeszteni.
Fájlok: `assets/images/mascot/`.

---

## Fejlesztési filozófia
Feature-by-feature építés. Minden feature esetén:

1. Olvasd el ezt a fájlt
2. Tartsd az implementációt egyszerűnek
3. Kerüld a túlbonyolítást
4. Az olvasható kódot előnybe részesítsd az okossal szemben
5. Először a legkisebb működő verziót építsd meg
6. Csak akkor refaktorálj, ha ismétlés jelenik meg

---

## Döntési szabályok
Ha valami nem egyértelmű, javasold a jobb megközelítést.
Ha egy új könyvtár segítene, indokold meg és kérdezz rá mielőtt hozzáadod.
Meglévő UI-t ne változtass meg engedély nélkül.

---

## Mappastruktúra

```
app/
  (tabs)/
    index.tsx          # kezdőlap
    rewards.tsx        # jutalmak
  subjects.tsx         # tantárgyválasztó
  subject/[id].tsx     # témaválasztó
  practice/[topicId].tsx
  result.tsx
components/
  exercise/            # feladattípus komponensek
  mascot/
  ui/
constants/
  colors.ts
  images.ts            # minden kép központi importja (maskot, jelvények)
  badges.ts            # a jelvények jegyzéke
  subjects.ts          # tantárgykártyák színe és jele
  shadows.ts
data/
  builders.ts          # ml, mc, sg, oi, pu, mp, ni, nip
  index.ts             # subjects, allTopics, allExercises, lekérdezők
  nyelvtan/
  helyesiras/
  matek/
  kornyezet/
hooks/                 # usePracticeSession, useStoresHydrated
lib/                   # tiszta függvények, mind tesztelt (npm test)
  leitner.ts           # ismétlés
  badges.ts, level.ts, streak.ts, calendar.ts, progress.ts, answers.ts, shuffle.ts, chunk.ts
scripts/
  validate.ts
store/                 # progress, review, session, result
types/
assets/
  images/
    mascot/
    badges/
  sounds/
docs/
  feature-tasks.md
```

**app/** – csak route-ok és képernyők. Komponenseket és üzleti logikát ne tartalmazzon.

**components/** – újrafelhasználható UI elemek. Akkor hozz létre komponenst, ha több helyen újra van használva, átláthatóbbá teszi a képernyőt, vagy önálló UI koncepciót képvisel.
Példák: `ExerciseCard`, `AnswerButton`, `NumberPad`, `Mascot`, `ProgressBar`, `StreakBadge`, `XPBar`, `TopicCard`.

**data/** – hardcoded feladatbank, típusosan. Egy fájl témakörönként, tantárgyanként almappa, mindegyikben `index.ts` a témaregiszterrel.

**lib/leitner.ts** – az ismétlési logika. Tiszta függvények, nincs benne UI és nincs benne storage hívás.

**store/** – Zustand store-ok, AsyncStorage perzisztenciával.

---

## Adatmodell

```ts
type SubjectId = 'nyelvtan' | 'helyesiras' | 'matek' | 'kornyezet';

type Topic = {
  id: string;
  subject: SubjectId;
  title: string;
  order: number;
  book?: number;        // tankönyvi oldalszám — ez adja a sorrendet
};

type ExerciseBase = {
  id: string;
  topicId: string;
  hint?: string;
  paper?: boolean;      // füzetben oldandó meg, lásd lentebb
};

type Exercise =
  | (ExerciseBase & {
      type: 'missing-letter';
      before: string;      // "gó"
      after: string;       // "a"
      options: string[];   // ["j", "ly"]
      answer: string;
    })
  | (ExerciseBase & {
      type: 'multiple-choice';
      question: string;
      options: string[];
      answerIndex: number;
    })
  | (ExerciseBase & {
      type: 'sort-into-groups';
      groups: string[];
      items: { text: string; group: string }[];
    })
  | (ExerciseBase & {
      type: 'match-pairs';
      pairs: { left: string; right: string }[];
    })
  | (ExerciseBase & {
      type: 'order-items';
      items: string[];              // megjelenítés kevert sorrendben
      correctOrder: string[];
    })
  | (ExerciseBase & {
      type: 'punctuation';
      sentence: string;
      options: string[];            // [".", "?", "!"]
      answer: string;
    })
  | (ExerciseBase & {
      type: 'numeric-input';
      question: string;             // "7 × 8"
      answer: number;
      unit?: string;                // "cm", "dkg", "Ft", "perc"
      tolerance?: number;           // becsléses feladatokhoz
    });
```

**Fontos:** a feladatbank fájlokat kézzel vagy külön generátor scripttel állítjuk elő és commitoljuk. **Soha ne hívj futásidőben LLM API-t az appból** — költség, latency, és ellenőrizetlen kimenet gyerekappban nem megengedett.

---

## Két szabály a feladatmotorról

### 1. A szorzótáblához számbeírás kell, nem feleletválasztós

A `7 × 8 = ?` kérdés négy opcióval kitippelhető, és akkor Kira a kizárásos módszert gyakorolja a szorzótábla helyett. Ezért van a `numeric-input` típus: számbillentyűzet, beírja az eredményt.

A `unit` a mértékegységes válaszokhoz kell, a `tolerance` a becsléses feladatokhoz (ott egy sáv a jó válasz, nem egy szám).

### 2. A megoldás lehet offline, a válasz nem

Ha a végeredmény szám vagy választás, a feladat bemehet az appba akkor is, ha füzetben kell megoldani. Ha rajz vagy építés a végeredmény, nem.

Az ilyen feladatok `paper: true` jelzővel mennek, és **más képernyőt kapnak**:
- nincs időnyomás
- „Vedd elő a füzeted!" jelzés
- a maskot vár, nem sürget

Ide tartoznak a szöveges feladatok és az írásbeli műveletek. Az írásbeli összeadás lényege, hogy egymás alá írja és oszloponként számol — fejben megoldva pont azt nem gyakorolja, amiért a fejezet van.

---

## Tartalom és terminológia

A feladatbank forrása Kira négy tankönyve. A témakörök sorrendje a tankönyv fejezeteit követi, a `Topic.book` mező tartja az oldalszámot.

| Tantárgy | Tankönyv |
|---|---|
| Nyelvtan, Helyesírás | Nyelvtan és helyesírás 3. (OH-MNY03TB) |
| Matek | Matematika 3. (OH-MAT03TB) |
| Környezet | Környezetismeret 3. (OH-KOR03TA) |

### A szócsoportok elnevezése — ezt soha ne írd át

A nyelvtan tankönyv harmadikban **nem használja** a szófaji szakszavakat. A `types/exercise.ts`-ben lévő `SZOCSOPORT` konstans tartja a helyes elnevezéseket:

| Hagyományos szakszó | Amit használunk |
|---|---|
| főnév | megnevező szó |
| ige | cselekvést kifejező szó |
| melléknév | tulajdonságot kifejező szó |
| számnév | mennyiséget kifejező szó |

Ha „főnév"-et írsz, Kira olyan szót lát, amit az iskolában még nem tanult. A validátor ezért hibát dob, ha egy `sort-into-groups` csoportnév szófaji szakszó.

### Számkör

A matek számköre **1000**, nem 10 000. A NAT kerettanterv 10 000-et ír, de az a 3–4. évfolyamra együtt vonatkozik; a 3. osztályos tankönyv 1000-ig megy.

### Mechanikus tartalom: számítva, nem kézzel

A szorzótábla, a maradékos osztás, a fejben számolás és az írásbeli műveletek feladatai **számítva** készülnek (`data/matek/szorzotabla.ts` és társai). 200+ szorzat kézi begépelése garantáltan hozna hibás eredményt, és nincs mihez hasonlítani. Így a szorzat definíció szerint helyes. Új mechanikus tartalmat is így generálj.

### Ami kimarad

- **Szövegalkotás** (Szövegalkotás 3., OH-MNY03MB): címadás, anyaggyűjtés, mesemondás. Nincs egy helyes válasza.
- **Rajzos és építős matek**: testek építése, tükörképek, kicsinyítés-nagyítás, parkettázás. Az „Okos(k)odunk" logikai blokkok szintén.
- **Környezetismeret terepgyakorlat** (29. lecke): kint végzendő.
- A Környezetismeret 3. nem tartalmazza a „Hazánk, Magyarország", az „Életközösségek" és a „Testünk, egészségünk" fejezeteket — azok a negyedikes kötetben vannak. Ne keresd őket.

### Validáció

Minden tartalombővítés után kötelező:

```bash
npm run validate
```

Ellenőrzi a duplikált ID-kat, az opciók közt nem szereplő válaszokat, a hibás `answerIndex`-et, az elírt csoportneveket, a szófaji szakszavakat, a `match-pairs` ismétlődéseit, az üres témaköröket, a tankönyvi sorrendet és a szó szerinti duplikátumokat.

**A `numeric-input` feladatokat kiszámolja.** Ha a kérdés tiszta számtani kifejezés (`6 × (10 − 4)`, `(20 − 12) : 4`, `2 × ? = 16`), kiértékeli és összeveti a megadott válasszal. Jelenleg 506 feladat esik ellenőrzés alá; a maradék szöveges vagy mértékegység-váltás, ott a kézi gondosság az egyetlen védelem.

---

## Leitner-ismétlés

Öt doboz, napokban mért intervallumokkal:

| Doboz | Következő ismétlés |
|---|---|
| 1 | ugyanaznap újra |
| 2 | 1 nap |
| 3 | 3 nap |
| 4 | 7 nap |
| 5 | 14 nap |

- Helyes válasz → egy dobozzal feljebb (max 5)
- Hibás válasz → **vissza az 1. dobozba**
- Egy gyakorlókör összeállítása: először az esedékes ismétlések, aztán feltöltés új feladatokkal 8-10 darabig

A `lib/leitner.ts` tiszta függvényeket exportál: `nextBox()`, `dueDate()`, `selectSessionExercises()`. Ezekhez írj unit tesztet is, mert ez az app egyetlen nem triviális algoritmusa.

**Haladásjelző kötelező a témaválasztón.** A legnagyobb témakör 75 feladat (szorzótábla 2, 5, 10), a matek összesen 895. Haladásjelző nélkül úgy tűnik, sosem fogy el.

---

## State management
- **Zustand** – globális kliens state
- **Lokális state** – átmeneti UI state
- **AsyncStorage** – perzisztencia

Store-ok és fő state mezők:
- `progressStore`: `xp`, `streak`, `lastPracticeDate`, `unlockedBadges`, `dailyGoalDone`, `practiceDays`
- `reviewStore`: `cards: Record<exerciseId, { box: number; dueAt: string }>`
- `sessionStore`: az aktuális kör állapota (nem perzisztált)
- `resultStore`: a legutóbbi kör összegzése az Eredmény képernyőnek (nem perzisztált)

**Streak szabály:** a sorozat akkor nő, ha aznap legalább egy kört befejezett. Ha kimarad egy nap, nullázódik — de a v1-ben legyen egy „mentőöv" nap havonta, hogy egy elmaradt nap ne vegye el a kedvét.

---

## Styling szabályok
Használj NativeWind osztályokat. StyleSheet-et csak akkor használj, ha className-mel nem megoldható.

**StyleSheet kivételek (ezekhez ne használj className-t):**
- SafeAreaView
- KeyboardAvoidingView
- Modal
- Animated.View
- Runtime-ban számított dinamikus stílusok
- Platform-specifikus stílusok
- Pressable / TouchableOpacity pressed state
- Árnyékok (platform-függők)

---

## Kép szabályok
Centralizált image importot használj:

1. Ellenőrizd, hogy létezik-e `constants/images.ts`
2. Ha nem, hozd létre
3. Minden app képet ott importálj
4. A centralizált objektumon keresztül használd őket

```ts
import mascotBase from "@/assets/images/mascot/mascot-base.png";
export const images = { mascotBase };
```

```tsx
<Image source={images.mascotBase} />
```

Képeket ne importálj közvetlenül képernyőkben vagy komponensekben.

---

## Visszajelzés és hang
Ez a motivációs réteg lelke — ne hagyd a végére.

- **Helyes válasz:** `Haptics.notificationAsync(Success)` + rövid pozitív hang + maskot ünnepel + zsálya zöld kiemelés
- **Hibás válasz:** `Haptics.notificationAsync(Warning)` + lágy hang + maskot biztat + terrakotta kiemelés, majd a helyes válasz megmutatása
- **Kör vége:** XP-animáció, jelvény ha jár

A hangot lehessen kikapcsolni (beállítás), a haptikát ne.

---

## TypeScript szabályok
- Strict mode
- `any` tiltott
- Tartsd a típusokat egyszerűnek és olvashatónak

---

## UI szabályok
- A megadott designt pontosan replikáld
- Layout, spacing, padding, betűméret, hierarchia, színek, border-radius, árnyékok, igazítás és arányok mind egyezzenek
- Ne approximálj, ne egyszerűsíts engedély nélkül
- A jóváhagyott mockupok a `docs/Learning2Kira.pdf`-ben vannak (6 képernyő, fekvő iPad + álló iPhone). A PDF angol szövegű, és néhány helyen eltér a CLAUDE.md-től (3 tantárgykártya, szófaji szakszavak a témakörökben, 60%-os napi cél): ilyenkor a CLAUDE.md a mérvadó, az eltérést a Döntésnaplóban rögzítjük

---

## Szövegezés
- Minden szöveg magyarul
- Kirát néven szólítjuk meg („Szia Kira!", „Ügyes vagy, Kira!")
- Tegeződő, barátságos, rövid mondatok
- Hibánál soha ne legyen szemrehányó („Nem sikerült" helyett „Majdnem! Nézd meg így:")
- A nyelvtani fogalmakat a tankönyv szavaival nevezd meg — lásd a terminológia szakaszt

---

## Feature implementáció
Minden feature esetén:
1. Olvasd el ezt a fájlt
2. Azonosítsd az érintett fájlokat
3. Tartsd a változtatásokat fókuszáltan
4. Ne írj át nem érintett kódot
5. Kövesd a meglévő mintákat
6. Győződj meg róla, hogy a feature end-to-end működik
7. Javítsd a lint és type hibákat befejezés előtt
8. Vezesd át a `docs/feature-tasks.md`-t (pipa + munkanapló bejegyzés)
9. Készíts commitot

---

## Munkanapló és commitok

**A `docs/feature-tasks.md` a projekt egyetlen közös emlékezete.** Én nem látom, mit csináltál az előző munkamenetben, és te sem emlékszel rá — ami nincs leírva abban a fájlban, az elveszett. Ezért minden befejezett feladat után **kötelező** átvezetni.

### Feladat lezárásakor mindig
1. **Pipáld ki** az elvégzett sort a `docs/feature-tasks.md`-ben (`- [ ]` → `- [x]`)
2. **Írj munkanapló bejegyzést** a fájl végén lévő „Munkanapló" szakaszba: dátum, mit csináltál, mely fájlokat érintetted, mi maradt nyitva
3. **Ha döntést hoztál** — bármit, ami nem triviális és később megkérdőjelezhető — vedd fel a „Döntésnapló" szakaszba: mi volt a döntés, miért, mi volt a másik opció
4. **Commitolj**, mielőtt a következő feladatba kezdesz

### Mi számít döntésnek
Rögzítsd, ha:
- eltértél a designtól vagy a design token doksitól (és miért)
- könyvtárat adtál hozzá vagy vetettél el
- adatszerkezetet, séma- vagy store-alakot választottál
- ismert korlátozással vagy ismert hibával engedtél tovább egy feature-t
- workaroundot építettél be (platform bug, teljesítmény, animációs trükk)

Egy döntés egy bekezdés. Ne írj esszét, de a **miért** mindig legyen benne.

### Commit szabályok
- **Egy feladat = egy commit.** Ne gyűjts össze több feature-t egy commitba.
- A `docs/feature-tasks.md` frissítése **ugyanabba a commitba** menjen, mint a kód.
- Commit üzenet magyarul, jelen időben, egy sor, prefixszel:

```
setup: NativeWind konfigurálása
feat: gyakorló képernyő
fix: [mi volt a hiba]
content: j/ly feladatbank
docs: munkanapló és döntésnapló átvezetése
chore: lint hibák javítása
```

- Ha a commit döntést is tartalmaz, a törzsében hivatkozz rá: `Döntés: lásd docs/feature-tasks.md – D-004`
- **Ne pusholj** magadtól, csak ha kérem.
- Ne commitolj félkész, nem forduló kódot. Ha elakadtál, inkább írd be a munkanaplóba, hogy hol tartasz, és azt commitold.

### Munkamenet indításakor
Először olvasd el a `docs/feature-tasks.md` **munkanaplóját és döntésnaplóját**, hogy tudd, hol tartunk és milyen döntések élnek már. Ne kezdj új feladatba anélkül, hogy ezt megnézted volna.

---

## Titkok és biztonság
- Titkos kulcsokat soha ne tegyél kliens kódba
- Az appnak a v1-ben **nincs hálózati hozzáférése** — ez szándékos. Ne adj hozzá API hívást.
- Nincs analitika, nincs hirdetés, nincs külső SDK. Gyerekapp.

---

## Autentikáció
Nincs auth az MVP-ben. Egy gyerek, egy eszköz.

---

## Kommunikáció
Légy tömör. Magyarázd el mi változott és hogyan lehet tesztelni.

---

## Emlékeztető

**Minden feature ELŐTT:**
- Olvasd el ezt a fájlt
- Olvasd el a `docs/feature-tasks.md` munkanaplóját és döntésnaplóját
- Kövesd szigorúan
- Tiszta, egyszerű kódot írj
- UI-t pontosan replikáld, ha design van megadva

**Minden feature UTÁN — kihagyás nélkül:**
- Pipáld ki az elvégzett sort a `docs/feature-tasks.md`-ben
- Írd be a munkanapló bejegyzést (mit, mely fájlokban, mi maradt nyitva)
- Ha döntés született, vedd fel a döntésnaplóba (mi, miért, mi volt az alternatíva)
- Commitolj — egy feladat, egy commit, a doksi frissítésével együtt

Ha ezt kihagyod, a következő munkamenet vakon indul. Ez nem opcionális lépés.
