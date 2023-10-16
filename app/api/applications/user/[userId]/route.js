import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import ToDo from "@/models/ToDo";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

// export async function POST (req) {
//   const body = await req.json()
//   console.log(body)
//   await connectMongoDB();
//   await Application.create(body)
//   return NextResponse.json({message: "Application Created", status: 201})
// }

export async function GET (req, { params }) {
  const userId = await params.userId
  await connectMongoDB();
  const applications = await Application.find({ user_id: userId }).populate('to_do').populate('contacts')
  return NextResponse.json(applications)
}