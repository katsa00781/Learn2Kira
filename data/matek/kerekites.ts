import { ni, mc } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'matek-kerekites';

/**
 * Számszomszédok és kerekítés – tankönyv 72. és 74. oldal.
 *
 * Az 5-re végződő számok (a felezőpont) külön figyelmet kapnak a 20–24.
 * feladatokban: ott kerekítünk felfelé, és ez a szabály, nem sejtés.
 */
export const kerekitesExercises: Exercise[] = [
  ni(T, 1, 'Mi a 347 alsó tízes számszomszédja?', 340),
  ni(T, 2, 'Mi a 347 felső tízes számszomszédja?', 350),
  ni(T, 3, 'Mi a 682 alsó százas számszomszédja?', 600),
  ni(T, 4, 'Mi a 682 felső százas számszomszédja?', 700),
  ni(T, 5, 'Mi az 509 alsó tízes számszomszédja?', 500),
  ni(T, 6, 'Mi az 509 felső tízes számszomszédja?', 510),
  ni(T, 7, 'Mi a 940 alsó százas számszomszédja?', 900),
  ni(T, 8, 'Mi a 940 felső százas számszomszédja?', 1000),

  ni(T, 9, 'Kerekítsd tízesekre: 347', 350, { hint: 'A 7 nagyobb 5-nél, tehát felfelé.' }),
  ni(T, 10, 'Kerekítsd tízesekre: 342', 340),
  ni(T, 11, 'Kerekítsd tízesekre: 681', 680),
  ni(T, 12, 'Kerekítsd tízesekre: 509', 510),
  ni(T, 13, 'Kerekítsd tízesekre: 294', 290),
  ni(T, 14, 'Kerekítsd tízesekre: 798', 800),

  ni(T, 15, 'Kerekítsd százasokra: 347', 300, { hint: 'A tízesek számjegyét nézd: 4, tehát lefelé.' }),
  ni(T, 16, 'Kerekítsd százasokra: 682', 700),
  ni(T, 17, 'Kerekítsd százasokra: 251', 300),
  ni(T, 18, 'Kerekítsd százasokra: 149', 100),
  ni(T, 19, 'Kerekítsd százasokra: 940', 900),

  ni(T, 20, 'Kerekítsd tízesekre: 345', 350, { hint: 'Pont a felénél van — ilyenkor mindig felfelé kerekítünk.' }),
  ni(T, 21, 'Kerekítsd tízesekre: 675', 680),
  ni(T, 22, 'Kerekítsd százasokra: 450', 500, { hint: 'Pont a felénél van — felfelé.' }),
  ni(T, 23, 'Kerekítsd százasokra: 250', 300),
  mc(T, 24, 'Merre kerekítünk, ha a szám pont a két szomszéd felénél van?', ['felfelé', 'lefelé', 'ahogy jólesik'], 0),

  mc(T, 25, 'Melyik szám kerekítve tízesekre 400?', ['394', '405', '396'], 2, 'Nézd meg mindhármat!'),
  mc(T, 26, 'Melyik szám kerekítve százasokra 500?', ['449', '462', '551'], 1),
  mc(T, 27, 'Hány szám kerekíthető tízesekre 350-re?', ['5', '10', '20'], 1, 'A 345-től a 354-ig.'),
  mc(T, 28, 'Igaz vagy hamis? A 349 százasokra kerekítve 300.', ['Igaz', 'Hamis'], 0),
];
