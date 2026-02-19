"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  close: () => void;
  data?: any;
}

export default function TimesheetModal({ close, data }: Props) {
  const { register, handleSubmit } = useForm({
    defaultValues: data || {
      project: "",
      workType: "",
      description: "",
      hours: 1,
    },
  });

  const [hours, setHours] = useState(data?.hours || 1);

  const increase = () => setHours((h) => h + 1);
  const decrease = () => setHours((h) => (h > 1 ? h - 1 : 1));

  async function onSubmit(values: any) {
    const payload = { ...values, hours };

    if (data) {
      await axios.put(`/api/timesheets/${data.id}`, payload);
    } else {
      await axios.post("/api/timesheets", payload);
    }

    close();
  }

  return (
    <div className="fixed inset-0 bg-slate-700/70 flex items-center justify-center z-50">
      
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Add New Entry</h2>
          <button onClick={close} className="text-gray-400 hover:text-gray-600">
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">

          {/* Project */}
          <div>
            <label className="text-sm font-medium">
              Select Project <span className="text-red-500">*</span>
            </label>
            <select
              {...register("project", { required: true })}
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
            >
              <option value="">Project Name</option>
              <option>Website Redesign</option>
              <option>Mobile App</option>
              <option>Internal Tool</option>
            </select>
          </div>

          {/* Type of work */}
          <div>
            <label className="text-sm font-medium">
              Type of Work <span className="text-red-500">*</span>
            </label>
            <select
              {...register("workType", { required: true })}
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
            >
              <option value="">Bug fixes</option>
              <option>Development</option>
              <option>Meeting</option>
              <option>Research</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">
              Task description <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Write text here ..."
              rows={4}
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm resize-none"
            />
            <p className="text-xs text-gray-400 mt-1">
              A note for extra info
            </p>
          </div>

          {/* Hours */}
          <div>
            <label className="text-sm font-medium">
              Hours <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center gap-2 mt-1">
              <button
                type="button"
                onClick={decrease}
                className="w-8 h-8 border rounded-md flex items-center justify-center"
              >
                -
              </button>

              <div className="w-14 text-center border rounded-md py-1 text-sm">
                {hours}
              </div>

              <button
                type="button"
                onClick={increase}
                className="w-8 h-8 border rounded-md flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Add entry
            </button>

            <button
              type="button"
              onClick={close}
              className="flex-1 border py-2 rounded-md text-sm hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
