import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json()
  await connectMongoDB();
  await User.create(body)
  return NextResponse.json({message: "User Created", status: 201})
}