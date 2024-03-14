import { cookies } from "next/headers";

export default async function NosStoreEample() {
  cookies(); // headers() // unstable_noStore()

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h1> {new Date().toLocaleTimeString("nl")}</h1>
    </main>
  );
}
