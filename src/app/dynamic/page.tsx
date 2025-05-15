import { connection } from "next/server";

export default async function Dynamic() {
  await connection();
  return <p>{new Date().toLocaleTimeString()}</p>;
}
