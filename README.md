# Learning2Kira – feladatbank

1574 feladat, 66 témakör, négy tantárgyra bontva.

## Mit hova

```
types/exercise.ts          Exercise, Topic, SubjectId és a SZOCSOPORT elnevezések
data/builders.ts           rövidítő builderek (ml, mc, sg, oi, pu, mp, ni, nip)
data/nyelvtan/*.ts         16 témakör, a tankönyv fejezetei szerint
data/helyesiras/*.ts       3 témakör, spirálisan visszatérő anyag
data/matek/*.ts            28 témakör, a Matematika 3. fejezetei szerint
data/kornyezet/*.ts        19 témakör, a Környezetismeret 3. leckéi szerint
data/index.ts              subjects, allTopics, allExercises, lekérdezők
scripts/validate.ts        integritás-ellenőrző
```

A `@/` alias a CLAUDE.md szerinti elrendezésre hivatkozik. Az app indítása és a
parancsok: `SETUP.md`.

## A négy tantárgy

**Nyelvtan** – a Nyelvtan és helyesírás 3. (OH-MNY03TB) fejezeteit követi,
tankönyvi oldalszám szerinti sorrendben. A `Topic.book` mező tartja az
oldalszámot, és a validátor ellenőrzi, hogy az `order` ne mondjon ellent neki.

**Helyesírás** – külön tantárgykártya. Ezek a témák a tankönyvben nem önálló
fejezetek: a hangok időtartama és az elválasztás a 2. osztály ismétlésében van
(4. oldal), a j/ly pedig végig az éven szétszórva, a „Gyakorold a helyesírást!"
blokkokban és a 117. oldali szógyűjteményben. Spirálisan visszatérő anyag, nem
heti lecke — ezért van külön, de pont erre való a Leitner-ismétlés.

**Matek** – a Matematika 3. (OH-MAT03TB) fejezetei. A számkör **1000**, nem
10 000: a kerettanterv 10 000-et ír, de az a 3–4. évfolyamra együtt vonatkozik,
a 3. osztályos tankönyv 1000-ig megy.

A szorzótábla és a maradékos osztás feladatai **számítva** készülnek, nem kézzel
listázva (`data/matek/szorzotabla.ts`): 200+ szorzat begépelése garantáltan hozna
hibás eredményt. Így a szorzat definíció szerint helyes.

**Környezet** – a Környezetismeret 3. (OH-KOR03TA) 29 leckéje négy egységben.

Ez a kötet **nem tartalmazza** a „Hazánk, Magyarország", az „Életközösségek" és a
„Testünk, egészségünk" fejezeteket, pedig a NAT kerettanterv a 3–4. évfolyamra
együtt felsorolja őket — azok a negyedikes kötetben vannak.

A tankönyv kísérletekre épül. A kísérletet nem lehet appban elvégezni, ezért ami
bekerült, az a kísérlet **tanulsága**: mitől ég valami, mi történik a vízzel
melegítéskor. A 29. lecke (terepgyakorlat) kint végzendő, kimarad.

## Terminológia — ezt ne írd át

A tankönyv harmadikban **nem használja** a szófaji szakszavakat. A
`SZOCSOPORT` konstans tartja a helyes elnevezéseket:

| Hagyományos szakszó | Amit a könyv és a bank használ |
|---|---|
| főnév | megnevező szó |
| ige | cselekvést kifejező szó |
| melléknév | tulajdonságot kifejező szó |
| számnév | mennyiséget kifejező szó |

A validátor hibát dob, ha egy `sort-into-groups` csoportnév szófaji szakszó.

## Ellenőrzés

```bash
npm run validate
```

Ellenőrzi: duplikált feladat- és témakör-ID, ismeretlen topicId vagy tantárgy,
opciók közt nem szereplő válasz, range-en kívüli answerIndex, ismétlődő opció,
üres vagy elírt csoportnév, szófaji szakszó csoportnévként, order-items
halmazegyezés és eleve helyes sorrend, punctuation már meglévő írásjel,
match-pairs ismétlődő vagy önmagával párosított elem, feladat nélküli témakör,
és hogy a témakörök sorrendje követi-e a tankönyvi oldalszámot.

**A numeric-input feladatokat kiszámolja.** Ha a kérdés tiszta számtani
kifejezés (`6 × (10 − 4)`, `(20 − 12) : 4`, `2 × ? = 16`), a validátor
kiértékeli és összeveti a megadott válasszal — egy elgépelt eredmény így
build-time derül ki, nem Kira előtt. Jelenleg 506 feladat esik ellenőrzés alá; a maradék 250 szöveges vagy
mértékegység-váltás, azoknál a kézi gondosság az egyetlen védelem.

Külön ellenőrzi a **szó szerinti duplikátumokat** is: ugyanaz a kérdés ugyanazokkal
az opciókkal egy témakörön belül hiba. (A „Melyik írásmód helyes?" típusú kérdés
jogosan ismétlődik más opciókkal, ezért az opciók is a kulcs részei.)
Figyelmeztet, ha egy témakörben 10-nél kevesebb feladat van.

Az `npm run validate` be van kötve; futtasd minden tartalombővítés után.

## Ami a matekból kimarad

Testek építése (138.), tükörképek készítése (178.), kicsinyítés-nagyítás (182.)
és parkettázás (184.) — ezek kézzel építős és rajzolós feladatok, nincs
ellenőrizhető válaszuk. Az „Okos(k)odunk" logikai blokkok szintén: nyitott végű
fejtörők.

**A szabály: a MEGOLDÁS lehet offline, a VÁLASZ nem.** Ha a végeredmény szám vagy
választás, bemehet — ha rajz, nem. Az így bekerülő feladatok `paper: true`
jelzővel mennek: füzetben oldja meg, csak az eredményt írja be, nincs időnyomás.

## Amit még nem tartalmaz

- **Szövegalkotás.** A magyar tantárgy másik munkafüzete (Szövegalkotás 3.,
  OH-MNY03MB) — címadás, anyaggyűjtés, mesemondás. Nem drillezhető
  feleletválasztóssal, nincs egy helyes válasz. Szándékosan kimarad.
- **Közmondások, szólások.** A Szövegalkotás 3. 23. oldalán van, és
  `match-pairs`-re alkalmas lenne. Ez az egyetlen szövegalkotási rész, amit
  érdemes később behozni.
- **Digitális kultúra.** Harmadikban önálló tantárgy, de a témái (robotika,
  kódolás alapjai, információszerzés) csinálós anyagok, nem drillezhetők jól.
  Szándékosan kimarad.

## Forrás

A témakörbontás a Nyelvtan és helyesírás 3. (OH-MNY03TB) tartalomjegyzékén
alapul. A feladatok eredetiek — a tankönyv a fogalmakhoz, a szókincsszinthez
és a sorrendhez referencia, nem másolási forrás.
