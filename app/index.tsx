import { useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import { MultipleChoice } from "@/components/exercise/MultipleChoice";
import { allExercises } from "@/data";
import type { Exercise } from "@/types/exercise";

type MultipleChoiceExercise = Extract<Exercise, { type: "multiple-choice" }>;
const samples = allExercises.filter((e): e is MultipleChoiceExercise => e.type === "multiple-choice");

// ÁTMENETI: a feladatkomponensek próbája. A Kezdőlap feladat cseréli le.
export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState<boolean | null>(null);
  const exercise = samples[index];
  if (!exercise) return null;

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="items-center gap-6 p-6 pt-20">
      <MultipleChoice key={exercise.id} exercise={exercise} onAnswer={setResult} />
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
