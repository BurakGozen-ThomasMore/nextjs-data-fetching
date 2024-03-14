import { TodoList } from "@/app/todos/_components/todo-list";
import { getTodos } from "@/app/todos/_lib/get-todo";

export default async function Home() {
  const todos = await getTodos();

  const todo = todos.filter((todo) => !todo.completed);
  const done = todos.filter((todo) => todo.completed);

  return (
    <main className="flex gap-20 px-40 py-10">
      <TodoList title="Todo" items={todo} />
      <TodoList title="Done" items={done} />
    </main>
  );
}
