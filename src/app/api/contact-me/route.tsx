import { connectedToDb } from "../../../../dbConfig/db";

export async function GET(req : any) {
  await connectedToDb();

  try {
    const body = await req.json();
    const { email, name, subject, message } = body;
  } catch (err) {}

  return Response.json({ message: "Hello contact me" });
}
