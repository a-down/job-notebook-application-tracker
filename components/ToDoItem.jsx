"use client"
import { useEffect, useState } from 'react'
import { PiCircle, PiCheckCircle, PiCheckCircleFill, PiCheckCircleDuotone } from 'react-icons/pi'

export default function ToDoItem({ item, setProgressPercentage, updateCard }) {
  const [ iconHoverState, setIconHoverState ] = useState(false)
  const [ completedState, setCompletedState ] = useState(item.completed)
  const [ itemStyle, setItemStyle ] = useState({})
  const [ itemState, setItemState ] = useState(item)

  useEffect(() => {
    completedState
      ? setItemStyle({itemColor: 'var(--brand-primary)', itemDecoration: 'line-through'})
      : setItemStyle({itemColor: '#8C8C8C', itemDecoration: 'none'})
  }, [completedState])

  function toggleCompleted() {
    completedState ? setCompletedState(false) : setCompletedState(true)
  }

  async function updateToDoItem(completed) {
    toggleCompleted()
    const res = await fetch(`/api/todo/${itemState._id}`, {
      method: 'PUT', 
      body: JSON.stringify({
        completed: completed
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    setItemState(data)
    setCompletedState(data.completed)
    updateCard()
  }

  return (
    <div className=" w-full flex justify-start items-start gap-2">
      
      {completedState && !iconHoverState && (
        <PiCheckCircleFill className='text-brand-primary flex-shrink-0 text-lg' 
          onMouseEnter={() => setIconHoverState(true)}/>
      )}  
      
      {!completedState && !iconHoverState && (
        <PiCircle className='text-brand-primary flex-shrink-0 text-lg' 
          onMouseEnter={() => setIconHoverState(true)}/>
      )}

      {iconHoverState && !completedState && (
        <PiCheckCircle className='text-brand-primary flex-shrink-0 text-lg hover:cursor-pointer' 
          onClick={() => updateToDoItem(true)} 
          onMouseLeave={() => setIconHoverState(false)}/>
      )}

      {iconHoverState && completedState && (
        <PiCheckCircleDuotone className='text-brand-primary flex-shrink-0 text-lg hover:cursor-pointer' 
          onClick={() => updateToDoItem(false)} 
          onMouseLeave={() => setIconHoverState(false)}/>
      )}

      <p className='text-xs duration-300 leading-normal' style={{color: `${itemStyle.itemColor}`, textDecoration: `${itemStyle.itemDecoration}`}}>
        {itemState && (
          itemState.description
        )}
      </p>

    </div>
  )
}