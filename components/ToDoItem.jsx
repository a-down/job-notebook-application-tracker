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

  function toggleCompleted() {
    completedState ? setCompletedState(false) : setCompletedState(true)
  }


  return (
    <div className=" w-full flex justify-start items-start gap-2">
      
      {completedState && !iconHoverState && (
        <BsCheckCircleFill className='text-brand-primary flex-shrink-0' onMouseEnter={() => setIconHoverState(true)}/>
      )}  
      
      {!completedState && !iconHoverState && (
        <BsCircle className='text-brand-primary flex-shrink-0' onMouseEnter={() => setIconHoverState(true)}/>
      )}

      {iconHoverState && (
        <BsCheckCircle className='text-brand-primary flex-shrink-0 hover:cursor-pointer' onClick={toggleCompleted} onMouseLeave={() => setIconHoverState(false)}/>
      )}

      <p className='text-xs' style={{color: `${itemStyle.itemColor}`, textDecoration: `${itemStyle.itemDecoration}`}}>
        {item && (
          item.description
        )}
      </p>

    </div>
  )
}