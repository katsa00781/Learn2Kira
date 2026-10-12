import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { AnswerButton, type AnswerState } from "@/components/ui/AnswerButton";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { images } from "@/constants/images";

// ÁTMENETI: az alap UI komponensek próbája. A kezdőlap feladata cseréli le.
export default function HomeScreen() {
  const [picked, setPicked] = useState<number | null>(null);
  const stateOf = (i: number): AnswerState => (picked === null ? "idle" : i === 1 ? "correct" : i === picked ? "wrong" : "idle");

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="items-center gap-6 p-6 pt-20">
      <Image source={images.mascotBase} className="h-40 w-40" resizeMode="contain" />
      <Text className="font-title text-3xl text-text">Szia Kira!</Text>
      <Card className="w-full max-w-xl gap-4">
        <Text className="font-task text-[22px] text-text">Melyik a megnevező szó?</Text>
        <ProgressBar value={0.4} />
        <View className="gap-3">
          {["fut", "kutya", "kék"].map((label, i) => (
            <AnswerButton key={label} label={label} state={stateOf(i)} disabled={picked !== null} onPress={() => setPicked(i)} />
          ))}
        </View>
        <Text className="font-body text-base text-textMuted" onPress={() => setPicked(null)}>
          Újra
        </Text>
      </Card>
    </ScrollView>
  );
}
