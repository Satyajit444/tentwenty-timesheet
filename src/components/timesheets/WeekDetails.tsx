"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useSingleTimesheet } from "@/hooks/useSingleTimesheet";
import { useEntries } from "@/hooks/useEntries";
import { getDays } from "@/lib/date-utils";
import AddEntryModal from "@/components/timesheets/AddEntryModal";
import EntryActions from "@/components/timesheets/EntryActions";
import { api } from "@/lib/axios";

const WEEKLY_LIMIT = 40;

export default function WeekDetails() {
  const { id } = useParams() as { id: string };

  const { data: timesheet, loading, error } = useSingleTimesheet(id);
  const { data: entries, refresh } = useEntries(id);

  const [open, setOpen] = useState(false);
  const [day, setDay] = useState("");
  const [selectedEntry, setSelectedEntry] = useState<any>(null);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!timesheet) return null;

  // generate week days
  const days = getDays(timesheet.dateRange);

  // group entries by day
  const grouped = days.reduce((acc: any, d) => {
    acc[d] = entries.filter((e: any) => e.date === d);
    return acc;
  }, {});

  // total hours
  const totalHours = entries.reduce(
    (sum: number, e: any) => sum + Number(e.hours || 0),
    0,
  );

  // progress %
  const progressPercent = Math.min((totalHours / WEEKLY_LIMIT) * 100, 100);

  const progressColor =
    totalHours >= WEEKLY_LIMIT ? "bg-green-500" : "bg-orange-400";

  const deleteEntry = async (entryId: string) => {
    await api.delete(`/entries/${entryId}`);
    await refresh();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* MAIN CARD */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              This week's timesheet
            </h2>
            <p className="text-sm text-gray-500 mt-1">{timesheet.dateRange}</p>
          </div>

          {/* HOURS + PROGRESS */}
          <div className="sm:text-right w-full sm:w-auto">
            <p className="text-sm text-gray-600 mb-1">
              {totalHours}/{WEEKLY_LIMIT} hrs
            </p>

            <div className="w-full sm:w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${progressColor} transition-all`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* DAYS LIST */}
        <div className="space-y-6">
          {days.map((d) => (
            <div key={d} className="flex flex-col sm:flex-row sm:gap-6 gap-2">
              {/* DATE COLUMN */}
              <div className="sm:w-20 text-sm font-medium text-gray-700 sm:pt-2">
                {d}
              </div>

              {/* DAY CONTENT */}
              <div className="flex-1 space-y-2">
                {/* ENTRIES */}
                {grouped[d].map((e: any) => (
                  <div
                    key={e.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border rounded-lg px-4 py-3 bg-gray-50 border-gray-300"
                  >
                    <div className="font-medium text-sm">{e.project}</div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span>{e.hours} hrs</span>

                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">
                        {e.workType}
                      </span>

                      <EntryActions
                        entry={e}
                        onEdit={() => {
                          setSelectedEntry(e);
                          setDay(d);
                          setOpen(true);
                        }}
                        onDelete={deleteEntry}
                      />
                    </div>
                  </div>
                ))}

                {/* ADD TASK BUTTON */}
                <button
                  onClick={() => {
                    setSelectedEntry(null);
                    setDay(d);
                    setOpen(true);
                  }}
                  className="w-full border border-dashed border-blue-300 text-blue-600 rounded-lg py-3 text-sm font-medium hover:bg-blue-50 transition"
                >
                  + Add new task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AddEntryModal
        entry={selectedEntry}
        open={open}
        onClose={() => setOpen(false)}
        weekId={id}
        day={day}
        refresh={refresh}
      />
    </div>
  );
}
