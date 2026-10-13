export type CalendarCell = {
  day: number;
  /** "ÉÉÉÉ-HH-NN" */
  date: string;
  /** done: gyakorolt; saved: a mentőöv megmentette; missed: kimaradt nap az első gyakorlás után; open: még nem jött el, vagy az első gyakorlás előtti. */
  state: "done" | "saved" | "missed" | "open";
  today: boolean;
};

export const MONTH_NAMES = [
  "Január", "Február", "Március", "Április", "Május", "Június",
  "Július", "Augusztus", "Szeptember", "Október", "November", "December",
];

/**
 * A `today` hónapjának naptára hétfővel kezdődő hetekben; a hónapon kívüli helyek `null`-ok.
 * A `practiced` a gyakorlással töltött napok ("ÉÉÉÉ-HH-NN").
 */
export function monthGrid(today: string, practiced: string[], saved: string[] = []): (CalendarCell | null)[][] {
  const [y = 0, m = 1] = today.split("-").map(Number);
  const done = new Set(practiced);
  const first = [...practiced].sort()[0];
  const offset = (new Date(Date.UTC(y, m - 1, 1)).getUTCDay() + 6) % 7;
  const daysInMonth = new Date(Date.UTC(y, m, 0)).getUTCDate();

  const cells: (CalendarCell | null)[] = Array.from({ length: offset }, () => null);
  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${y}-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const state = done.has(date) ? "done" : saved.includes(date) ? "saved" : first !== undefined && date >= first && date < today ? "missed" : "open";
    cells.push({ day, date, state, today: date === today });
  }
  while (cells.length % 7 !== 0) cells.push(null);

  return Array.from({ length: cells.length / 7 }, (_, week) => cells.slice(week * 7, week * 7 + 7));
}
