"use client";

import { HTMLAttributes, useTransition } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  action: () => Promise<void>;
};

export function Button({ action, onClick, ...props }: ButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      {...props}
      disabled={isPending}
      onClick={(e) => {
        startTransition(action);
        onClick?.(e);
      }}
    />
  );
}
