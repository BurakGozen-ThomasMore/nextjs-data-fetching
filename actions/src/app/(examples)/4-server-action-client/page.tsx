import { TodoList } from "@/app/todos/_components/todo-list";
import { TodoSchema } from "@/app/todos/_lib/todo-validation";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { Button } from "./button";
import { CreateButton } from "./create-button";

async function createTodo() {
  "use server";

  const todos = await kv.get<TodoSchema[]>("todos");

  const newTodo: TodoSchema = {
    id: todos ? todos.length + 1 : 1,
    title: "Learn React",
    completed: false,
    userId: 1,
  };

  await kv.set("todos", [newTodo, ...(todos || [])]);

  console.info("Created todos");

  revalidatePath("/4-server-action-client");
}

async function deleteAllTodos() {
  "use server";

  await kv.set("todos", []);

  console.info("Deleted all todos");

  revalidatePath("/4-server-action-client");
}

export default async function RedisExample() {
  const todos = await kv.get<TodoSchema[]>("todos");

  return (
    <main className="p-10">
      <div className="flex justify-between">
        <CreateButton className="text-blue-500">Create Todo</CreateButton>

        <Button action={deleteAllTodos} className="text-red-500">
          Delete All Todos
        </Button>
      </div>

      <TodoList title="Todo" items={todos || []} />
    </main>
  );
}
