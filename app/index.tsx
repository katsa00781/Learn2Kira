import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import { ExerciseRenderer } from "@/components/exercise/ExerciseRenderer";
import { allExercises, subjects, topicsBySubject } from "@/data";
import type { ExerciseType } from "@/types/exercise";

// ÁTMENETI: a feladatkomponensek próbája, típusonként néhány feladattal. A Kezdőlap feladat cseréli le.
const TYPES: ExerciseType[] = ["multiple-choice", "numeric-input", "missing-letter", "punctuation", "order-items", "match-pairs"];
const samples = TYPES.flatMap((type) => allExercises.filter((e) => e.type === type).filter((_, i) => i % 15 === 0).slice(0, 3));

export default function HomeScreen() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState<boolean | null>(null);
  const exercise = samples[index];
  if (!exercise) return null;

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="items-center gap-6 p-6 pt-20">
      <Text className="font-title text-xl text-text">Gyakorlókör (próba)</Text>
      {subjects.map((subject) => {
        const topic = topicsBySubject(subject.id)[0];
        if (!topic) return null;
        return (
          <Pressable
            key={subject.id}
            className="rounded-card bg-secondary px-6 py-3"
            onPress={() => router.push({ pathname: "/practice/[topicId]", params: { topicId: topic.id } })}
          >
            <Text className="font-task text-lg text-surface">{subject.title}: {topic.title}</Text>
          </Pressable>
        );
      })}
      <ExerciseRenderer key={exercise.id} exercise={exercise} onAnswer={setResult} />
      {result !== null && (
        <>
          <Text className="font-title text-2xl text-text">{result ? "Ügyes vagy, Kira!" : "Majdnem! Nézd meg így:"}</Text>
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
