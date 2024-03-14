"use client";

import { HTMLAttributes, useTransition } from "react";
import { createTodo } from "./actions";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {};

export function CreateButton({ onClick, ...props }: ButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      {...props}
      disabled={isPending}
      onClick={(e) => {
        startTransition(() => {
          createTodo("React");
        });
        onClick?.(e);
      }}
    />
  );
}
