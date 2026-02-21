// lib/date-utils.ts
export function getDaysFromDateRange(dateRange: string) {
  if (!dateRange) return [];

  const parts = dateRange.split(" ");
  const startDay = parts[0];
  const endDay = parts[2];
  const month = parts[3].replace(",", "");
  const year = parts[4];

  const start = new Date(`${month} ${startDay}, ${year}`);
  const end = new Date(`${month} ${endDay}, ${year}`);

  const days = [];
  const current = new Date(start);

  while (current <= end) {
    days.push(
      current.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    );
    current.setDate(current.getDate() + 1);
  }

  return days;
}