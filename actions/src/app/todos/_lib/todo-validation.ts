import { z } from "zod";

export const todoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string().min(10).max(100),
  completed: z.boolean(),
});

export type TodoSchema = z.infer<typeof todoSchema>;
