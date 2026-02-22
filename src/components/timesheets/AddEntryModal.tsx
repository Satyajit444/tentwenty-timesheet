"use client";

import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import styles from "./style/AddEntry.module.css";
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
        await api.put(`/entries/${entry.id}`, formData);
      } else {
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
    <div className={styles["modal-overlay"]}>
      <form onSubmit={handleSubmit(submit)} className={styles["modal-form"]}>
        <div className={styles["modal-header"]}>
          <h2 className="text-lg font-semibold">
            {isEdit ? "Edit Entry" : "Add New Entry"}
          </h2>

          <button type="button" onClick={onClose} className="text-gray-500">
            ×
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          <div>
            <label className={styles["form-label"]}>Select Project *</label>

            <select
              {...register("project", { required: "Project is required" })}
              className={styles["form-control"]}
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

          <div>
            <label className={styles["form-label"]}>Type of Work *</label>

            <select
              {...register("workType", { required: "Work type is required" })}
              className={styles["form-control"]}
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

          <div>
            <label className={styles["form-label"]}>Task description *</label>

            <textarea
              rows={4}
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 5,
                  message: "Minimum 5 characters required",
                },
              })}
              className={styles["form-control"]}
            />

            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">Hours *</label>

            <div className={styles["hours-wrapper"]}>
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
                className={styles["hours-input"]}
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

        <div className={styles["modal-footer"]}>
          <button
            type="submit"
            disabled={saving}
            className={styles["primary-btn"]}
          >
            {saving ? "Saving..." : isEdit ? "Update Entry" : "Save Entry"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className={styles["secondary-btn"]}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
