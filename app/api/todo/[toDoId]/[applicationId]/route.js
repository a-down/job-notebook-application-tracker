import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import ToDo from "@/models/ToDo";
import { NextResponse } from "next/server";


// /api/toDo/[toDoId]/[applicationId]
export async function DELETE (req, { params }) {
  try {
    await connectMongoDB();
    const res = await Application.findByIdAndUpdate(params.applicationId, {
      $pull: { to_do: params.toDoId }
    }, { new: true })
    const toDo = await ToDo.findByIdAndDelete(params.toDoId)
    return NextResponse.json({message: 'To do item has been deleted', status: 200, toDo})

  } catch {
    return NextResponse.json({message: 'Error deleting to do item', status: 500})
  }
}
