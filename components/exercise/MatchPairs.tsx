import { useEffect, useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { AnswerButton, type AnswerState } from "@/components/ui/AnswerButton";
import { Card } from "@/components/ui/Card";
import { shuffle } from "@/lib/shuffle";
import type { ExerciseProps } from "./types";

const WRONG_FLASH_MS = 700;

/** Jobb oldali sorrend: kevert, de ne egyezzen a bal oldaliéval. */
function shuffledOrder(count: number): number[] {
  const identity = Array.from({ length: count }, (_, i) => i);
  let order = shuffle(identity);
  while (count > 1 && order.every((value, i) => value === i)) order = shuffle(identity);
  return order;
}

/**
 * Párosítás érintéssel: előbb a bal oldali, aztán a hozzá tartozó jobb oldali elem.
 * A feladat akkor helyes, ha egyetlen rossz párosítás nélkül sikerült.
 */
export function MatchPairs({ exercise, onAnswer }: ExerciseProps<"match-pairs">) {
  const { width } = useWindowDimensions();
  const [rightOrder] = useState(() => shuffledOrder(exercise.pairs.length));
  const [selected, setSelected] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [wrong, setWrong] = useState<{ left: number; right: number } | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const wide = width >= 700;

  useEffect(() => {
    if (!wrong) return;
    const timer = setTimeout(() => setWrong(null), WRONG_FLASH_MS);
    return () => clearTimeout(timer);
  }, [wrong]);

  const pickLeft = (index: number) => {
    if (matched.includes(index) || wrong) return;
    setSelected(index);
  };

  const pickRight = (index: number) => {
    if (selected === null || matched.includes(index) || wrong) return;
    if (index === selected) {
      const next = [...matched, index];
      setMatched(next);
      setSelected(null);
      if (next.length === exercise.pairs.length) onAnswer(mistakes === 0);
    } else {
      setMistakes((count) => count + 1);
      setWrong({ left: selected, right: index });
      setSelected(null);
    }
  };

  const leftState = (index: number): AnswerState => {
    if (matched.includes(index)) return "correct";
    if (wrong?.left === index) return "wrong";
    return selected === index ? "selected" : "idle";
  };

  const rightState = (index: number): AnswerState => {
    if (matched.includes(index)) return "correct";
    return wrong?.right === index ? "wrong" : "idle";
  };

  return (
    <Card className="w-full gap-5">
      <Text className="font-task text-[24px] leading-8 text-text">{exercise.hint ?? "Párosítsd az összetartozó elemeket!"}</Text>
      <View className={`flex-row ${wide ? "gap-8" : "gap-3"}`}>
        <View className="flex-1 gap-3">
          {exercise.pairs.map((pair, index) => (
            <AnswerButton
              key={pair.left}
              label={pair.left}
              state={leftState(index)}
              disabled={matched.includes(index)}
              onPress={() => pickLeft(index)}
            />
          ))}
        </View>
        <View className="flex-1 gap-3">
          {rightOrder.map((index) => (
            <AnswerButton
              key={exercise.pairs[index]?.right}
              label={exercise.pairs[index]?.right ?? ""}
              state={rightState(index)}
              disabled={matched.includes(index) || selected === null}
              onPress={() => pickRight(index)}
            />
          ))}
        </View>
      </View>
    </Card>
  );
}
