"use client";

import { useParams } from "next/navigation";
import { useEntries } from "@/hooks/useEntries";
import { useState } from "react";
import AddEntryModal from "@/components/timesheets/AddEntryModal";

export default function WeekView() {
  const { weekId }: any = useParams();
  const { data, refresh } = useEntries(weekId);
  const [open, setOpen] = useState(false);

  const total = data.reduce((a: number, b: any) => a + Number(b.hours), 0);

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold mb-3">This week's timesheet</h1>

      <div className="mb-4">Total Hours: {total} / 40</div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setOpen(true)}
      >
        Add Entry
      </button>

      <div className="mt-4 space-y-2">
        {data.map((e: any) => (
          <div key={e.id} className="border p-3 rounded">
            {e.project} — {e.hours} hrs
          </div>
        ))}
      </div>

      <AddEntryModal
        open={open}
        onClose={() => setOpen(false)}
        weekId={weekId}
        refresh={refresh}
      />
    </div>
  );
}
