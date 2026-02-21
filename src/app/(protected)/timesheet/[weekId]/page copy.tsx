"use client";

import { useParams } from "next/navigation";
import { useEntries } from "@/hooks/useEntries";
import { useState } from "react";
import AddEntryModal from "@/components/timesheets/AddEntryModal";

const DAYS = ["Jan 21", "Jan 22", "Jan 23", "Jan 24", "Jan 25"];

export default function WeekView() {
  const { weekId }: any = useParams();
  const { data, refresh } = useEntries(weekId);

  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const total = data.reduce((a: number, b: any) => a + Number(b.hours), 0);
  const progress = Math.min((total / 40) * 100, 100);

  // group entries by date
  const grouped = DAYS.reduce((acc: any, day) => {
    acc[day] = data.filter((e: any) => e.date === day);
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-semibold">This week's timesheet</h1>
          <p className="text-sm text-gray-500">21 - 26 January, 2024</p>
        </div>

        <div className="text-right w-48">
          <div className="text-sm mb-1">{total}/40 hrs</div>
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-2 bg-orange-500 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* DAYS */}
      <div className="space-y-6">
        {DAYS.map(day => (
          <div key={day}>

            {/* DAY LABEL */}
            <div className="font-medium text-sm text-gray-700 mb-2">
              {day}
            </div>

            {/* ENTRIES */}
            <div className="space-y-2">
              {grouped[day].map((e: any) => (
                <div
                  key={e.id}
                  className="flex items-center justify-between border rounded-lg px-4 py-2 bg-white"
                >
                  <div className="text-sm">{e.project}</div>

                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{e.hours} hrs</span>
                    <button className="text-blue-600 text-xs">
                      Project Name
                    </button>
                  </div>
                </div>
              ))}

              {/* ADD NEW TASK ROW */}
              <button
                onClick={() => {
                  setSelectedDay(day);
                  setOpen(true);
                }}
                className="w-full border border-dashed border-gray-300 rounded-lg py-2 text-sm text-blue-600 hover:bg-blue-50"
              >
                + Add new task
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* MODAL */}
      <AddEntryModal
        open={open}
        onClose={() => setOpen(false)}
        weekId={weekId}
        refresh={refresh}
        defaultDate={selectedDay}   // optional if modal supports it
      />
    </div>
  );
}