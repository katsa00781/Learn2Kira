import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
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
  const cards = useReviewStore((s) => s.cards);

  return (
    <SafeAreaView style={screen}>
      <View className="flex-row items-center justify-between px-6 pb-2 pt-3">
        <BackButton onPress={() => router.back()} />
        <Text className="font-title text-[32px] text-text">Válassz tantárgyat!</Text>
        <Mascot state="base" size={72} />
      </View>
      <ScrollView contentContainerClassName="w-full max-w-[900px] gap-5 self-center p-6">
        {chunk(subjects, 2).map((row) => (
          <View key={row.map((s) => s.id).join()} className="flex-row gap-5">
            {row.map((subject) => {
              const topics = topicsBySubject(subject.id);
              const exercises = topics.flatMap((t) => exercisesByTopic(t.id));
              return (
                <SubjectCard
                  key={subject.id}
                  subject={subject.id}
                  title={subject.title}
                  topicCount={topics.length}
                  progress={seenRatio(exercises, cards)}
                  onPress={() => router.push({ pathname: "/subject/[id]", params: { id: subject.id } })}
                />
              );
            })}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
