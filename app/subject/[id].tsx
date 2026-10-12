import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mascot } from "@/components/mascot/Mascot";
import { BackButton } from "@/components/ui/BackButton";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SubjectIcon } from "@/components/ui/SubjectIcon";
import { TopicCard } from "@/components/ui/TopicCard";
import { colors } from "@/constants/colors";
import { subjectLook } from "@/constants/subjects";
import { exercisesByTopic, subjects, topicsBySubject } from "@/data";
import { chunk } from "@/lib/chunk";
import { toDay } from "@/lib/leitner";
import { dueCount, seenRatio } from "@/lib/progress";
import { useReviewStore } from "@/store/reviewStore";

const screen = { flex: 1, backgroundColor: colors.background };

export default function SubjectScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const cards = useReviewStore((s) => s.cards);
  const subject = subjects.find((s) => s.id === id);
  if (!subject) return <SafeAreaView style={screen} />;

  const today = toDay(new Date());
  const topics = topicsBySubject(subject.id).map((topic, index) => {
    const exercises = exercisesByTopic(topic.id);
    return { topic, number: index + 1, progress: seenRatio(exercises, cards), due: dueCount(exercises, cards, today) };
  });
  const doneCount = topics.filter((t) => t.progress >= 1).length;

  return (
    <SafeAreaView style={screen}>
      <View className="flex-row items-center gap-4 px-6 pb-2 pt-3">
        <BackButton onPress={() => router.back()} />
        <View className="flex-1 flex-row items-center justify-center gap-3 pr-[52px]">
          <SubjectIcon subject={subject.id} size={44} />
          <Text className="font-title text-[32px] text-text">{subject.title}</Text>
        </View>
      </View>

      <ScrollView contentContainerClassName="w-full max-w-[1000px] gap-4 self-center px-6 pb-[140px] pt-4">
        <View className="gap-2 rounded-card bg-surface px-5 py-4">
          <Text className="font-task text-[18px] text-text">
            {doneCount} / {topics.length} témakör kész
          </Text>
          <ProgressBar value={topics.length === 0 ? 0 : doneCount / topics.length} />
        </View>

        {chunk(topics, 2).map((row) => (
          <View key={row.map((t) => t.topic.id).join()} className="flex-row gap-4">
            {row.map(({ topic, number, progress, due }) => (
              <TopicCard
                key={topic.id}
                number={number}
                title={topic.title}
                color={subjectLook[subject.id].color}
                progress={progress}
                due={due}
                onPress={() => router.push({ pathname: "/practice/[topicId]", params: { topicId: topic.id } })}
              />
            ))}
            {row.length === 1 && <View className="flex-1" />}
          </View>
        ))}
      </ScrollView>

      <View pointerEvents="none" className="absolute bottom-4 right-4">
        <Mascot state="base" size={110} />
      </View>
    </SafeAreaView>
  );
}
