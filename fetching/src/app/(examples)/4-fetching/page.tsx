export const revalidate = 10;

export default async function FetchingExample() {
  const response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Brussels");
  const { datetime } = await response.json();
  const time = new Date(datetime).toLocaleTimeString("nl");

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h1> {time}</h1>
    </main>
  );
}
