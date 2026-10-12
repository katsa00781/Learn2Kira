import { Text, View } from "react-native";
import { colors } from "@/constants/colors";
import { softShadow } from "@/constants/shadows";
import { type CalendarCell, MONTH_NAMES, monthGrid } from "@/lib/calendar";
import { CheckIcon, FlameIcon } from "./Icons";

const WEEKDAYS = ["H", "K", "Sz", "Cs", "P", "Sz", "V"];

function Day({ cell }: { cell: CalendarCell }) {
  const style =
    cell.state === "done" ? "bg-success" : cell.state === "missed" ? "bg-text/10" : "border-2 border-text/10 bg-surface";
  return (
    <View
      className={`aspect-square flex-1 items-center justify-center rounded-xl ${style} ${cell.today ? "border-[3px] border-primary" : ""}`}
    >
      {cell.state === "done" ? (
        <CheckIcon size={22} color={colors.surface} />
      ) : (
        <Text className="font-title text-[16px] text-textMuted">{cell.day}</Text>
      )}
    </View>
  );
}

type Props = { streak: number; today: string; practiceDays: string[] };

/** A sorozat száma és az aktuális hónap naptára a gyakorolt napokkal. */
export function StreakCalendar({ streak, today, practiceDays }: Props) {
  const month = MONTH_NAMES[Number(today.split("-")[1]) - 1];
  return (
    <View className="gap-4 rounded-card bg-surface p-6" style={softShadow}>
      <View className="flex-row items-center gap-3">
        <FlameIcon size={44} color={colors.error} outline />
        <Text className="font-title text-[56px] leading-[68px] text-text">{streak}</Text>
        <Text className="font-task text-[20px] text-textMuted">napos sorozat</Text>
      </View>
      <Text className="font-title text-[20px] text-text">{month}</Text>
      <View className="gap-2">
        <View className="flex-row gap-2">
          {WEEKDAYS.map((name, i) => (
            <Text key={i} className="flex-1 text-center font-title text-[15px] text-textMuted">
              {name}
            </Text>
          ))}
        </View>
        {monthGrid(today, practiceDays).map((week, w) => (
          <View key={w} className="flex-row gap-2">
            {week.map((cell, d) => (cell ? <Day key={cell.date} cell={cell} /> : <View key={`e${d}`} className="flex-1" />))}
          </View>
        ))}
      </View>
    </View>
  );
}
