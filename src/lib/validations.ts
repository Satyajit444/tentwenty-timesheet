import { z } from "zod";

export const timesheetSchema = z.object({
  week: z.number().min(1),
  date: z.string(),
  status: z.enum(["Pending", "Approved", "Rejected"]),
});
