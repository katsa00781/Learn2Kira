import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mascot } from "@/components/mascot/Mascot";
import { BackButton } from "@/components/ui/BackButton";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SubjectIcon } from "@/components/ui/SubjectIcon";
import { TopicCard } from "@/components/ui/TopicCard";
import { colors, darkTones } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import { exercisesByTopic, subjects, topicsBySubject } from "@/data";
import { chunk } from "@/lib/chunk";
import { toDay } from "@/lib/leitner";
import { dueCount, seenRatio } from "@/lib/progress";
import { useReviewStore } from "@/store/reviewStore";

const screen = { flex: 1, backgroundColor: colors.background };

export default function SubjectScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const wide = width >= 700;
  const cards = useReviewStore((s) => s.cards);
  const subject = subjects.find((s) => s.id === id);
  if (!subject) return <SafeAreaView style={screen} />;

  const today = toDay(new Date());
  const topics = topicsBySubject(subject.id).map((topic, index) => {
    const exercises = exercisesByTopic(topic.id);
    return { topic, number: index + 1, progress: seenRatio(exercises, cards), due: dueCount(exercises, cards, today) };
  });
  const doneCount = topics.filter((t) => t.progress >= 1).length;

  const percent = topics.length === 0 ? 0 : doneCount / topics.length;

  return (
    <SafeAreaView style={screen}>
      <View className="flex-row items-center gap-4 px-6 pb-2 pt-3">
        <BackButton onPress={() => router.back()} />
        <View className={`flex-1 flex-row items-center gap-3 ${wide ? "justify-center pr-[52px]" : ""}`}>
          <SubjectIcon subject={subject.id} size={wide ? 56 : 44} />
          <Text className={`font-title text-text ${wide ? "text-[44px]" : "text-[32px]"}`}>{subject.title}</Text>
        </View>
        {!wide && <Mascot state="thinking" size={76} />}
      </View>

      <ScrollView contentContainerClassName="w-full max-w-[1000px] gap-4 self-center px-6 pb-[200px] pt-4">
        <View className={`rounded-card bg-surface px-6 py-5 ${wide ? "flex-row items-center gap-5" : "gap-3"}`} style={softShadow}>
          <View className={wide ? "" : "flex-row items-center justify-between"}>
            <Text className="font-title text-[18px] text-text">
              {doneCount} / {topics.length} témakör kész
            </Text>
            {!wide && <Text className="font-title text-[18px]" style={{ color: darkTones.primary }}>{Math.round(percent * 100)}%</Text>}
          </View>
          <ProgressBar className={wide ? "flex-1" : ""} value={percent} />
          {wide && <Text className="font-title text-[18px]" style={{ color: darkTones.primary }}>{Math.round(percent * 100)}%</Text>}
        </View>

        {chunk(topics, 2).map((row) => (
          <View key={row.map((t) => t.topic.id).join()} className="flex-row gap-4">
            {row.map(({ topic, number, progress, due }) => (
              <TopicCard
                key={topic.id}
                number={number}
                title={topic.title}
                progress={progress}
                due={due}
                onPress={() => router.push({ pathname: "/practice/[topicId]", params: { topicId: topic.id } })}
              />
            ))}
            {row.length === 1 && <View className="flex-1" />}
          </View>
        ))}
      </ScrollView>

      {wide && (
        <View pointerEvents="none" className="absolute bottom-4 right-6">
          <Mascot state="thinking" size={160} />
        </View>
      )}
    </SafeAreaView>
  );
}
