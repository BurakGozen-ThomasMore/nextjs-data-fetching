export const revalidate = 10;

export default async function RevalidationEample() {
  const response = await fetch("http://localhost:3000/api/time", { next: { revalidate: 10 } });
  const { time } = await response.json();

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h1> {time}</h1>
    </main>
  );
}
