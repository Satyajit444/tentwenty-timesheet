"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Badge from "../ui/Badge";
import Pagination from "../ui/Pagination";
import TableSkeleton from "../ui/TableSkeleton";
import { useTimesheets } from "@/hooks/useTimesheets";
import styles from "./style/Table.module.css";

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
    <div className={styles["timesheets-page"]}>
      <div className={styles["timesheets-card"]}>
        <h1 className="text-lg font-semibold text-gray-800 mb-6">
          Your Timesheets
        </h1>

        {/* FILTERS */}
        <div className={styles["filter-bar"]}>
          <button className={styles["filter-btn"]}>
            Date Range <ChevronDown size={16} />
          </button>

          <button className={styles["filter-btn"]}>
            Status <ChevronDown size={16} />
          </button>
        </div>

        {loading ? (
          <TableSkeleton rows={ITEMS_PER_PAGE} />
        ) : (
          <>
            {/* ================= DESKTOP TABLE ================= */}
            <div className={styles["table-wrapper"]}>
              <table className="w-full text-sm">
                <thead className={styles["table-head"]}>
                  <tr>
                    <th className="px-4 py-3 text-left">Week #</th>
                    <th className="px-4 py-3 text-left">Date</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {paginatedData.map((t: any) => (
                    <tr key={t.id} className={styles["table-row"]}>
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
            <div className={styles["mobile-list"]}>
              {paginatedData.map((t: any) => (
                <div key={t.id} className={styles["mobile-card"]}>
                  <div className={styles["mobile-card-header"]}>
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

        {/* FOOTER */}
        <div className={styles["table-footer"]}>
          <div className={styles["per-page-box"]}>
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
