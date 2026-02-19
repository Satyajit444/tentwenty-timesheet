import { Timesheet } from "./types";

let timesheets: Timesheet[] = [
  { id: "1", week: 1, date: "2025-01-01", status: "missing" },
  { id: "2", week: 2, date: "2025-01-08", status: "completed" },
  { id: "3", week: 3, date: "2025-01-15", status: "incomplete" },
  { id: "4", week: 4, date: "2025-01-22", status: "missing" },
  { id: "5", week: 5, date: "2025-01-29", status: "completed" },
  { id: "6", week: 6, date: "2025-02-05", status: "missing" },
  { id: "7", week: 7, date: "2025-02-12", status: "completed" },
  { id: "8", week: 8, date: "2025-02-19", status: "incomplete" },
  { id: "9", week: 9, date: "2025-02-26", status: "missing" },
  { id: "10", week: 10, date: "2025-03-05", status: "completed" },
];

export const getTimesheets = () => timesheets;

export const addTimesheet = (data: Timesheet) => {
  timesheets.push(data);
};

export const updateTimesheet = (id: string, data: Partial<Timesheet>) => {
  timesheets = timesheets.map((t) => (t.id === id ? { ...t, ...data } : t));
};

export const deleteTimesheet = (id: string) => {
  timesheets = timesheets.filter((t) => t.id !== id);
};
