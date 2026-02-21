"use client";

import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";

export default function AddEntryModal({ open, onClose, weekId, refresh }: any) {
  const { register, handleSubmit, reset } = useForm();

  const submit = async (data: any) => {
    await api.post("/entries", { ...data, weekId });
    refresh();
    reset();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <form onSubmit={handleSubmit(submit)} className="bg-white p-6 rounded w-96 space-y-3">
        <h2 className="font-semibold">Add Entry</h2>

        <input {...register("project")} placeholder="Project" className="border p-2 w-full"/>
        <input {...register("workType")} placeholder="Work Type" className="border p-2 w-full"/>
        <textarea {...register("description")} placeholder="Description" className="border p-2 w-full"/>
        <input type="number" {...register("hours")} className="border p-2 w-full"/>

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Add
        </button>
      </form>
    </div>
  );
}