import connectToMongoDb from "@/app/db/dbConfig";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const userMail = context.params.personsbymail;
  const client = await connectToMongoDb();

  try {
    await client.connect();
    const db = client.db("cohen_calendar");
    const personsByMail = await db
      .collection("persons")
      .find({ createdBy: userMail })
      .toArray();
    if (personsByMail.length > 0) {
      return NextResponse.json(personsByMail);
    } else {
      return NextResponse.json([]);
    }
  } catch (error) {
    return NextResponse.json({ error: "Unable to connect" });
  } finally {
    await client.close();
  }
}
