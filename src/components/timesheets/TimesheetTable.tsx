"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import TimesheetModal from "./TimesheetModal";

function StatusBadge({ status }: { status: string }) {
  const base = "px-2 py-1 rounded-full text-xs font-medium";

  if (status === "completed")
    return <span className={`${base} bg-green-100 text-green-700`}>COMPLETED</span>;

  if (status === "incomplete")
    return <span className={`${base} bg-yellow-100 text-yellow-700`}>INCOMPLETE</span>;

  if (status === "missing")
    return <span className={`${base} bg-pink-100 text-pink-700`}>MISSING</span>;

  return <span className={base}>{status}</span>;
}

export default function TimesheetTable() {
  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState<any>(null);

  async function load() {
    const res = await axios.get("/api/timesheets");
    setData(res.data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {/* CARD */}
      <div className="bg-white rounded-xl shadow-sm border p-6">

        {/* HEADER */}
        <h2 className="text-xl font-semibold mb-4">Your Timesheets</h2>

        {/* FILTERS */}
        <div className="flex gap-3 mb-6">
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Date Range</option>
          </select>

          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Status</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-600">
              <tr className="text-left">
                <th className="px-4 py-3">WEEK</th>
                <th className="px-4 py-3">DATE</th>
                <th className="px-4 py-3">STATUS</th>
                <th className="px-4 py-3 text-right">ACTIONS</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {data.map((t: any) => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{t.week}</td>
                  <td className="px-4 py-3">{t.date}</td>

                  <td className="px-4 py-3">
                    <StatusBadge status={t.status} />
                  </td>

                  <td className="px-4 py-3 text-right">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => {
                        setEdit(t);
                        setOpen(true);
                      }}
                    >
                      {t.status === "missing"
                        ? "Create"
                        : t.status === "incomplete"
                        ? "Update"
                        : "View"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between mt-6">
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>5 per page</option>
          </select>

          <div className="flex items-center gap-2 text-sm">
            <button className="px-3 py-1 border rounded-md">Previous</button>
            <button className="px-3 py-1 border rounded-md bg-gray-100">1</button>
            <button className="px-3 py-1 border rounded-md">2</button>
            <button className="px-3 py-1 border rounded-md">3</button>
            <button className="px-3 py-1 border rounded-md">Next</button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <TimesheetModal
          close={() => {
            setOpen(false);
            setEdit(null);
            load();
          }}
          data={edit}
        />
      )}
    </div>
  );
}
