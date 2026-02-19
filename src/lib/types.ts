export type TimesheetStatus = "missing" | "completed" | "incomplete";

export interface Timesheet {
  id: string;
  week: number;
  date: string;
  status: TimesheetStatus;
}
