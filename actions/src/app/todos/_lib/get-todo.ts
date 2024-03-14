import { z } from "zod";
import { TodoSchema, todoSchema } from "./todo-validation";

export const TODO_URL = "https://jsonplaceholder.typicode.com/todos";

/**
 * Get all todos
 * @returns {Promise<TodoSchema[]>}
 */
export async function getTodos() {
  const response = await fetch(TODO_URL);
  const data = await response.json();
  return z.array(todoSchema).parse(data);
}

/**
 * Get a single todo by id
 * @param {unknown} input
 * @returns {Promise<TodoSchema>}
 */
export async function getTodo(input: unknown) {
  const id = z.coerce.number().parse(input);

  const response = await fetch(TODO_URL + "/" + id);
  const data = await response.json();

  return todoSchema.parse(data);
}
