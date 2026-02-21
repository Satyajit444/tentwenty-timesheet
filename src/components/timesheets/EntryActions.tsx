"use client";
import { useEffect, useRef, useState } from "react";

export default function EntryActions({ entry, onEdit, onDelete }: any) {
  const [open, setOpen] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const close = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)}>⋯</button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow w-24 text-sm">
          <button
            className="block w-full text-left px-3 py-2 hover:bg-gray-100"
            onClick={() => onEdit(entry)}
          >
            Edit
          </button>

          <button
            className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
            onClick={() => {
               onDelete(entry.id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}