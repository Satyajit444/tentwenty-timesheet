"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Badge from "../ui/Badge";
import Pagination from "../ui/Pagination";
import TableSkeleton from "../ui/TableSkeleton";
import { useTimesheets } from "@/hooks/useTimesheets";

const ITEMS_PER_PAGE = 5;

export default function TimesheetTable() {
  const { data, loading } = useTimesheets();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginatedData = data.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <div className="p-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-lg font-semibold text-gray-800 mb-6">
          Your Timesheets
        </h1>

        <div className="flex items-center gap-3 mb-5">
          <button className="flex items-center gap-2 text-sm px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            Date Range <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-2 text-sm px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            Status <ChevronDown size={16} />
          </button>
        </div>

{loading ? (
  <TableSkeleton rows={ITEMS_PER_PAGE} />
) : (
  <>
    {/* ================= DESKTOP TABLE ================= */}
    <div className="hidden md:block overflow-hidden border border-gray-200 rounded-lg">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500 uppercase text-xs border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 text-left">Week #</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {paginatedData.map((t: any) => (
            <tr key={t.id} className="hover:bg-gray-50">
              <td className="pl-4 py-3 bg-gray-50">{t.week}</td>
              <td className="px-4 py-3">{t.dateRange}</td>
              <td className="px-4 py-3 uppercase">
                <Badge status={t.status} />
              </td>
              <td className="px-4 py-3 text-right">
                <Link
                  href={`/timesheet/${t.id}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {t.status === "MISSING"
                    ? "Create"
                    : t.status === "INCOMPLETE"
                    ? "Update"
                    : "View"}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* ================= MOBILE CARDS ================= */}
    <div className="md:hidden space-y-3">
      {paginatedData.map((t: any) => (
        <div
          key={t.id}
          className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-xs text-gray-500">Week</p>
              <p className="font-semibold text-gray-800">{t.week}</p>
            </div>

            <Badge status={t.status} />
          </div>

          <div className="mb-3">
            <p className="text-xs text-gray-500">Date Range</p>
            <p className="text-sm text-gray-700">{t.dateRange}</p>
          </div>

          <Link
            href={`/timesheet/${t.id}`}
            className="text-blue-600 text-sm font-medium"
          >
            {t.status === "MISSING"
              ? "Create"
              : t.status === "INCOMPLETE"
              ? "Update"
              : "View"}
          </Link>
        </div>
      ))}
    </div>
  </>
)}

        <div className="flex flex-wrap items-center justify-between mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md">
            {ITEMS_PER_PAGE} per page
          </div>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}
