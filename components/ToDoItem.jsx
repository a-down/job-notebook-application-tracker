"use client"
import { useEffect, useState } from 'react'
import { PiCircle, PiCheckCircle, PiCheckCircleFill, PiCheckCircleDuotone, PiTrash, PiTrashFill } from 'react-icons/pi'
import { BiSolidTrash } from 'react-icons/bi'
import { toast } from 'sonner';

export default function ToDoItem({ item, setProgressPercentage, updateCard, applicationId }) {
  const [ visibilityState, setVisibilityState ] = useState(true)
  const [ iconHoverState, setIconHoverState ] = useState(false)
  const [ completedState, setCompletedState ] = useState(item.completed)
  const [ grayTrashState, setGrayTrashState ] = useState(false)
  const [ redTrashState, setRedTrashState ] = useState(false)
  const [ itemStyle, setItemStyle ] = useState({})
  const [ itemState, setItemState ] = useState(item)

  useEffect(() => {
    setItemState(item)
  }, [item])

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
    try {
      const res = await fetch(`/api/todo/${itemState._id}`, {
        method: 'PUT', 
        body: JSON.stringify({
          completed: completed
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()

      if (res.status === 200) {
        setItemState(data)
        setCompletedState(data.completed)
        updateCard()
      } else {
        toast.error(data.message, {
          style: {
            backgroundColor: '#F87171',
            color: '#fff'
          }
        })
      }

    } catch (err) {
      toast.error('Error updated to do item', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      })
    }
  }

  async function deleteToDoItem() {
    setItemState({})
    try {
      const res = await fetch(`/api/todo/${item._id}/${applicationId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()

      if (res.status === 200) {
        updateCard()
      } else {
        toast.error(data.message, {
          style: {
            backgroundColor: '#F87171',
            color: '#fff'
          }
        })
        setItemState(item)
      }
    
    } catch {
      toast.error('Error deleting to do item', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      })
      setItemState(item)
    }
  }

  return (
    <>
      {itemState.description && (
        <div className=" w-full flex justify-start items-start gap-2 relative"
          onMouseEnter={() => setGrayTrashState(true)}
          onMouseLeave={() => setGrayTrashState(false)}>
          
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
            style={{color: `${itemStyle.itemColor}`, textDecoration: `${itemStyle.itemDecoration}`}}>
            {itemState && (
              itemState.description
            )}
          </p>

          <div className='flex grow justify-end items-center absolute right-0 bg-white opacity-80 rounded-full'>
            {grayTrashState && (
              <BiSolidTrash className='text-gray-7 hover:text-red-400 flex-shrink-0 text-lg hover:cursor-pointer'
                onClick={deleteToDoItem}/>
            )}

          </div>
        </div>
      )}
    </>
  )
}