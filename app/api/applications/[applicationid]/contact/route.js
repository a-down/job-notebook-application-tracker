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

export async function POST (req, { params }) {
  const body = await req.json()
  console.log(body)
  try {
    await connectMongoDB();
    const res = await Contact.create(body)
    await Application.findByIdAndUpdate(params.applicationid, {
      $push: { contacts: res._id }
    }, { new: true })
    return NextResponse.json({message: "Contact Created", status: 200, res})

  } catch (err) {
    return NextResponse.json({message: "Error creating new contact", status: 500})
  }
}

export async function DELETE (req, { params }) {
  const body = await req.json()
  console.log(body)
  try {
    await connectMongoDB();
    const res = await Application.findByIdAndUpdate(params.applicationId, {
      $pull: { contacts: { _id: body.contactId } }
    }, { new: true })
    return NextResponse.json({message: "Application Deleted", status: 200, res})
  } catch (err) {
    return NextResponse.json({message: "Error deleting contact", status: 500})
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