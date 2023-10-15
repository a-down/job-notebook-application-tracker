import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import ToDo from "@/models/ToDo";
import { NextResponse } from "next/server";


export async function DELETE (req, { params }) {
  await connectMongoDB();
  const res = await Application.findByIdAndUpdate(params.applicationId, {
    $pull: { to_do: params.toDoId }
  }, { new: true })
  const toDo = await ToDo.findByIdAndDelete(params.toDoId)
  return NextResponse.json({message: `${toDo.description} has been deleted.)`, status: 200, application: res})
}
