import type { Exercise } from "@/types/exercise";
import { MatchPairs } from "./MatchPairs";
import { MissingLetter } from "./MissingLetter";
import { MultipleChoice } from "./MultipleChoice";
import { NumericInput } from "./NumericInput";
import { OrderItems } from "./OrderItems";
import { Punctuation } from "./Punctuation";
import { SortIntoGroups } from "./SortIntoGroups";

type Props = {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
};

/** A feladat típusa alapján választ komponenst. Új feladatnál a szülő `key={exercise.id}`-t ad. */
export function ExerciseRenderer({ exercise, onAnswer }: Props) {
  switch (exercise.type) {
    case "multiple-choice":
      return <MultipleChoice exercise={exercise} onAnswer={onAnswer} />;
    case "numeric-input":
      return <NumericInput exercise={exercise} onAnswer={onAnswer} />;
    case "missing-letter":
      return <MissingLetter exercise={exercise} onAnswer={onAnswer} />;
    case "punctuation":
      return <Punctuation exercise={exercise} onAnswer={onAnswer} />;
    case "order-items":
      return <OrderItems exercise={exercise} onAnswer={onAnswer} />;
    case "match-pairs":
      return <MatchPairs exercise={exercise} onAnswer={onAnswer} />;
    case "sort-into-groups":
      return <SortIntoGroups exercise={exercise} onAnswer={onAnswer} />;
    default:
      return assertNever(exercise);
  }
}

function assertNever(value: never): never {
  throw new Error(`Ismeretlen feladattípus: ${JSON.stringify(value)}`);
}
