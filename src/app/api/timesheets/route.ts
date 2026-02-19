import { NextResponse } from "next/server";
import { getTimesheets, addTimesheet } from "@/lib/db";
import { v4 as uuid } from "uuid";

export async function GET() {
  return NextResponse.json(getTimesheets());
}

export async function POST(req: Request) {
  const body = await req.json();
  addTimesheet({ id: uuid(), ...body });
  return NextResponse.json({ success: true });
}
