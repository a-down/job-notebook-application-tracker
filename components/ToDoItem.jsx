"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PiCircle, PiCheckCircle, PiCheckCircleFill, PiCheckCircleDuotone } from 'react-icons/pi'

export default function ToDoItem({ item }) {
  const [ iconHoverState, setIconHoverState ] = useState(false)
  const [ completedState, setCompletedState ] = useState(item.completed)
  const [ itemStyle, setItemStyle ] = useState({})

  useEffect(() => {
    completedState
      ? setItemStyle({itemColor: 'var(--brand-primary', itemDecoration: 'line-through'})
      : setItemStyle({itemColor: 'var(--gray-7', itemDecoration: 'none'})
  }, [completedState])

  function toggleCompleted() {
    completedState ? setCompletedState(false) : setCompletedState(true)
  }


  return (
    <div className=" w-full flex justify-start items-start gap-2">
      
      {completedState && !iconHoverState && (
        <PiCheckCircleFill className='text-brand-primary flex-shrink-0 text-lg' onMouseEnter={() => setIconHoverState(true)}/>
      )}  
      
      {!completedState && !iconHoverState && (
        <PiCircle className='text-brand-primary flex-shrink-0 text-lg' onMouseEnter={() => setIconHoverState(true)}/>
      )}

      {iconHoverState && !completedState && (
        <PiCheckCircle className='text-brand-primary flex-shrink-0 text-lg hover:cursor-pointer' onClick={toggleCompleted} onMouseLeave={() => setIconHoverState(false)}/>
      )}

      {iconHoverState && completedState && (
        <PiCheckCircleDuotone className='text-brand-primary flex-shrink-0 text-lg hover:cursor-pointer' onClick={toggleCompleted} onMouseLeave={() => setIconHoverState(false)}/>
      )}

      <p className='text-xs duration-300' style={{color: `${itemStyle.itemColor}`, textDecoration: `${itemStyle.itemDecoration}`}}>
        {item && (
          item.description
        )}
      </p>

    </div>
  )
}