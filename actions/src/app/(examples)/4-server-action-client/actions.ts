"use server";

import { TodoSchema } from "@/app/todos/_lib/todo-validation";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

export async function createTodo(title: string) {
  const todos = await kv.get<TodoSchema[]>("todos");

  const newTodo: TodoSchema = {
    id: todos ? todos.length + 1 : 1,
    title,
    completed: false,
    userId: 1,
  };

  await kv.set("todos", [newTodo, ...(todos || [])]);

  console.info("Created todos");

  revalidatePath("/4-server-action-client");
}
