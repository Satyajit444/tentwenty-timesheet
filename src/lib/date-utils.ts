export function getDays(range: string) {
  if (!range) return [];

  const parts = range.split(" ");
  const start = parts[0];
  const end = parts[2];
  const month = parts[3].replace(",", "");
  const year = parts[4];

  const startDate = new Date(`${month} ${start}, ${year}`);
  const endDate = new Date(`${month} ${end}, ${year}`);

  const days = [];
  const d = new Date(startDate);

  while (d <= endDate) {
    days.push(
      d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    );
    d.setDate(d.getDate() + 1);
  }

  return days;
}