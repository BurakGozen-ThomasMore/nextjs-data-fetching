export default async function CachingExample() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1> {new Date().toLocaleTimeString("nl")}</h1>
    </div>
  );
}
