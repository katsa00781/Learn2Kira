# Learning2Kira – fejlesztői indulás

Az Expo projekt él, a feladatbank és az alkalmazás képernyői készen vannak; a
hátralévő munka a `docs/feature-tasks.md`-ben van.

## Indítás

```bash
npm install
npm run ios        # natív build és indítás (Xcode és iOS szimulátor/eszköz kell)
npm start          # csak a Metro szerver
```

Az app iPad-first: fejlesztéskor fekvő iPad-szimulátoron nézd, aztán állóban
és iPhone-on is. A `requireFullScreen: true` miatt Slide Over nem lehetséges.

## Parancsok

| Parancs | Mire jó |
|---|---|
| `npm test` | A `lib/*.test.ts` unit tesztjei (`tsx --test`) |
| `npm run typecheck` | TypeScript ellenőrzés (az app) |
| `npm run typecheck:content` | TypeScript ellenőrzés (a feladatbank, `tsconfig.content.json`) |
| `npm run lint` | ESLint |
| `npm run validate` | Feladatbank-ellenőrzés; **minden tartalombővítés után kötelező**, 1574 feladatot és 66 témakört kell kiírnia, hibák nélkül |

Új útvonal (`app/` fájl) hozzáadása után egyszer le kell futnia az Expo
exportnak vagy az `npm start`-nak, hogy a típusos útvonalak újragenerálódjanak:

```bash
npx expo export --platform ios
```

## Mi hol van

```
CLAUDE.md                  fejlesztési szabályok — ez a forrás (mappastruktúra is itt)
docs/feature-tasks.md      feladatlista + munkanapló + döntésnapló
docs/design-prompts.md     képernyőnkénti AI mockup promptok
docs/badge-prompts.md      jelvényképek promptjai és a képek feldolgozása
docs/Learning2Kira.pdf     a jóváhagyott mockupok (6 képernyő, fekvő + álló)
README.md                  a feladatbank leírása
```

## Munkamenet

A munkamenet elején mindig olvasd el a `CLAUDE.md`-t és a
`docs/feature-tasks.md` munkanaplóját és döntésnaplóját. Feladat végén:
pipa, munkanapló-bejegyzés, (ha kell) döntésnapló, commit.
