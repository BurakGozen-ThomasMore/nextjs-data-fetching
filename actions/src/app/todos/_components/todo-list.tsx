import { TodoSchema } from "@/app/todos/_lib/todo-validation";
import { TodoCard } from "./todo-card";

type TodoListProps = {
  title?: string;
  items: TodoSchema[];
};

export function TodoList({ title, items }: TodoListProps) {
  return (
    <div className="w-full">
      {title && <h2 className="mb-4 pb-5 text-center text-lg font-bold">{title}</h2>}

      <div className="flex flex-col gap-5">
        {items.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
