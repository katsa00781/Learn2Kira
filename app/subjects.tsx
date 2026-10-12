import { useRouter } from "expo-router";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mascot } from "@/components/mascot/Mascot";
import { BackButton } from "@/components/ui/BackButton";
import { SubjectCard } from "@/components/ui/SubjectCard";
import { colors } from "@/constants/colors";
import { exercisesByTopic, subjects, topicsBySubject } from "@/data";
import { chunk } from "@/lib/chunk";
import { seenRatio } from "@/lib/progress";
import { useReviewStore } from "@/store/reviewStore";

const screen = { flex: 1, backgroundColor: colors.background };

export default function SubjectsScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const wide = width >= 700;
  const cards = useReviewStore((s) => s.cards);

  const cardOf = (subject: (typeof subjects)[number]) => {
    const topics = topicsBySubject(subject.id);
    const exercises = topics.flatMap((t) => exercisesByTopic(t.id));
    return (
      <SubjectCard
        key={subject.id}
        subject={subject.id}
        title={subject.title}
        topicCount={topics.length}
        progress={seenRatio(exercises, cards)}
        layout={wide ? "tall" : "row"}
        onPress={() => router.push({ pathname: "/subject/[id]", params: { id: subject.id } })}
      />
    );
  };

  return (
    <SafeAreaView style={screen}>
      <View className="z-10 px-6 pb-2 pt-3">
        <View className="flex-row items-center">
          <BackButton onPress={() => router.back()} />
          {wide && <Text className="flex-1 text-center font-title text-[44px] text-text">Válassz tantárgyat!</Text>}
          {wide && <View className="w-[52px]" />}
        </View>
        {!wide && <Text className="mt-4 max-w-[220px] font-title text-[34px] leading-[40px] text-text">Válassz tantárgyat!</Text>}
        {/* A fejléc z-indexe magasabb, mint a görgetett listáé, így a maskot a kártyák fölé lóghat */}
        <View pointerEvents="none" className="absolute right-6 top-2">
          <Mascot state="celebrate" size={wide ? 150 : 130} />
        </View>
      </View>
      <ScrollView contentContainerClassName={`w-full self-center gap-5 p-6 ${wide ? "max-w-[960px]" : ""}`}>
        {wide
          ? chunk(subjects, 2).map((row) => (
              <View key={row.map((s) => s.id).join()} className="flex-row gap-5">
                {row.map(cardOf)}
              </View>
            ))
          : subjects.map(cardOf)}
      </ScrollView>
    </SafeAreaView>
  );
}
