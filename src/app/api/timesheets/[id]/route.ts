import { NextResponse } from "next/server";
import { timesheets } from "@/lib/mockData";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const timesheet = timesheets.find(t => t.id === id);

  if (!timesheet) {
    return NextResponse.json(
      { error: "Timesheet not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(timesheet);
}