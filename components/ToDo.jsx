"use client"
import { useState } from 'react'
import { ToDoItem } from '@/components'
import { PiPlusBold } from 'react-icons/pi'


export default function ToDo({ sharedStyle, toDo, setProgressPercentage, updateCard, applicationId }) {
  const [ toDoFormData, setToDoFormData ] = useState('')
  console.log(toDo)

  async function createToDoItem(e) {
    e.preventDefault()
    const res = await fetch(`/api/applications/${applicationId}/todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({description: toDoFormData})
    })
    await updateCard()
    setToDoFormData('')
  }



  return (
    <div className={`${sharedStyle} col-span-2 row-span-2 mb-1 h-full flex flex-col justify-between`}>
      <div>
        <h6 className="text-lg font-regular mb-3">
          To Do
        </h6>

        <div className='to-do-wrapper flex flex-col items-start gap-2 mb-2 overflow-scroll max-h-[216px]'>
          {toDo && (
            toDo.map((item, index) => (
              <ToDoItem item={item} key={index} setProgressPercentage={setProgressPercentage} updateCard={updateCard} applicationId={applicationId}/>
            ))
          )}
        </div>
      </div>

      <form className='flex gap-2 items-center justify-start'>
        <button className=''
          onClick={createToDoItem}>
          <PiPlusBold className='text-brand-primary text-lg rounded-sm hover:text-black active:animate-pulse'/>
        </button>
        <input 
          className='w-full rounded-md border border-brand-primary px-1.5 py-1 text-xs text-gray-7 focus:border-brand-primary'
          value={toDoFormData}
          name='toDoInput'
          onChange={(e) => setToDoFormData(e.target.value)}/>
      </form>
      
    </div>
  )
}