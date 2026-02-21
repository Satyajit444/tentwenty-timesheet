export type Status = "COMPLETED" | "INCOMPLETE" | "MISSING";

export interface Timesheet {
  id: string;
  week: number;
  dateRange: string;
  status: Status;
}

export interface Entry {
  id: string;
  weekId: string;
  date: string;
  project: string;
  workType: string;
  description: string;
  hours: number;
}

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};