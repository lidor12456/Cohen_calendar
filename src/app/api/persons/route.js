const dbOperation = require("../../../../db/dbOperation");
import { NextRequest, NextResponse } from "next/server";

export async function GET(NextRequest) {
  dbOperation.getPersons().then((res) => {
    console.log(res);
    return NextResponse.json({ posts: [] });
  });

  console.log(dbOperation);
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) {}
