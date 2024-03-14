import { Navigation } from "@/app/(examples)/navigation";
import { TopBar } from "./top-bar";

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] divide-x divide-y divide-slate-800">
      <Navigation className="row-span-2" />
      <TopBar />
      <main className="h-full w-full">{children}</main>
    </div>
  );
}
