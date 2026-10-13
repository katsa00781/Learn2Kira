# Jelvény-promptok – Learning2Kira

Jelvényképek egyenként generálva. **Felirat nélkül**: a nevet a `BadgeCard`
komponens írja alá Nunitóval (`constants/badges.ts` → `title`). A fájlnevek a
`constants/badges.ts` ID-it követik.

## Generálási szabályok

- Egy kép = egy jelvény, négyzetes, legalább **1024×1024**.
- **Átlátszó háttér.** Ha a generátor nem tud ilyet, sima `#FAF7F5` hátteret kérj,
  és utólag vágd ki (macOS Előnézet → Eszközök → „Háttér eltávolítása").
- Mindig csatold referenciának a jóváhagyott jelvényrácsot és a `mascot-base.png`-t.
- Ellenőrizd **120 px-re kicsinyítve** is. Ha zajos, kérj kevesebb csillagot és sugarat.
- Mentés: `assets/images/badges/<id>.png`, ahol az `<id>` a `constants/badges.ts` ID-je (pl. `streak-7.png`).
- A zárolt állapot kódból készül (grayscale + opacity), külön kép nem kell.

## Közös stílusblokk

```
A single circular achievement badge for a children's learning app, flat vector
illustration with soft gradients, warm pastel palette: dusty rose #C4788F,
faded teal #7EBDC2, peach #F2B880, sage green #7FB069, cream highlights.
A soft circular glow disc behind the main icon, a few small sparkles,
two leafy branches curving up from the bottom. Rounded, friendly shapes,
thick soft outlines in dark rose. Centered, the icon fills about 70% of the frame.
NO text, NO letters, NO ribbon, NO banner — the bottom of the badge is empty.
Transparent background. Match the style of the attached reference sheet.
```

## Jelvényenként

Minden prompt elé a közös stílusblokk kerül.

| Fájl | Név | Prompt |
|---|---|---|
| `first-lesson.png` | Első kör | The cheerful monkey mascot from the attached reference (dusty rose body, peach face, teal eye rings) waving and holding up a big golden star. Pink glow disc. |
| `perfect-round.png` | Hibátlan kör | A golden trophy cup with a star on its front, light rays above. Sage green glow disc. |
| `streak-3.png` | 3 napos sorozat | A dusty rose desk calendar page showing a large "3", a small heart below it. Peach glow disc. |
| `streak-7.png` | 7 napos sorozat | The same calendar page showing a large "7", a small gold star below it. Peach glow disc. |
| `streak-14.png` | 14 napos sorozat | The same calendar page showing a large "14", two small gold stars below it, a few more sparkles. Peach glow disc. |
| `streak-30.png` | 30 napos sorozat | The monkey mascot wearing a small golden crown, hugging the calendar page showing a large "30". Golden glow disc, extra sparkles. |
| `topic-nyelvtan.png` | Nyelvtan-felfedező | Three stacked wooden toy alphabet blocks showing "A", "B", "C" in dusty rose, teal and peach. Teal glow disc. |
| `topic-helyesiras.png` | Helyesírás-bajnok | A notebook page with neat lines and a big check mark, a pink pencil leaning on it. Pink glow disc. |
| `topic-matek.png` | Matekzseni | A playful stack of colorful counting cubes with floating "+", "−", "×" signs around it. No calculator. Yellow glow disc. |
| `topic-kornyezet.png` | Természetbúvár | A magnifying glass over a green leaf, a small daisy and a ladybug nearby. Sage green glow disc. |

A számok (3, 7, 14, 30) a képben maradnak: az ikon részei, nem feliratok.

## 2. kör – bővítés (D-038)

15 új kép. A szintezett családok (pl. Szorgalmas 10/25/50/100 nap) **egy közös
képet** kapnak, a szintet a `BadgeCard` rajzolja rá kódból (1–4 kis csillag a
kép alján, bronz/ezüst/arany színben). Ezért ezekbe a képekbe **ne kerüljön
szám**. A tantárgyi szintek a meglévő `topic-*.png` képeket használják, ahhoz
nem kell új kép.

Referenciának csatold a már elkészült jelvények közül legalább hármat
(pl. `first-session.png`, `perfect-session.png`, `subject-matek.png`), hogy a
stílus egyezzen. Minden prompt elé ugyanaz a közös stílusblokk kerül.

| Fájl | Jelvény(ek) | Prompt |
|---|---|---|
| `all-subjects.png` | Mindenes | The monkey mascot from the attached reference happily juggling four small objects: a wooden alphabet block, a pink pencil, a teal counting cube and a green leaf. Peach glow disc. |
| `days.png` | Szorgalmas (10/25/50/100 nap) | A small sprouting plant with three fresh leaves growing in a peach flowerpot, a teal watering can tilted beside it with a few water drops. Sage green glow disc. |
| `comeback.png` | Visszatértem | The monkey mascot stepping through a rounded open door, waving hello with a big smile, a small pink heart floating above. Pink glow disc. |
| `weekend.png` | Hétvégi gyakorló | A colorful diamond kite in dusty rose and teal flying high with a curly tail, a small open notebook resting on a green hill below. Light teal glow disc. |
| `xp.png` | XP-gyűjtő (500/1000/2500/5000) | A round glass jar filled with glowing golden stars, the lid tilted open with a few stars floating out. Golden glow disc. |
| `level.png` | Szintlépő (5./10./20. szint) | Three rounded steps rising like a small staircase, a little pennant flag on the top step, a sparkle on each step. Peach glow disc. |
| `explorer.png` | Kalandor (100/500/1000 feladat) | A partly unrolled treasure map with a dotted path leading to a golden star, a small teal compass lying beside it. Peach glow disc. |
| `master-szorzotabla.png` | Szorzótábla-mester | A big rounded "×" sign made of glossy dusty rose tiles, surrounded by small tiles showing dot patterns (no digits), a tiny golden crown on top of the "×". Golden glow disc. |
| `master-j-ly.png` | j/ly-detektív | Two wooden letter blocks showing the lowercase letters "j" and "ly", a small brown detective cap resting on top of them. Teal glow disc. |
| `master-maradekos-osztas.png` | Osztásmester | Three small round plates, each holding two colorful candies, and one single candy left over in front, glowing softly. Peach glow disc. |
| `master-beturend.png` | Betűrend-bajnok | A cute little toy train with an engine and three wagons, the wagons carrying wooden letter blocks "A", "B", "C" in order. Teal glow disc. |
| `perfect-many.png` | Hibátlan hős (3/10/25 kör) | Three golden trophies of increasing size standing side by side on a small dusty rose podium, a star on each trophy. Sage green glow disc. |
| `no-hint.png` | Segítség nélkül | A small flying superhero cape in dusty rose with a golden star emblem, motion lines behind it. Pink glow disc. |
| `never-give-up.png` | Nem adom fel | A friendly rounded green mountain with a winding dotted path to the top, a small flag with a golden star planted on the summit. Sage green glow disc. |
| `paper-hero.png` | Füzetes hős | A teal school backpack with a notebook and a pink pencil peeking out of the top, a gold star patch on the front flap. Light teal glow disc. |

**Betűs képek:** a `master-j-ly` és a `master-beturend` kivétel a „NO text, NO
letters" szabály alól. A közös blokkból ennél a kettőnél töröld ezt a sort, és
a promptba írd be: *"The only letters in the image are the ones on the blocks."*
A generátorok gyakran elrontják a betűket, ezért ezeket nézd át: a „ly"
egyetlen kockán legyen, ne „Iy" vagy „ty".

**Kicsiben is nézd meg (120 px):** a `master-maradekos-osztas` és a
`perfect-many` több apró elemből áll, ezek könnyen zajossá válnak.

## Feldolgozás és bekötés

A generált képek gyakran nem valódi átlátszóak: a „sakktábla" minta valódi
pixelekként benne van. Ezért minden új képet körbe kell vágni és kicsinyíteni
(ImageMagick, a `<forrás>` a generált fájl, az `<id>` a jelvény azonosítója;
a kimenet **másik fájl**, hogy az eredeti megmaradjon):

```bash
magick <forrás>.png \( -size 1254x1254 xc:black -fill white -draw "circle 627,627 627,31" -blur 0x1 \) \
  -alpha off -compose copy_opacity -composite -resize 512x512 -strip assets/images/badges/<id>.png
```

(A kör közepe és sugara a 1254 px-es képekre van méretezve; más méretnél igazítsd.)
Ha a kép már alfa-csatornás és nem kör alakú (pl. kilógó elemekkel), elég a
`-resize 512x512 -strip`. Ellenőrzés: krémszínű (`#FAF7F5`) háttéren nézd meg.

Az app a képeket a `constants/images.ts` `badgeImages` térképéből veszi, a
jelvény-azonosító a kulcs. A `Badge.id` típusa ennek a kulcsa, ezért **új
jelvényhez előbb a kép és a térkép-sor kell**, különben nem fordul:

1. a kép: `assets/images/badges/<id>.png`
2. `constants/images.ts`: `import` + sor a `badgeImages`-ben
3. `constants/badges.ts`: a jelvény (`id`, `title`, `description`)
4. `lib/badges.ts`: a feloldás szabálya + teszt

Szintezett családnál több azonosító mutat ugyanarra az importra (pl.
`"days-10": badgeDays, "days-25": badgeDays`), a szintet a `Badge.tier` adja.

A `BadgeCard` ugyanazt a képet rajzolja zárolva is: halványítva és szürkítve
(`opacity` + `filter: grayscale`), lakat-jellel.
