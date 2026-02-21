import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

export function useTimesheets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/timesheets").then(r => setData(r.data));
  }, []);

  return data;
}