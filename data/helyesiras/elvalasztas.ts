import { mc } from '../builders';
import type { Exercise } from '@/types/exercise';

const T = 'helyesiras-elvalasztas';

/**
 * Szótagolás és elválasztás – 20 feladat.
 * A hosszú kétjegyű mássalhangzók elválasztása (hosz-szú, asz-szony) a
 * legnehezebb rész, ezért a lista végén sűrűbben jönnek.
 */
export const elvalasztasExercises: Exercise[] = [
  mc(T, 1, 'Melyik a helyes elválasztás? barát', ['ba-rát', 'bar-át', 'b-arát'], 0),
  mc(T, 2, 'Melyik a helyes elválasztás? asztal', ['as-ztal', 'asz-tal', 'a-sztal'], 1, 'Az sz egy hang, nem szabad kettévágni.'),
  mc(T, 3, 'Melyik a helyes elválasztás? ablak', ['a-blak', 'ab-lak', 'abl-ak'], 1),
  mc(T, 4, 'Melyik a helyes elválasztás? iskola', ['is-ko-la', 'isk-o-la', 'i-sko-la'], 0),
  mc(T, 5, 'Melyik a helyes elválasztás? macska', ['mac-ska', 'macs-ka', 'ma-cska'], 1, 'A cs egy hang, együtt marad.'),
  mc(T, 6, 'Melyik a helyes elválasztás? konyha', ['kon-yha', 'kony-ha', 'ko-nyha'], 1, 'A ny egy hang.'),
  mc(T, 7, 'Melyik a helyes elválasztás? eszik', ['esz-ik', 'e-szik', 'es-zik'], 1),
  mc(T, 8, 'Melyik a helyes elválasztás? tanító', ['ta-ní-tó', 'tan-í-tó', 'ta-nít-ó'], 0),
  mc(T, 9, 'Melyik a helyes elválasztás? kertben', ['ker-tben', 'kert-ben', 'ke-rtben'], 1),
  mc(T, 10, 'Melyik a helyes elválasztás? felhő', ['fe-lhő', 'fel-hő', 'felh-ő'], 1),
  mc(T, 11, 'Melyik a helyes elválasztás? oroszlán', ['oro-szlán', 'orosz-lán', 'or-oszlán'], 1),
  mc(T, 12, 'Melyik a helyes elválasztás? nagymama', ['na-gyma-ma', 'nagy-ma-ma', 'nagym-a-ma'], 1),
  mc(T, 13, 'Melyik a helyes elválasztás? lecke', ['le-cke', 'lec-ke', 'l-ecke'], 1),
  mc(T, 14, 'Melyik a helyes elválasztás? játszik', ['ját-szik', 'játsz-ik', 'já-tszik'], 0),
  mc(T, 15, 'Hány szótagú ez a szó? katicabogár', ['4', '5', '6'], 1, 'ka-ti-ca-bo-gár'),
  mc(T, 16, 'Hány szótagú ez a szó? tanterem', ['2', '3', '4'], 1, 'tan-te-rem'),
  mc(T, 17, 'Melyik a helyes elválasztás? hosszú', ['ho-sszú', 'hosz-szú', 'hossz-ú'], 1, 'A hosszú ssz kettéválik: sz + sz.'),
  mc(T, 18, 'Melyik a helyes elválasztás? asszony', ['a-sszony', 'asz-szony', 'assz-ony'], 1),
  mc(T, 19, 'Melyik a helyes elválasztás? ujjam', ['u-jjam', 'uj-jam', 'ujj-am'], 1),
  mc(T, 20, 'Melyik szót nem lehet elválasztani?', ['virág', 'könyv', 'alma'], 1, 'Csak egy szótag van benne.'),
];
