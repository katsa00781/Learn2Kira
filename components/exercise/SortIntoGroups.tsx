import { useEffect, useState } from "react";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import { AnswerButton } from "@/components/ui/AnswerButton";
import { Card } from "@/components/ui/Card";
import { HintButton } from "@/components/ui/HintButton";
import { shuffle } from "@/lib/shuffle";
import type { ExerciseProps } from "./types";

const WRONG_FLASH_MS = 700;

/**
 * Csoportosítás érintéssel: előbb a szót, aztán a csoportot kell megérinteni.
 * Jó csoport: a szó bekerül és zöld marad. Rossz csoport: a csoport rövid ideig terrakotta,
 * a szó visszakerül a készletbe. A feladat akkor helyes, ha egyetlen tévedés nélkül sikerült.
 */
export function SortIntoGroups({ exercise, onAnswer }: ExerciseProps<"sort-into-groups">) {
  const { width } = useWindowDimensions();
  const [poolOrder] = useState(() => shuffle(exercise.items.map((_, index) => index)));
  const [selected, setSelected] = useState<number | null>(null);
  const [placed, setPlaced] = useState<number[]>([]);
  const [wrongGroup, setWrongGroup] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const sideBySide = width >= 700;

  useEffect(() => {
    if (wrongGroup === null) return;
    const timer = setTimeout(() => setWrongGroup(null), WRONG_FLASH_MS);
    return () => clearTimeout(timer);
  }, [wrongGroup]);

  const pickGroup = (group: string) => {
    if (selected === null || wrongGroup !== null) return;
    if (exercise.items[selected]?.group === group) {
      const next = [...placed, selected];
      setPlaced(next);
      setSelected(null);
      if (next.length === exercise.items.length) onAnswer(mistakes === 0);
    } else {
      setMistakes((count) => count + 1);
      setWrongGroup(group);
      setSelected(null);
    }
  };

  const groupStyle = (group: string) => {
    if (wrongGroup === group) return "border-error bg-error/10";
    return selected === null ? "border-text/10 bg-surface" : "border-dashed border-primary bg-primary/5";
  };

  return (
    <Card className="w-full gap-5">
      <Text className="font-task text-[24px] leading-8 text-text">Válogasd csoportokba a szavakat!</Text>

      <View className="flex-row flex-wrap gap-3">
        {poolOrder
          .filter((index) => !placed.includes(index))
          .map((index) => (
            <AnswerButton
              key={index}
              label={exercise.items[index]?.text ?? ""}
              state={selected === index ? "selected" : "idle"}
              disabled={wrongGroup !== null}
              onPress={() => setSelected(index)}
            />
          ))}
      </View>

      <View className={`gap-4 ${sideBySide ? "flex-row" : ""}`}>
        {exercise.groups.map((group) => (
          <Pressable
            key={group}
            accessibilityRole="button"
            accessibilityLabel={group}
            onPress={() => pickGroup(group)}
            className={`min-h-[120px] gap-3 rounded-card border-[3px] p-4 ${sideBySide ? "flex-1" : ""} ${groupStyle(group)}`}
          >
            <Text className="font-title text-[20px] leading-6 text-text">{group}</Text>
            {placed
              .filter((index) => exercise.items[index]?.group === group)
              .map((index) => (
                <View key={index} className="rounded-2xl border-2 border-success bg-success/20 px-4 py-3">
                  <Text className="font-task text-[20px] text-text">{exercise.items[index]?.text}</Text>
                </View>
              ))}
          </Pressable>
        ))}
      </View>

      <HintButton hint={exercise.hint} />
    </Card>
  );
}
