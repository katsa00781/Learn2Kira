# Learning2Kira – Design promptok

Képernyőnkénti promptok AI mockup generáláshoz (Nano Banana / Midjourney / Ideogram).

**A jóváhagyott mockupok a `docs/Learning2Kira.pdf`-ben vannak** (6 képernyő, fekvő iPad + álló iPhone); az app ezek alapján készült. A promptok a mockupok eredetijei, új képernyőhöz vagy változathoz használd őket. A PDF angol szövegű, és a tantárgyválasztón még három kártya van (Matek és Természet „Coming soon" állapotban): az app négy éles kártyát mutat, lásd a 2. promptot.

## Használat

1. Generáld le először a **Kezdőlapot** (1. prompt)
2. Válaszd ki a legjobbat, és **azt a képet csatold referenciaként** minden további prompthoz
3. A további promptok elé írd: `Match the exact visual style, colors, and proportions of the attached reference.`
4. A maskot képét (`mascot-base.png`) is csatold minden prompthoz

**Figyelem:** a képgenerátorok nem tudnak magyar ékezetes szöveget kiírni. A promptokban angol placeholder feliratok vannak. A kimenet **layout- és hangulatreferencia**, nem végleges szöveg.

---

## Közös stílusblokk

Ez minden prompt része. Ne hagyd ki egyikből sem.

```
STYLE: Flat vector iPad app UI mockup, landscape orientation, 4:3 aspect ratio.
Children's educational app for an 8-year-old girl. Playful but not babyish —
"big girl" feel, calm and warm.

COLOR PALETTE (use exactly these):
- background: #FAF7F5 warm off-white
- cards/surfaces: #FFFFFF pure white
- primary: #C4788F dusty rose
- secondary: #7EBDC2 muted teal
- accent: #F2B880 peach
- success: #7FB069 sage green
- error/warning: #E07A5F terracotta
- text: #3D3A4B deep plum-grey (never pure black)

TYPOGRAPHY: Rounded sans-serif, Nunito-like. Bold headings, generous size.
Large readable body text.

SHAPES: 24px border radius on all cards and buttons. Soft diffuse shadows,
no neumorphism, no gradients on surfaces. Generous whitespace.

MASCOT: friendly cartoon monkey, flat vector, thick even outline, dusty rose
body, peach face, teal eye rings. (Attached reference.)

NO: dark mode, neon colors, harsh red, cluttered layout, tiny text,
photorealism, 3D rendering, drop shadows on text.
```

---

## 1. Kezdőlap (Home)

```
[COMMON STYLE BLOCK]

SCREEN: Home screen of a children's learning app, landscape iPad.

LAYOUT:
- Left half: large friendly cartoon monkey mascot waving, sitting on a soft
  pastel platform. Around it, a few small floating decorative shapes (stars,
  soft circles) in peach and teal.
- Right half, vertically stacked with generous spacing:
  - Greeting headline, large bold dusty rose text: "Hi Kira!"
  - Small subtitle in muted grey: "Ready to practice?"
  - A horizontal row of two small stat pills:
    - Left pill: flame icon + number "7" + tiny label "day streak"
    - Right pill: star icon + number "340" + tiny label "XP"
  - A wide progress bar showing today's goal, roughly 60% filled in sage green,
    with a small label above it: "Today's goal"
  - A large primary CTA button, dusty rose fill, white bold text: "Start"
    Full width of the right column, tall and finger-friendly.

MOOD: welcoming, calm, inviting. Lots of breathing room.
```

---

## 2. Tantárgyválasztó (Subject picker)

```
[COMMON STYLE BLOCK]
Match the exact visual style, colors, and proportions of the attached reference.

SCREEN: Subject selection screen, landscape iPad.

LAYOUT:
- Top left: small back arrow in a circular white button.
- Top center: bold heading "Choose a subject"
- Top right: small mascot cheering, half-size, overlapping the top edge of the cards.
- Center: FOUR large cards in a 2x2 grid, equal size, tall, 24px radius,
  white background with soft shadow. ALL cards are active, none is locked:
  - Card 1: peach circular icon with the letters "Aa". Title "Grammar".
    Below it a thin progress bar, 30% filled in dusty rose, and small grey
    text "16 topics". This card has a thin dusty rose border and a soft
    rose-tinted shadow, because it has already been started.
  - Card 2: dusty rose circular icon with the letters "ly". Title "Spelling".
    Thin progress bar, empty, small grey text "3 topics".
  - Card 3: teal circular icon with the digits "12". Title "Math".
    Thin progress bar, empty, small grey text "28 topics".
  - Card 4: sage green circular icon with a leaf symbol. Title "Nature".
    Thin progress bar, empty, small grey text "19 topics".

IMPORTANT: no lock icons, no dimmed cards, no "Coming soon" labels.
The four cards must look equally inviting.

PORTRAIT / PHONE VARIANT: the four cards stack vertically as wide horizontal
cards: icon on the left, title + progress bar + topic count on the right.
```

---

## 3. Témaválasztó (Topic list)

```
[COMMON STYLE BLOCK]
Match the exact visual style, colors, and proportions of the attached reference.

SCREEN: Topic list inside the Grammar subject, landscape iPad.

LAYOUT:
- Top bar: back arrow left, heading "Grammar" center, small peach book icon
  next to the heading.
- Below the heading: a wide summary strip showing overall subject progress —
  thin bar 30% filled in dusty rose, with text "3 of 8 topics done".
- Main area: a vertical list of topic rows in a two-column grid,
  each row a white rounded card with soft shadow:
  - Left: small circular colored badge with a simple icon
  - Middle: topic title in bold plum-grey, and under it a thin progress bar
  - Right: either a sage green checkmark circle (completed), a small dusty
    rose number badge showing due reviews (e.g. "4"), or a faint grey dot
    (not started)
- Show 6 topic cards with a mix of these three states.
- Bottom right corner: small mascot sitting, looking up at the list.

MOOD: organized, scannable, encouraging. Progress should feel visible.
```

---

## 4. Gyakorló képernyő (Practice)

```
[COMMON STYLE BLOCK]
Match the exact visual style, colors, and proportions of the attached reference.

SCREEN: The main exercise screen, landscape iPad. This is the most important
screen — it should feel focused and calm, with no clutter.

LAYOUT:
- Top strip: a segmented progress indicator of 10 small rounded pills —
  4 filled sage green, 1 filled dusty rose (current), 5 empty light grey.
  Small close X button on the far left.
- LEFT HALF: the question area, on a white rounded card.
  - Small grey label at top: "Fill in the missing letters"
  - Below it, very large centered text showing a word with a visible gap:
    "go___a" — the gap rendered as a soft peach rounded placeholder box.
  - Below the mascot sits small in the bottom-left corner, thinking pose,
    one hand near its chin.
- RIGHT HALF: the answer area.
  - Two very large answer buttons stacked vertically, each tall and
    finger-friendly, white with a thick dusty rose border, bold centered text.
  - Between them generous spacing.
  - Below the buttons, a small ghost text button: "Hint"

CRITICAL: answer buttons must look large enough for a child's finger.
Minimum visual height comparable to 60pt. Do not shrink them.
```

---

## 5. Eredmény képernyő (Result)

```
[COMMON STYLE BLOCK]
Match the exact visual style, colors, and proportions of the attached reference.

SCREEN: End-of-session results screen, landscape iPad. Celebratory but gentle.

LAYOUT:
- Center top: the mascot in a celebrating pose, arms raised, with a few
  confetti shapes in peach, teal and sage green scattered softly around it.
  Confetti must be sparse and tasteful, not a burst.
- Below the mascot: large bold headline "Nice work!" in dusty rose.
- Below that, a row of three small stat cards, white with soft shadow:
  - "8/10" with label "correct"
  - "+45" with a star icon and label "XP earned"
  - "7" with a flame icon and label "day streak"
- Below: an XP progress bar mid-animation, filling in peach, with a small
  level label on the right.
- Below that, a small muted info card with a rounded teal left border:
  a tiny clock icon and the text "3 exercises will come back in 3 days"
- Bottom: two buttons side by side —
  - Primary, dusty rose filled: "Practice again"
  - Secondary, white with grey border: "Done"

MOOD: warm reward, no pressure. Nothing should look like failure even
though 2 answers were wrong.
```

---

## 6. Jutalmak (Rewards)

```
[COMMON STYLE BLOCK]
Match the exact visual style, colors, and proportions of the attached reference.

SCREEN: Rewards and badges screen, landscape iPad.

LAYOUT:
- Top: heading "Your rewards" with the mascot standing next to it, proud pose,
  small size.
- LEFT COLUMN (about 40% width): a monthly streak calendar.
  A grid of small rounded day squares. Completed days filled sage green with
  a tiny checkmark, missed days light grey, today outlined in dusty rose.
  Above the grid, large text "7" with the label "day streak" and a flame icon.
- RIGHT COLUMN (about 60% width): a badge collection grid, 4 columns.
  Each badge is a circular medallion with a simple flat icon inside,
  on a white rounded card.
  - Show 5 unlocked badges in full color (peach, teal, sage, dusty rose)
    each with a tiny title underneath
  - Show 7 locked badges as soft grey silhouettes at low opacity with a
    small lock icon
- Locked badges should still look inviting and collectible, not sad.

MOOD: a collection worth filling. This screen is the reason to come back.
```

---

## Iterálási tippek

- Ha a layout jó, de a szín nem: `Keep the exact same layout, change only the colors to [...]`
- Ha túl babás lett: `Less childish, more grown-up. Remove rounded cartoon faces from UI elements. Keep only the mascot illustrated.`
- Ha zsúfolt: `More whitespace. Reduce the number of elements. Larger text.`
- Ha a gombok kicsik: `Make the answer buttons significantly taller and wider. They must be easy for a child's finger.`

## Ami után a mockup megy Claude Code-ba

A generált képet csatolva:

```
Olvasd el a CLAUDE.md-et és kövesd szigorúan.
Implementáld a [képernyő neve] képernyőt a csatolt design alapján pontosan.
A színeket a constants/colors.ts-ből vedd, ne a képből pipetázd — a kép
színei torzulhattak a generálás során.
A feliratok magyarul legyenek, a képen látható angol placeholderek helyett:
[itt sorold fel a magyar szövegeket]
```
