import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExerciseMascotContext } from "@/components/exercise/ExerciseCard";
import { ExerciseRenderer } from "@/components/exercise/ExerciseRenderer";
import { PaperIntro } from "@/components/exercise/PaperIntro";
import { Mascot, type MascotState } from "@/components/mascot/Mascot";
import { CloseIcon, NotebookIcon } from "@/components/ui/Icons";
import { SegmentedProgress } from "@/components/ui/SegmentedProgress";
import { colors, darkTones } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import { usePracticeSession } from "@/hooks/usePracticeSession";

// A SafeAreaView nem NativeWind-os, ezért StyleSheet-jellegű stílust kap
const screen = { flex: 1, backgroundColor: colors.background };

// Ezeken a típusokon a maskot a kártyán kívül (alul) áll, mert a kártya maga a kezelőfelület
const MASCOT_IN_BAR = ["match-pairs", "order-items", "sort-into-groups"];

const PRAISE = ["Ügyes vagy, Kira!", "Szuper!", "Pontosan!", "Úgy van!"];

function PrimaryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} className="min-h-[60px] items-center justify-center rounded-card bg-primary px-8">
      <Text className="font-title text-[24px] text-surface">{label}</Text>
    </Pressable>
  );
}

export default function PracticeScreen() {
  const { topicId } = useLocalSearchParams<{ topicId: string }>();
  const router = useRouter();
  const practice = usePracticeSession(topicId);
  const leave = () => router.back();

  // Füzetes feladatok sorozatának elején jön a bevezető; a sorozat további feladatainál már nem
  const [paperReadyAt, setPaperReadyAt] = useState<number | null>(null);

  useEffect(() => {
    if (practice.finished) router.replace("/result");
  }, [practice.finished, router]);

  if (!practice.ready) return <SafeAreaView style={screen} />;

  if (practice.total === 0) {
    return (
      <SafeAreaView style={screen}>
        <View className="flex-1 items-center justify-center gap-6 p-6">
          <Mascot state="base" size={180} />
          <Text className="max-w-md text-center font-title text-[28px] leading-9 text-text">
            Ebből a témából ma már mindent átnéztél. Gyere vissza holnap!
          </Text>
          <PrimaryButton label="Vissza" onPress={leave} />
        </View>
      </SafeAreaView>
    );
  }

  // A kör végén az Eredmény képernyő jön
  if (practice.finished) return <SafeAreaView style={screen} />;

  const { exercise } = practice;
  if (!exercise) return null;

  if (exercise.paper && !practice.previousPaper && paperReadyAt !== practice.index) {
    return (
      <SafeAreaView style={screen}>
        <PaperIntro onReady={() => setPaperReadyAt(practice.index)} />
      </SafeAreaView>
    );
  }

  // Füzetes feladatnál a maskot vár, nem sürget
  const waiting: MascotState = exercise.paper ? "base" : "thinking";
  const waitingMessage = exercise.paper ? "Számolj nyugodtan a füzetedben!" : "Gondolkodj nyugodtan!";
  const mascot: MascotState = !practice.answered ? waiting : practice.lastCorrect ? "celebrate" : "encourage";
  const message = !practice.answered
    ? waitingMessage
    : practice.lastCorrect
      ? (PRAISE[practice.index % PRAISE.length] ?? "Ügyes vagy, Kira!")
      : "Majdnem! Nézd meg így:";
  const isLast = practice.index === practice.total - 1;
  const mascotInBar = MASCOT_IN_BAR.includes(exercise.type);
  const showBar = practice.answered || mascotInBar;

  return (
    <SafeAreaView style={screen}>
      <View className="flex-row items-center gap-5 px-6 pb-2 pt-3">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Kilépés"
          onPress={leave}
          className="h-[52px] w-[52px] items-center justify-center rounded-full bg-surface"
          style={softShadow}
        >
          <CloseIcon size={22} color={colors.text} />
        </Pressable>
        <SegmentedProgress className="flex-1" total={practice.total} current={practice.index} />
      </View>

      <ScrollView className="flex-1" contentContainerClassName="w-full max-w-[1100px] items-center self-center p-6">
        {exercise.paper && (
          <View className="mb-4 flex-row items-center gap-2 self-start rounded-full bg-secondary/25 px-4 py-2">
            <NotebookIcon size={22} color={darkTones.secondary} />
            <Text className="font-title text-[18px]" style={{ color: darkTones.secondary }}>
              Füzetes feladat
            </Text>
          </View>
        )}
        <ExerciseMascotContext.Provider value={mascotInBar ? null : mascot}>
          <ExerciseRenderer key={exercise.id} exercise={exercise} onAnswer={practice.answer} />
        </ExerciseMascotContext.Provider>
      </ScrollView>

      {showBar && (
        <View className="flex-row items-center gap-4 rounded-t-card bg-surface px-6 py-3" style={softShadow}>
          {mascotInBar && <Mascot state={mascot} size={88} />}
          <Text className={`flex-1 font-title text-[24px] ${practice.answered && !practice.lastCorrect ? "text-error" : "text-text"}`}>{message}</Text>
          {practice.answered && <PrimaryButton label={isLast ? "Befejezés" : "Tovább"} onPress={practice.next} />}
        </View>
      )}
    </SafeAreaView>
  );
}
