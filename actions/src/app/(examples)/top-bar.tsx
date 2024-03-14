"use client";

import { usePathname } from "next/navigation";
import { paths } from "./paths";

export function TopBar() {
  const pathname = usePathname();

  const currentPath = paths.find((path) => path.href === pathname);

  return <h1 className="h-min p-10">{currentPath?.name}</h1>;
}
