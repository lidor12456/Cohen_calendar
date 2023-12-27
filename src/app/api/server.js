import { NextResponse } from "next/server";
const dbOperation = require("../../../db/dbOperation");

export default function handler(req, res) {
  return res.status(200).json({ message: "Hello from Next.js!" });
}

// dbOperation.getPersons().then((res) => {
//   console.log(res);
// });
