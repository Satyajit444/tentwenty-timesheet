"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useSingleTimesheet } from "@/hooks/useSingleTimesheet";
import { useEntries } from "@/hooks/useEntries";
import { getDays } from "@/lib/date-utils";
import AddEntryModal from "@/components/timesheets/AddEntryModal";

export default function WeekDetails() {
  const { id } = useParams() as { id: string };
  console.log("id", id);  
  const { data: timesheet, loading, error } = useSingleTimesheet(id);
  const { data, refresh } = useEntries(id);

  const [open, setOpen] = useState(false);
  const [day, setDay] = useState("");

  if (!timesheet) return null;

  const days = getDays(timesheet.dateRange);

  const grouped = days.reduce((acc: any, d) => {
    acc[d] = data.filter((e) => e.date === d);
    return acc;
  }, {});

  return (
    <div style={{ padding: 20 }}>
      <h2>{timesheet.dateRange}</h2>

      {days.map((d) => (
        <div key={d} style={{ marginTop: 20 }}>
          <b>{d}</b>

          {grouped[d].map((e: any) => (
            <div key={e.id}>
              {e.project} — {e.hours} hrs
            </div>
          ))}

          <button
            onClick={() => {
              setDay(d);
              setOpen(true);
            }}
          >
            + Add new task
          </button>
        </div>
      ))}

      <AddEntryModal
        open={open}
        onClose={() => setOpen(false)}
        weekId={id}
        day={day}
        refresh={refresh}
      />
    </div>
  );
}
