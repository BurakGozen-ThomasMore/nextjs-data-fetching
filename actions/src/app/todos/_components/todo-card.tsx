import { TodoSchema } from "@/app/todos/_lib/todo-validation";
import Link from "next/link";
import { TodoStatus } from "./todo-status";

type TodoCardProps = {
  todo: TodoSchema;
};

export function TodoCard(props: TodoCardProps) {
  const { id, title, completed } = props.todo;

  return (
    <Link
      key={id}
      href={`/todos/${id}`}
      className="flex flex-col gap-3 rounded-lg bg-slate-700 p-4 text-slate-100 shadow-lg"
    >
      <span className="truncate font-bold text-white">{title}</span>

      <TodoStatus completed={completed} />
    </Link>
  );
}
