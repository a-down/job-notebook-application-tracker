import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import { NextResponse } from "next/server";

export async function POST (req) {
  const body = await req.json()
  console.log(body)
  await connectMongoDB();
  await Application.create(body)
  return NextResponse.json({message: "Application Created", status: 201})
}

export async function GET (req) {
  await connectMongoDB();
  const applications = await Application.find()
  return NextResponse.json(applications)
}