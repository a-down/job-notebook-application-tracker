import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import Application from "@/models/Application"
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json()
  await console.log(body)
  await connectMongoDB();
  await User.create(body)
  return NextResponse.json({message: "User Created", status: 201})
}

export async function GET (req) {
  await connectMongoDB();
  const users = await User.find().populate('applications')
  return NextResponse.json(users)
}