"use client";

import Link from "next/link";
import Badge from "../ui/Badge";
import { useTimesheets } from "@/hooks/useTimesheets";

export default function TimesheetTable() {
  const data = useTimesheets();

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold mb-4">Your Timesheets</h1>

      <table className="w-full border rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Week</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((t: any) => (
            <tr key={t.id} className="border-t">
              <td className="p-3">{t.week}</td>
              <td className="p-3">{t.dateRange}</td>
              <td className="p-3"><Badge status={t.status} /></td>
              <td className="p-3">
                <Link href={`/timesheet/${t.id}`} className="text-blue-600">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}