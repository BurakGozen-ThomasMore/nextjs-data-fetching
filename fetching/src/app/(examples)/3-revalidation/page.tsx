export const revalidate = 10;

export default async function RevalidationEample() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h1> {new Date().toLocaleTimeString("nl")}</h1>
    </main>
  );
}
