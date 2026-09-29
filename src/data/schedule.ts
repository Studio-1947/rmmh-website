import { weekDays, type Availability } from "./doctors";

type Day = (typeof weekDays)[number];

export interface Slot {
  /** Minutes after midnight; undefined when the time string couldn't be parsed. */
  start?: number;
  end?: number;
  /** "9:00 AM – 1:00 PM" as written in the data. */
  label: string;
  part?: "morning" | "afternoon" | "evening";
}

const RANGE = /(\d{1,2}):(\d{2})\s*(AM|PM)\s*[–-]\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i;

function minutes(h: string, m: string, ampm: string): number {
  return ((Number(h) % 12) + (ampm.toUpperCase() === "PM" ? 12 : 0)) * 60 + Number(m);
}

/** "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" -> two slots. */
export function parseSlots(time: string): Slot[] {
  return time.split("&").map((part) => {
    const label = part.trim();
    const m = RANGE.exec(label);
    if (!m) return { label };
    const start = minutes(m[1], m[2], m[3]);
    const end = minutes(m[4], m[5], m[6]);
    return {
      start,
      end,
      label,
      part: start < 720 ? "morning" : start < 960 ? "afternoon" : "evening",
    };
  });
}

/** 240 -> "4", 210 -> "3.5" */
export function hours(slot: Slot): string | undefined {
  if (slot.start === undefined || slot.end === undefined) return undefined;
  return String(Math.round(((slot.end - slot.start) / 60) * 10) / 10);
}

/** "9:00 AM – 1:00 PM & 4:00 PM – 7:00 PM" -> "9–1 & 4–7" */
function compact(time: string): string {
  return time
    .replace(/:00/g, "")
    .replace(/\s*(AM|PM)/gi, "")
    .replace(/\s*–\s*/g, "–");
}

/**
 * One-line week summary: consecutive days with the same hours are grouped,
 * e.g. "Mon – Fri 9–1 & 4–7 · Sat 9–2 · Sun off".
 */
export function weekSummary(
  availability: Availability[],
  dayName: (d: Day) => string,
  off: string,
  otherDaysOff: string,
): string {
  const byDay = new Map(availability.map((a) => [a.day, a.time]));
  const groups: { from: Day; to: Day; time: string }[] = [];
  for (const day of weekDays) {
    const time = byDay.get(day);
    if (!time) continue;
    const last = groups[groups.length - 1];
    const prev = weekDays[weekDays.indexOf(day) - 1];
    if (last && last.to === prev && last.time === time) last.to = day;
    else groups.push({ from: day, to: day, time });
  }
  const parts = groups.map(
    (g) =>
      `${g.from === g.to ? dayName(g.from) : `${dayName(g.from)} – ${dayName(g.to)}`} ${compact(g.time)}`,
  );
  const offDays = weekDays.filter((d) => !byDay.has(d));
  if (offDays.length > 0 && offDays.length <= 2)
    parts.push(`${offDays.map(dayName).join(", ")} ${off.toLowerCase()}`);
  else if (offDays.length > 2) parts.push(otherDaysOff);
  return parts.join(" · ");
}
