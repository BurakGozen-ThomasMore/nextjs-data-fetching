import { TodoList } from "@/app/todos/_components/todo-list";
import { TodoSchema } from "@/app/todos/_lib/todo-validation";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";

async function createTodo(formData: FormData) {
  "use server";

  const todos = await kv.get<TodoSchema[]>("todos");

  const newTodo: TodoSchema = {
    id: todos ? todos.length + 1 : 1,
    title: formData.get("title") as string,
    completed: formData.get("completed") === "on",
    userId: Number(formData.get("userId")),
  };

  console.log(newTodo);

  await kv.set("todos", [newTodo, ...(todos || [])]);

  console.info("Created todos");

  revalidatePath("/5-forms");
}

export default async function RedisExample() {
  const todos = await kv.get<TodoSchema[]>("todos");

  return (
    <main className="flex flex-col gap-24 p-10">
      <form
        action={createTodo}
        className="flex w-60 flex-col gap-10 self-center border border-slate-800 p-3"
      >
        <input type="hidden" name="userId" value="1" />

        <label className="flex flex-col gap-2">
          Title
          <input type="text" name="title" placeholder="Todo title" />
        </label>

        <label className="flex items-center gap-2">
          Completed
          <input type="checkbox" name="completed" />
        </label>

        <button className="col-span-2 bg-blue-500 px-6 py-3 text-blue-100" type="submit">
          Submit
        </button>
      </form>

      <TodoList items={todos || []} />
    </main>
  );
}
