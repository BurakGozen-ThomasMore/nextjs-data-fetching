import { kv } from "@vercel/kv";
import "dotenv/config";
import { getTodos } from "../app/todos/_lib/get-todo";

export async function seed() {
  const todos = await getTodos();
  console.log(todos);
  kv.set("todos", todos);

  console.log("Seed complete");
}

seed();
