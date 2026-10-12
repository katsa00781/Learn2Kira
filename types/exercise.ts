export type SubjectId = 'nyelvtan' | 'helyesiras' | 'matek' | 'kornyezet';

export type Topic = {
  id: string;
  subject: SubjectId;
  title: string;
  order: number;
  /** A tankönyv oldalszáma, ahol a téma kezdődik. Nyelvtan és helyesírás 3. (OH-MNY03TB) */
  book?: number;
};

type Base = {
  id: string;
  topicId: string;
  hint?: string;
  /**
   * A feladatot füzetben kell megoldani, csak az eredményt írja be.
   * Más képernyőt kap: nincs időnyomás, "Vedd elő a füzeted!" jelzés,
   * a maskot vár és nem sürget.
   *
   * Szabály: a MEGOLDÁS lehet offline, a VÁLASZ nem. Ha a végeredmény
   * szám vagy választás, bemehet. Ha rajz vagy építés, nem.
   */
  paper?: boolean;
};

export type Exercise =
  | (Base & {
      type: 'missing-letter';
      before: string;
      after: string;
      options: string[];
      answer: string;
    })
  | (Base & {
      type: 'multiple-choice';
      question: string;
      options: string[];
      answerIndex: number;
    })
  | (Base & {
      type: 'sort-into-groups';
      groups: string[];
      items: { text: string; group: string }[];
    })
  | (Base & {
      type: 'match-pairs';
      pairs: { left: string; right: string }[];
    })
  | (Base & {
      type: 'order-items';
      items: string[];
      correctOrder: string[];
    })
  | (Base & {
      type: 'punctuation';
      sentence: string;
      options: string[];
      answer: string;
    })
  | (Base & {
      type: 'numeric-input';
      question: string;
      answer: number;
      /** Mértékegység, ha a válaszhoz tartozik — "cm", "dkg", "Ft", "perc" */
      unit?: string;
      /** Becsléses feladatoknál a jó válasz sávja: |beírt - answer| <= tolerance */
      tolerance?: number;
    });

export type ExerciseType = Exercise['type'];

/**
 * A szócsoportok elnevezése a tankönyvet követi, nem a hagyományos szófaji
 * szakszavakat. A Nyelvtan és helyesírás 3. harmadikban még nem használja a
 * "főnév / ige / melléknév / számnév" megnevezéseket — ne vezesd be őket.
 */
export const SZOCSOPORT = {
  megnevezo: 'megnevező szó',
  cselekves: 'cselekvést kifejező szó',
  tulajdonsag: 'tulajdonságot kifejező szó',
  mennyiseg: 'mennyiséget kifejező szó',
} as const;
