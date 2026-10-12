import { mp, mc } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'nyelvtan-rokon-ertelmu';

/**
 * A rokon értelmű szavak – 20 feladat. Tankönyv 30. oldal.
 * 1–10: párosítás (match-pairs)
 * 11–20: felismerés és kakukktojás
 */
export const rokonErtelmuExercises: Exercise[] = [
  mp(T, 1, [['megy', 'halad'], ['fut', 'szalad'], ['néz', 'figyel'], ['beszél', 'szól']], 'Párosítsd a hasonló jelentésű szavakat!'),
  mp(T, 2, [['szép', 'gyönyörű'], ['nagy', 'hatalmas'], ['kicsi', 'apró'], ['bátor', 'merész']]),
  mp(T, 3, [['nevet', 'kacag'], ['sír', 'zokog'], ['kiabál', 'ordít'], ['suttog', 'susog']]),
  mp(T, 4, [['ló', 'paripa'], ['kutya', 'eb'], ['macska', 'cica'], ['tyúk', 'jérce']]),
  mp(T, 5, [['vidám', 'jókedvű'], ['szomorú', 'bánatos'], ['mérges', 'dühös'], ['félős', 'ijedős']]),
  mp(T, 6, [['ház', 'épület'], ['út', 'ösvény'], ['erdő', 'rengeteg'], ['domb', 'halom']]),
  mp(T, 7, [['eszik', 'falatozik'], ['iszik', 'kortyol'], ['alszik', 'szunyókál'], ['pihen', 'nyugszik']]),
  mp(T, 8, [['gyors', 'sebes'], ['lassú', 'vontatott'], ['erős', 'izmos'], ['gyenge', 'erőtlen']]),
  mp(T, 9, [['barát', 'pajtás'], ['gyerek', 'gyermek'], ['apa', 'édesapa'], ['nagymama', 'nagyi']]),
  mp(T, 10, [['hideg', 'fagyos'], ['sötét', 'homályos'], ['piszkos', 'koszos'], ['tiszta', 'makulátlan']]),

  mc(T, 11, 'Melyik a rokon értelmű párja? szalad', ['sétál', 'fut', 'áll'], 1),
  mc(T, 12, 'Melyik a rokon értelmű párja? gyönyörű', ['csúnya', 'szép', 'nagy'], 1),
  mc(T, 13, 'Melyik a rokon értelmű párja? kacag', ['sír', 'nevet', 'beszél'], 1),
  mc(T, 14, 'Melyik a rokon értelmű párja? hatalmas', ['apró', 'nagy', 'gyors'], 1),
  mc(T, 15, 'Melyik a rokon értelmű párja? dühös', ['vidám', 'mérges', 'fáradt'], 1),

  mc(T, 16, 'Melyik a kakukktojás? megy, halad, lépked, ugrik', ['halad', 'lépked', 'ugrik'], 2, 'Három szó járást jelent, egy nem.'),
  mc(T, 17, 'Melyik a kakukktojás? szép, csinos, gyönyörű, csúnya', ['csinos', 'gyönyörű', 'csúnya'], 2),
  mc(T, 18, 'Melyik a kakukktojás? apró, parányi, kicsi, hatalmas', ['parányi', 'kicsi', 'hatalmas'], 2),
  mc(T, 19, 'Miért jó rokon értelmű szavakat használni?', ['Hogy ne ismételjük ugyanazt a szót.', 'Hogy hosszabb legyen a szöveg.', 'Hogy nehezebb legyen elolvasni.'], 0),
  mc(T, 20, 'Cseréld ki a szót rokon értelműre! A kislány hangosan nevetett.', ['sírt', 'kacagott', 'kiabált'], 1),
];
