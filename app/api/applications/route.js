import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json()
  await connectMongoDB();
  await Application.create(body)
  return NextResponse.json({message: "Application Created", status: 201})
}