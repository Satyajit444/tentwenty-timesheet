import { NextResponse } from "next/server";
import { entries } from "@/lib/mockData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  
  const weekId = searchParams.get("weekId");
  
  if (!weekId) {
    return NextResponse.json(entries);
  }
  
  const filtered = entries.filter(e => e.weekId === weekId);
  return NextResponse.json(filtered);
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log('searchParams body', body);
  
  const newEntry = {
    id: crypto.randomUUID(),
    ...body,
  };

  entries.push(newEntry);


  console.log('searchParams newEntry', entries);


  return NextResponse.json(newEntry);
}