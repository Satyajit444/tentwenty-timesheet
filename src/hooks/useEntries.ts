import { useEffect, useState, useCallback } from "react";
import { api } from "@/lib/axios";

interface Entry {
  weekId: string;
  [key: string]: any;
}

export function useEntries(weekId: string) {
  const [data, setData] = useState<Entry[]>([]);

  const fetchEntries = useCallback(async () => {
    try {
      const res = await api.get("/entries");
      setData(res.data.filter((e: Entry) => e.weekId === weekId));
    } catch (error) {
      console.error("Failed to fetch entries:", error);
    }
  }, [weekId]);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  return { data, refresh: fetchEntries };
}
