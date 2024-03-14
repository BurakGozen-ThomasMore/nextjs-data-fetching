"use client";

import { cn } from "@/lib/classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import { paths } from "./paths";

type NavigationProps = HTMLAttributes<HTMLElement>;

export function Navigation({ className, ...props }: NavigationProps) {
  const pathname = usePathname();
  const currentPath = paths.find((path) => path.href === pathname);

  return (
    <nav {...props} className={cn("h-full p-10", className)}>
      <ul className="flex flex-col gap-6">
        {paths.map(({ href, name }, index) => (
          <Link
            key={index}
            href={href}
            className={cn("min-w-max", href === currentPath?.href && "text-red-500")}
          >
            {index}.<span className="ml-1.5 underline">{name}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
