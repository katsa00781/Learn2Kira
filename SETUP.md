# Learning2Kira – indulás

A feladatbank (`types/`, `data/`, `scripts/`) és a dokumentáció kész. Az Expo
projekt még nincs inicializálva — ez a mappa a tartalom és a kontextus.

## 1. Expo projekt rátelepítése

Ebben a mappában, a meglévő fájlok megtartásával:

```bash
cd ~/Developer/Projektek/learn2kira
npx create-expo-app@latest . --template default
```

A parancs rákérdez, ha nem üres a mappa. A meglévő `package.json`-t felül fogja
írni — előtte mentsd el a `scripts` blokkot belőle, és utána írd vissza:

```json
"validate": "tsx scripts/validate.ts",
"typecheck": "tsc --noEmit"
```

A `tsconfig.json`-ba vissza kell tenni a `"strict": true`,
`"noUncheckedIndexedAccess": true` és `"paths": { "@/*": ["./*"] }` sorokat.

## 2. Függőségek

```bash
npx expo install nativewind tailwindcss react-native-reanimated \
  expo-haptics expo-av expo-font react-native-svg \
  react-native-gesture-handler @react-native-async-storage/async-storage
npm i -D tsx @types/node
npm i zustand
```

## 3. app.json

```json
{
  "expo": {
    "ios": {
      "supportsTablet": true,
      "requireFullScreen": true
    }
  }
}
```

## 4. Feladatbank ellenőrzése

```bash
npm run validate
```

1574 feladatot és 66 témakört kell kiírnia, hibák nélkül. Ha az Expo tsconfig
miatt a validátor nem fordul, használd a mellékelt `tsconfig.content.json`-t:

```bash
npx tsc --noEmit -p tsconfig.content.json
```

## 5. Első feladat

A `docs/feature-tasks.md` Setup szakaszától indulj. A munkamenet elején
mindig olvasd el a `CLAUDE.md`-t és a `docs/feature-tasks.md` munkanaplóját
és döntésnaplóját.

## Mi van már itt

```
CLAUDE.md                  fejlesztési szabályok — ez a forrás
docs/feature-tasks.md      feladatlista + munkanapló + döntésnapló (D-001…D-014)
docs/design-prompts.md     képernyőnkénti AI mockup promptok
README.md                  a feladatbank leírása
types/exercise.ts          Exercise (7 típus), Topic, SubjectId, SZOCSOPORT
data/                      1574 feladat, 66 témakör, 4 tantárgy
scripts/validate.ts        integritás-ellenőrző + számtani kiértékelő
assets/images/mascot/      mascot-base.png (a stílusreferencia)
```

A `components/`, `lib/`, `store/`, `constants/`, `hooks/` mappák üresen állnak,
a CLAUDE.md mappastruktúrája szerint.
