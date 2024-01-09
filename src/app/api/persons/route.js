import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import connectToMongoDb from "../../db/dbConfig";

export async function GET() {
  const client = await connectToMongoDb();

  try {
    await client.connect();
    const db = client.db("cohen_calendar");
    const persons = await db.collection("persons").find({}).toArray();
    return NextResponse.json(persons);
    console.log(persons);
  } catch (error) {
    return NextResponse.json({ error: "Unable to connect to database" });
  } finally {
    await client.close();
  }
}
