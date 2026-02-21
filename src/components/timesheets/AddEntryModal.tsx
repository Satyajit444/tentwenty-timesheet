"use client";

import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";
import { useState } from "react";

export default function AddEntryModal({ open, onClose, weekId, refresh, day }: any) {
  const { register, handleSubmit, reset } = useForm();
console.log('date', day);

  const [saving, setSaving] = useState(false);

  const submit = async (formData: any) => {
    if (!weekId) return;

    try {
      console.log("formData", formData);
      console.log("day", day);
      // return

  setSaving(true);

  const response = await api.post("/entries", {
    ...formData,
    weekId,
    date:day
  });

  console.log("API response:", response);

  await refresh();
      reset(); // clear form
      onClose(); // close modal only after success

      console.log('data', );
      
    } catch (error) {
      console.error("Failed to create entry:", error);
      alert("Something went wrong while saving entry.");
    } finally {
      setSaving(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-slate-700/60 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full max-w-140 bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-b-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Add New Entry</h2>

          <button
            type="button"
            className="text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* BODY */}
        <div className="px-6 py-5 space-y-4">
          {/* PROJECT */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Select Project *
            </label>

            <select
              {...register("project")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
            >
              <option value="">Project Name</option>
              <option>Website</option>
              <option>Mobile App</option>
            </select>
          </div>

          {/* WORK TYPE */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Type of Work *
            </label>

            <select
              {...register("workType")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
            >
              <option value="">Bug fixes</option>
              <option>Feature</option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Task description *
            </label>

            <textarea
              {...register("description")}
              rows={5}
              placeholder="Write text here ..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none"
            />

            <p className="text-xs text-gray-400 mt-1">A note for extra info</p>
          </div>

          {/* HOURS */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Hours *
            </label>

            <div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button type="button" className="px-3 py-2 hover:bg-gray-100">
                −
              </button>

              <input
                type="number"
                {...register("hours")}
                className="w-16 text-center outline-none text-sm"
              />

              <button type="button" className="px-3 py-2 hover:bg-gray-100">
                +
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex gap-3 px-6 py-4 border-t border-gray-200">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 text-sm font-medium"
          >
            {saving ? "Saving..." : "Save"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 border border-gray-300 rounded-lg py-2.5 text-sm hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
