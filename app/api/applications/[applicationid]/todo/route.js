import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import ToDo from "@/models/ToDo";
import { NextResponse } from "next/server";


// /api/applications/[applicationid]/todo
export async function POST (req, { params }) {
  try {
    const body = await req.json()
    await connectMongoDB();
    const res = await ToDo.create(body)
    await Application.findByIdAndUpdate(params.applicationid, {
      $push: { to_do: res._id }
    }, { new: true })
    return NextResponse.json({message: "Application updated", status: 200, res})
    
  } catch {
    return NextResponse.json({message: "Error updating application", status: 500})
  }
}