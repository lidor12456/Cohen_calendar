// pages/api/register.js
import connectToMongoDb from "@/app/db/dbConfig";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  const client = await connectToMongoDb();

  try {
    await client.connect();
    const db = client.db("cohen_calendar");

    const { name, email } = await request.json();

    // Use the User model to interact with the "test" collection
    await User.create({ name: "bla", email: "bla" });

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    // Close the MongoDB connection after use
    await client.close();
  }
}
