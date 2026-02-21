"use client";

import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";

export default function AddEntryModal({
  open,
  onClose,
  weekId,
  refresh,
  day,
  entry, // 👈 optional (if exists → edit mode)
}: any) {
  const isEdit = !!entry;
  

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      project: "",
      workType: "",
      description: "",
      hours: 1,
    },
  });

  const [saving, setSaving] = useState(false);

  const hours = watch("hours") || 0;

  // 👇 prefill when editing
  useEffect(() => {
    if (entry) {
      reset(entry);
    } else {
      reset({
        project: "",
        workType: "",
        description: "",
        hours: 1,
      });
    }
  }, [entry, reset]);

  const submit = async (formData: any) => {
    try {
      setSaving(true);

      if (isEdit) {
        // UPDATE
        await api.put(`/entries/${entry.id}`, formData);
      } else {
        // CREATE
        await api.post("/entries", {
          ...formData,
          weekId,
          date: day,
        });
      }

      await refresh();
      reset();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setSaving(false);

    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-slate-700/60 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* HEADER */}
        <div className="flex justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">
            {isEdit ? "Edit Entry" : "Add New Entry"}
          </h2>

          <button type="button" onClick={onClose} className="text-gray-500">
            ×
          </button>
        </div>

        {/* BODY */}
        <div className="px-6 py-5 space-y-4">

          {/* PROJECT */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Select Project *
            </label>

            <select
              {...register("project", { required: "Project is required" })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Select project</option>
              <option>Website</option>
              <option>Mobile App</option>
            </select>

            {errors.project && (
              <p className="text-red-500 text-xs mt-1">
                {errors.project.message as string}
              </p>
            )}
          </div>

          {/* WORK TYPE */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Type of Work *
            </label>

            <select
              {...register("workType", { required: "Work type is required" })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Select type</option>
              <option>Bug fixes</option>
              <option>Feature</option>
            </select>

            {errors.workType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.workType.message as string}
              </p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Task description *
            </label>

            <textarea
              rows={4}
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 5,
                  message: "Minimum 5 characters required",
                },
              })}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />

            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message as string}
              </p>
            )}
          </div>

          {/* HOURS */}
          <div>
            <label className="text-sm font-medium block mb-2">
              Hours *
            </label>

            <div className="inline-flex items-center border rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setValue("hours", Math.max(1, hours - 1))}
                className="px-3 py-2 hover:bg-gray-100"
              >
                −
              </button>

              <input
                type="number"
                {...register("hours", {
                  required: "Hours required",
                  min: { value: 1, message: "Minimum 1 hour" },
                  max: { value: 24, message: "Max 24 hours per day" },
                })}
                className="w-16 text-center outline-none text-sm"
              />

              <button
                type="button"
                onClick={() => setValue("hours", hours + 1)}
                className="px-3 py-2 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {errors.hours && (
              <p className="text-red-500 text-xs mt-1">
                {errors.hours.message as string}
              </p>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex gap-3 px-6 py-4 border-t">
          <button
            type="submit"
            disabled={saving}
            className="flex-1 bg-blue-600 text-white rounded-lg py-2.5 text-sm"
          >
            {saving
              ? "Saving..."
              : isEdit
              ? "Update Entry"
              : "Save Entry"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 border rounded-lg py-2.5 text-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}