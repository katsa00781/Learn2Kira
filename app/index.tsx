import { useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import { MultipleChoice } from "@/components/exercise/MultipleChoice";
import { NumericInput } from "@/components/exercise/NumericInput";
import { allExercises } from "@/data";

// ÁTMENETI: a feladatkomponensek próbája. A Kezdőlap feladat cseréli le.
const samples = [
  ...allExercises.filter((e) => e.type === "multiple-choice").filter((_, i) => i % 40 === 0),
  ...allExercises.filter((e) => e.type === "numeric-input").filter((_, i) => i % 25 === 0),
];

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState<boolean | null>(null);
  const exercise = samples[index];
  if (!exercise) return null;

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="items-center gap-6 p-6 pt-20">
      {exercise.type === "multiple-choice" && <MultipleChoice key={exercise.id} exercise={exercise} onAnswer={setResult} />}
      {exercise.type === "numeric-input" && <NumericInput key={exercise.id} exercise={exercise} onAnswer={setResult} />}
      {result !== null && (
        <>
          <Text className="font-title text-2xl text-text">{result ? "Ügyes vagy, Kira!" : `Majdnem! ${exercise.hint ?? ""}`}</Text>
          <Pressable
            className="rounded-card bg-primary px-8 py-4"
            onPress={() => {
              setResult(null);
              setIndex((i) => (i + 1) % samples.length);
            }}
          >
            <Text className="font-title text-xl text-surface">Tovább</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}
