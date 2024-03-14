import { CheckIcon, XIcon } from "lucide-react";

type TodoStatusProps = {
  completed: boolean;
};

export function TodoStatus({ completed }: TodoStatusProps) {
  return (
    <div className="flex items-center gap-3">
      <span>status:</span>
      {completed ? (
        <CheckIcon className="size-5 text-green-500" />
      ) : (
        <XIcon className="size-5 text-red-500" />
      )}
    </div>
  );
}
