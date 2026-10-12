import type { Exercise, Topic } from '@/types/exercise';

import { hangokExercises } from './hangok';
import { elvalasztasExercises } from './elvalasztas';
import { jLyExercises } from './j-ly';

/**
 * Helyesírás – külön tantárgykártya a nyelvtan mellett.
 *
 * Miért külön: ezek a témák a tankönyvben nem önálló fejezetek. A hangok
 * időtartama és az elválasztás a 2. osztály ismétlésében van (4. oldal), a
 * j/ly pedig végig az éven szétszórva, a "Gyakorold a helyesírást!" blokkokban
 * és a 117. oldali helyesírási szógyűjteményben. Spirálisan visszatérő anyag,
 * nem heti lecke — ezért nem illik a tanmenetet követő nyelvtan témalistába,
 * de pont erre való a Leitner-ismétlés.
 */
export const helyesirasTopics: Topic[] = [
  { id: 'helyesiras-hangok', subject: 'helyesiras', title: 'Hangok időtartama', order: 1, book: 4 },
  { id: 'helyesiras-elvalasztas', subject: 'helyesiras', title: 'Szótagolás, elválasztás', order: 2, book: 4 },
  { id: 'helyesiras-j-ly', subject: 'helyesiras', title: 'j vagy ly', order: 3, book: 117 },
];

export const helyesirasExercises: Exercise[] = [
  ...hangokExercises,
  ...elvalasztasExercises,
  ...jLyExercises,
];
