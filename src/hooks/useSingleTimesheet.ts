// hooks/useTimesheet.ts
import { useEffect, useState } from "react";

export function useSingleTimesheet(id: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/timesheets/${id}`)
      .then(r => r.json())
      .then(setData);
  }, [id]);

  return data;
}