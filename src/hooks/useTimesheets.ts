import { useEffect, useState, useCallback } from "react";
import { api } from "@/lib/axios";

type Timesheet = {
  id: number;
  week: number;
  dateRange: string;
  status: string;
};

export function useTimesheets() {
  const [data, setData] = useState<Timesheet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTimesheets = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get("/timesheets");
      setData(res.data ?? []);
    } catch (err) {
      console.error(err);
      setError("Failed to load timesheets");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTimesheets();
  }, [fetchTimesheets]);

  return {
    data,
    loading,
    error,
    refetch: fetchTimesheets,
  };
}
