"use client"
import { useEffect, useState } from 'react'
import { PiCircle, PiCheckCircle, PiCheckCircleFill, PiCheckCircleDuotone, PiTrash, PiTrashFill } from 'react-icons/pi'

export default function ToDoItem({ item, setProgressPercentage, updateCard, applicationId }) {
  const [ iconHoverState, setIconHoverState ] = useState(false)
  const [ completedState, setCompletedState ] = useState(item.completed)
  const [ grayTrashState, setGrayTrashState ] = useState(false)
  const [ redTrashState, setRedTrashState ] = useState(false)
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

  async function deleteToDoItem(e) {
    e.preventDefault()
    const res = await fetch(`/api/todo/${item._id}/${applicationId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await updateCard()
  }

  return (
    <div className=" w-full flex justify-start items-start gap-2 relative">
      
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

      <p className='grow text-xs duration-300 leading-normal' 
        style={{color: `${itemStyle.itemColor}`, textDecoration: `${itemStyle.itemDecoration}`}}
        onMouseEnter={() => setGrayTrashState(true)}
        onMouseLeave={() => setGrayTrashState(false)}>
        {itemState && (
          itemState.description
        )}
      </p>

      <div className='flex grow justify-end items-center absolute right-0 bg-white opacity-80 rounded-full'>
        {grayTrashState && (
          <PiTrash className='text-gray-7 flex-shrink-0 text-lg hover:cursor-pointer'
            onMouseEnter={() => {
                setGrayTrashState(false)
                setRedTrashState(true)
              }} />
        )}
        {redTrashState && (
          <PiTrashFill className='text-red-400 flex-shrink-0 text-lg hover:cursor-pointer'
            onMouseLeave={() => setRedTrashState(false)}
            onClick={deleteToDoItem} />
        )}

      </div>


    </div>
  )
}