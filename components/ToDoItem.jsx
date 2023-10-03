"use client"
import Image from 'next/image'
import { BsCircle, BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs'

export default function ToDoItem({ item }) {

  return (
    <div className=" w-full flex justify-start items-start gap-2">
      
      <BsCircle className='text-brand-primary hover:text-black hover:font-bold flex-shrink-0'/>
      <BsCheckCircleFill className='text-brand-primary hover:text-black hover:font-bold flex-shrink-0'/>

      <p className='text-xs text-gray-7' style={{color: 'var(--brand-primary)', textDecoration: 'line-through'}}>
        {item && (
          item.description
        )}
      </p>

    </div>
  )
}