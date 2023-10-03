"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsCircle, BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs'

export default function ToDoItem({ item }) {
  const [ iconHoverState, setIconHoverState ] = useState(false)
  const [ completedState, setCompletedState ] = useState(item.completed)
  const [ itemStyle, setItemStyle ] = useState({})

  useEffect(() => {
    completedState
      ? setItemStyle({itemColor: 'var(--brand-primary', itemDecoration: 'line-through'})
      : setItemStyle({itemColor: 'var(--gray-7', itemDecoration: 'none'})
  }, [completedState])


  return (
    <div className=" w-full flex justify-start items-start gap-2">
      
      {completedState ? (
        <BsCheckCircleFill className='text-brand-primary hover:text-black hover:font-bold flex-shrink-0'/>
      ) : ( 
        <BsCircle className='text-brand-primary hover:text-black hover:font-bold flex-shrink-0'/>
      )}


      <p className='text-xs' style={{color: `${itemStyle.color}`, textDecoration: `${itemStyle.decoration}`}}>
        {item && (
          item.description
        )}
      </p>

    </div>
  )
}