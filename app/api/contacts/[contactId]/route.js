import connectMongoDB from "@/libs/mongodb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";


// export async function GET (req, { params }) {
//   await connectMongoDB();
//   const toDo = await ToDo.findById(params.toDoId)
//   return NextResponse.json(toDo)
// }

export async function PUT (req, { params }) {
  const body = await req.json()
  await connectMongoDB();
  const toDo = await ToDo.findByIdAndUpdate(params.toDoId, body, {new: true})
  return NextResponse.json(toDo)
}


// export async function POST (req) {
//   const {to_do, ...body} = await req.json()
//   await connectMongoDB();
//   const application = await Application.create(body)
//   let toDoIdArr = []
//   for (const item of to_do) {
//     const res = await ToDo.create(item)
//     await Application.findByIdAndUpdate(application._id, {
//       $push: { to_do: res._id }
//     }, { new: true })
//   }

//   // await Application.create(body)
//   return NextResponse.json({message: "Application Created", status: 201})
// }