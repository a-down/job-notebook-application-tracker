import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET (req, { params }) {
  const id = await params.id
  await connectMongoDB();
  const user = await User.findById(id).populate('applications')
  await console.log(user)
  return NextResponse.json(user)
}