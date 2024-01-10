import { NextRequest, NextResponse } from "next/server";
import connectToMongoDb from "../../db/dbConfig";

export async function GET() {
  const client = await connectToMongoDb();

  try {
    await client.connect();
    const db = client.db("cohen_calendar");
    const persons = await db.collection("persons").find({}).toArray();
    return NextResponse.json(persons);
  } catch (error) {
    return NextResponse.json({ error: "Unable to connect to database" });
  } finally {
    await client.close();
  }
}
export async function POST(req, res) {
  const client = await connectToMongoDb();

  try {
    await client.connect();
    const db = client.db("cohen_calendar");
    const newPerson = await req.json();
    const result = await db.collection("persons").insertMany(newPerson);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error });
  } finally {
    await client.close();
  }
}
