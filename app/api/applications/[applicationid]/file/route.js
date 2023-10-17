import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

// export async function PUT (req, { params }) {
//   const body = await req.json()
//   try {
//     await connectMongoDB();
//     await Application.findByIdAndUpdate(params.applicationid, {
//       $push: { contacts: body }
//     }, { new: true })
//     return NextResponse.json({message: "Contact Added", status: 200, body})

//   } catch (err) {
//     return NextResponse.json({message: "Error creating new contact", status: 500})
//   }
// }

// /api/applications/[applicationid]/file
export async function POST (req, { params }) {
  const body = await req.json()
  console.log(body)
  try {
    await connectMongoDB();
    const res = await Application.findByIdAndUpdate(params.applicationid, {
      $push: { files: body }
    }, { new: true })
    return NextResponse.json({message: "File created", status: 200, res})

  } catch (err) {
    return NextResponse.json({message: "Error creating file", status: 500})
  }
}

export async function DELETE (req, { params }) {
  const body = await req.json()
  console.log(body)
  console.log(params.applicationid)
  try {
    await connectMongoDB();
    const res = await Application.updateOne({_id: params.applicationid}, {
      $pull: { files: { "_id": body.fileId}}
    })
    console.log(res)
    return NextResponse.json({message: "File Deleted", status: 200, res})
  } catch (err) {
    return NextResponse.json({message: "Error deleting file", status: 500})
  }
  
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