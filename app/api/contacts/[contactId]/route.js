import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";


export async function PUT (req, { params }) {
  try {
    const body = await req.json()
    await connectMongoDB();
    const toDo = await ToDo.findByIdAndUpdate(params.toDoId, body, {new: true})
    return NextResponse.json({status: 200, message: "To do item updated", toDo})

  } catch {
    return NextResponse.json({message: "Error updating to do item", status: 500})
  }
}