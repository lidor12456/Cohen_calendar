import connectToMongoDb from "@/app/db/dbConfig";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  const client = await connectToMongoDb();
  await client.connect();
  const db = client.db("cohen_calendar");

  const newUser = await request.json();
  // await User.create({ name, email });
  let result = await db.collection("users").insertOne(newUser);

  return NextResponse.json({ result }, { status: 201 });
}
