import { TodoList } from "@/app/todos/_components/todo-list";
import { TodoSchema } from "@/app/todos/_lib/todo-validation";
import { kv } from "@vercel/kv";

export default async function RedisExample() {
  const todos = await kv.get<TodoSchema[]>("todos");

  return (
    <main className="p-10">
      <TodoList title="Todo" items={todos?.filter((todo) => !todo.completed) || []} />
    </main>
  );
}
