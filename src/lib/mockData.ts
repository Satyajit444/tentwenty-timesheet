import { Timesheet, Entry } from "@/types";

export const timesheets: Timesheet[] = [
  { id: "1", week: 1, dateRange: "1 - 5 Jan 2024", status: "COMPLETED" },
  { id: "2", week: 2, dateRange: "8 - 12 Jan 2024", status: "COMPLETED" },
  { id: "3", week: 3, dateRange: "15 - 19 Jan 2024", status: "INCOMPLETE" },
  { id: "4", week: 4, dateRange: "22 - 26 Jan 2024", status: "COMPLETED" },
  { id: "5", week: 5, dateRange: "28 Jan - 1 Feb", status: "MISSING" },
];

export const entries: Entry[] = [];