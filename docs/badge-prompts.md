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

A `BadgeCard` ugyanazt a képet rajzolja zárolva is: halványítva és szürkítve
(`opacity` + `filter: grayscale`), lakat-jellel.
