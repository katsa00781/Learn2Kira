import type { Exercise, ExerciseType } from "@/types/exercise";

/** Minden feladattípus-komponens ugyanezt a szerződést követi. */
export type ExerciseProps<T extends ExerciseType> = {
  exercise: Extract<Exercise, { type: T }>;
  /** Egyszer hívódik, amikor a gyerek véglegesen válaszolt. */
  onAnswer: (correct: boolean) => void;
};
