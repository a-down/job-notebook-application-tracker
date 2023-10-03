"use client"
import Image from 'next/image'
import { BsCircle, BsCheckCircle } from 'react-icons/bs'

export default function ToDoItem({ item }) {

  return (
    <div className=" w-full h-4 flex justify-start items-center gap-1">
      
      <BsCircle />

      <p className='text-sm'>
        Write Resume
      </p>

    </div>
  )
}