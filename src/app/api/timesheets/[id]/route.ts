import { NextResponse } from "next/server";
import { updateTimesheet, deleteTimesheet } from "@/lib/db";

export async function PUT(req: Request, { params }: any) {
  const body = await req.json();
  updateTimesheet(params.id, body);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request, { params }: any) {
  deleteTimesheet(params.id);
  return NextResponse.json({ success: true });
}
