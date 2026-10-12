import { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { NumberPad } from "@/components/ui/NumberPad";
import { isNumericCorrect } from "@/lib/answers";
import { ExerciseCard } from "./ExerciseCard";
import type { ExerciseProps } from "./types";

const MAX_DIGITS = 5;

export function NumericInput({ exercise, onAnswer }: ExerciseProps<"numeric-input">) {
  const { width, height } = useWindowDimensions();
  const [value, setValue] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const landscape = width > height && width >= 700;
  const unit = exercise.unit ? ` ${exercise.unit}` : "";
  const answered = result !== null;

  const addDigit = (digit: string) => {
    if (value.length >= MAX_DIGITS) return;
    setValue(value === "0" ? digit : value + digit);
  };

  const submit = () => {
    if (answered || value === "") return;
    const correct = isNumericCorrect(value, exercise.answer, exercise.tolerance);
    setResult(correct);
    onAnswer(correct);
  };

  const displayStyle =
    result === null ? "border-secondary/40 bg-background" : result ? "border-success bg-success/20" : "border-error bg-error/20";

  return (
    <View className={`w-full gap-6 ${landscape ? "flex-row items-start" : ""}`}>
      <ExerciseCard className={`gap-6 ${landscape ? "flex-1 self-stretch justify-center" : "w-full"}`}>
        <Text className="font-task text-[26px] leading-9 text-text">{exercise.question}</Text>
        <View className={`min-h-[72px] flex-row items-center justify-center rounded-card border-2 px-6 py-3 ${displayStyle}`}>
          <Text className={`font-title text-[36px] ${value === "" ? "text-textMuted" : "text-text"}`}>
            {value === "" ? "?" : value}
            {value !== "" && unit}
          </Text>
        </View>
        {result === false && (
          <Text className="font-task text-[22px] text-text">
            Helyes válasz: {exercise.answer}
            {unit}
          </Text>
        )}
      </ExerciseCard>
      <View className={landscape ? "flex-1 items-center" : "w-full items-center"}>
        <NumberPad
          disabled={answered}
          submitDisabled={value === ""}
          onDigit={addDigit}
          onBackspace={() => setValue(value.slice(0, -1))}
          onSubmit={submit}
        />
      </View>
    </View>
  );
}
