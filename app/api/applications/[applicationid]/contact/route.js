import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import { NextResponse } from "next/server";

export async function PUT (req, { params }) {
  const body = await req.json()
  try {
    await connectMongoDB();
    await Application.findByIdAndUpdate(params.applicationid, {
      $push: { contacts: body }
    }, { new: true })
    return NextResponse.json({message: "Contact Added", status: 200, body})

  } catch (err) {
    return NextResponse.json({message: "Error creating new contact", status: 500})
  }
}

export async function DELETE (req, { params }) {
  await connectMongoDB();
  await Application.findByIdAndDelete(params.applicationid)
  return NextResponse.json({message: "Application Deleted", status: 200, params: params})
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