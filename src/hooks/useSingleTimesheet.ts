// hooks/useSingleTimesheet.ts
import { useEffect, useState, useCallback } from "react";

type Timesheet = {
  id: string;
  week: number;
  dateRange: string;
  status: string;
};

export function useSingleTimesheet(id: string) {
  const [data, setData] = useState<Timesheet | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTimesheet = useCallback(async (signal?: AbortSignal) => {
    if (!id) return;

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`/api/timesheets/${id}`, { signal });
console.log("Fetch response:", res);
      if (!res.ok) {
        throw new Error("Failed to fetch timesheet");
      }

      const json = await res.json();
      setData(json);

    } catch (err: any) {
      if (err.name !== "AbortError") {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    const controller = new AbortController();
    fetchTimesheet(controller.signal);
    return () => controller.abort();
  }, [fetchTimesheet]);

  return {
    data,
    loading,
    error,
    refresh: fetchTimesheet,
  };
}