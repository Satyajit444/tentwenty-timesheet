import { Timesheet, Entry } from "@/types";

export const timesheets: Timesheet[] = [
  { id: "1", week: 1, dateRange: "1 - 5 Jan 2024", status: "COMPLETED" },
  { id: "2", week: 2, dateRange: "8 - 12 Jan 2024", status: "COMPLETED" },
  { id: "3", week: 3, dateRange: "15 - 19 Jan 2024", status: "INCOMPLETE" },
  { id: "4", week: 4, dateRange: "22 - 26 Jan 2024", status: "COMPLETED" },
  { id: "5", week: 5, dateRange: "28 Jan - 1 Feb", status: "MISSING" },
  { id: "6", week: 6, dateRange: "5 - 9 Feb 2024", status: "COMPLETED" },
  { id: "7", week: 7, dateRange: "12 - 16 Feb 2024", status: "COMPLETED" },
  { id: "8", week: 8, dateRange: "19 - 23 Feb 2024", status: "INCOMPLETE" },
  { id: "9", week: 9, dateRange: "26 Feb - 1 Mar 2024", status: "COMPLETED" },
  { id: "10", week: 10, dateRange: "4 - 8 Mar 2024", status: "MISSING" },

  { id: "11", week: 11, dateRange: "11 - 15 Mar 2024", status: "COMPLETED" },
  { id: "12", week: 12, dateRange: "18 - 22 Mar 2024", status: "COMPLETED" },
  { id: "13", week: 13, dateRange: "25 - 29 Mar 2024", status: "INCOMPLETE" },
  { id: "14", week: 14, dateRange: "1 - 5 Apr 2024", status: "COMPLETED" },
  { id: "15", week: 15, dateRange: "8 - 12 Apr 2024", status: "COMPLETED" },

  { id: "16", week: 16, dateRange: "15 - 19 Apr 2024", status: "MISSING" },
  { id: "17", week: 17, dateRange: "22 - 26 Apr 2024", status: "COMPLETED" },
  {
    id: "18",
    week: 18,
    dateRange: "29 Apr - 3 May 2024",
    status: "INCOMPLETE",
  },
  { id: "19", week: 19, dateRange: "6 - 10 May 2024", status: "COMPLETED" },
  { id: "20", week: 20, dateRange: "13 - 17 May 2024", status: "COMPLETED" },

  { id: "21", week: 21, dateRange: "20 - 24 May 2024", status: "MISSING" },
  { id: "22", week: 22, dateRange: "27 - 31 May 2024", status: "COMPLETED" },
  { id: "23", week: 23, dateRange: "3 - 7 Jun 2024", status: "COMPLETED" },
  { id: "24", week: 24, dateRange: "10 - 14 Jun 2024", status: "INCOMPLETE" },
  { id: "25", week: 25, dateRange: "17 - 21 Jun 2024", status: "COMPLETED" },
];

export const entries: Entry[] = [];
