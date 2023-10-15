"use client"
import { ToDoItem } from '@/components'
import { PiPlusBold } from 'react-icons/pi'


export default function ToDo({ sharedStyle, toDo, setProgressPercentage, updateCard }) {
  // const [ toDoState, ]

  return (
    <div className={`${sharedStyle} col-span-2 row-span-2 mb-1 h-full flex flex-col`}>
      <h6 className="text-lg font-regular mb-3">
        To Do
      </h6>

      <div className='flex flex-col items-start gap-2 mb-2'>
        {toDo && (
          toDo.map((item, index) => (
            <ToDoItem item={item} key={index} setProgressPercentage={setProgressPercentage} updateCard={updateCard}/>
          ))
        )}
      </div>

      <div className='flex items-end h-full'>
        <form className='flex gap-2 items-center justify-start'>
          <button className=''>
            <PiPlusBold className='text-brand-primary text-lg rounded-sm'/>
          </button>
          <input className='w-full rounded-md border border-brand-primary px-1.5 py-1 text-xs focus:border-brand-primary'/>
        </form>
      </div>
      
    </div>
  )
}