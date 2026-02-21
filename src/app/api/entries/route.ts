import { entries } from "@/lib/mockData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(entries);
}

export async function POST(req: Request) {
  const body = await req.json();
  entries.push({ id: crypto.randomUUID(), ...body });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const index = entries.findIndex(e => e.id === id);
  if (index !== -1) entries.splice(index, 1);
  return NextResponse.json({ success: true });
}