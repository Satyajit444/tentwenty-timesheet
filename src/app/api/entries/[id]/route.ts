import { NextResponse } from "next/server";
import { entries } from "@/lib/mockData";

/* ---------------- UPDATE ENTRY ---------------- */

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await req.json();

  const index = entries.findIndex(e => e.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Entry not found" },
      { status: 404 }
    );
  }

  entries[index] = { ...entries[index], ...body };

  return NextResponse.json(entries[index]);
}


/* ---------------- DELETE ENTRY ---------------- */

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const index = entries.findIndex(e => e.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Entry not found" },
      { status: 404 }
    );
  }

  entries.splice(index, 1);

  return NextResponse.json({ success: true });
}