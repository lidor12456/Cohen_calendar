import { NextResponse } from "next/server";
// import { run, client } from "../../db/dbConfig";
// import Users from "../../models/Users";
import { MongoClient } from "mongodb";

export async function GET(req, res) {
  if (req.method === "GET") {
    const client = new MongoClient(
      "mongodb+srv://lidor_ashush:knc7jpMsAK4B@cluster0.nekqmgn.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    try {
      console.log("req");
      await client.connect();
      const db = client.db("cohen_calendar");
      const persons = await db.collection("persons").find({}).toArray();
      res.status(200).json("persons");
    } catch (error) {
      res.status(500).json({ error: "Unable to connect to database" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Unsupported HTTP method" });
  }
}
