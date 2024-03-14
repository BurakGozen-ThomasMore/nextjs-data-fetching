import { TodoStatus } from "@/app/todos/_components/todo-status";
import { getTodo } from "@/app/todos/_lib/get-todo";
import { ChevronLeftSquareIcon } from "lucide-react";
import Link from "next/link";

export default async function TodoDetailPage(props: { params: { id: string } }) {
  const todo = await getTodo(props.params.id);

  const { title, completed } = todo;

  return (
    <main className="flex h-screen flex-col items-center justify-center p-40">
      <Link href="/todos" className="fixed left-10 top-10">
        <ChevronLeftSquareIcon className="size-8 text-slate-700" />
      </Link>

      <div className="flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold text-slate-700">{title}</h1>
        <TodoStatus completed={completed} />
      </div>
    </main>
  );
}
