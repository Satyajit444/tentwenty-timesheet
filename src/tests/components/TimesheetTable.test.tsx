import TimesheetTable from "@/components/timesheets/TimesheetTable";
import { render, screen } from "@testing-library/react";

test("renders table heading", () => {
  render(<TimesheetTable />);
  expect(screen.getByText("Add Timesheet")).toBeInTheDocument();
});
