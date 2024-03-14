import { TodoList } from "@/app/todos/_components/todo-list";
import { TodoSchema } from "@/app/todos/_lib/todo-validation";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

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

  revalidatePath("/3-server-action");
}

async function deleteAllTodos() {
  "use server";

  await kv.set("todos", []);

  console.info("Deleted all todos");

  revalidatePath("/3-server-action");
}

export default async function RedisExample() {
  const todos = await kv.get<TodoSchema[]>("todos");

  return (
    <main className="p-10">
      <div className="flex justify-between">
        <form action={createTodo}>
          <button className="text-blue-500" type="submit">
            Create Todo
          </button>
        </form>

        <form action={deleteAllTodos}>
          <button className="text-red-500" type="submit">
            Delete All Todos
          </button>
        </form>
      </div>

      <TodoList title="Todo" items={todos?.filter((todo) => !todo.completed) || []} />
    </main>
  );
}
