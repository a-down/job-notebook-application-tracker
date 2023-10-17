"use client"
import { useEffect, useState } from 'react'
import { ToDoItem } from '@/components'
import { PiPlusBold } from 'react-icons/pi'
import { MdAddBox } from 'react-icons/md'


export default function ToDo({ sharedStyle, toDo, setProgressPercentage, updateCard, applicationId }) {
  const [ toDoState, setToDoState ] = useState(toDo)
  const [ toDoFormData, setToDoFormData ] = useState('')

  useEffect(() => {
    setToDoState(toDo)
  }, [toDo])

  async function createToDoItem(e) {
    e.preventDefault()
    setToDoFormData('')
    setToDoState([...toDoState, {description: toDoFormData, completed: false}])
    await fetch(`/api/applications/${applicationId}/todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({description: toDoFormData})
    })
    await updateCard()
  }

  return (
    <div className={`${sharedStyle} col-span-2 row-span-2 mb-1 h-full flex flex-col justify-between`}>
      <div>
        <h6 className="text-lg font-regular mb-3">
          To Do
        </h6>

        <div className='to-do-wrapper flex flex-col items-start gap-2 mb-2 overflow-y-scroll h-[216px]'>
          {toDoState && (
            toDoState.map((item, index) => (
              <ToDoItem item={item} key={index} setProgressPercentage={setProgressPercentage} updateCard={updateCard} applicationId={applicationId}/>
            ))
          )}
        </div>
      </div>

      <form className='flex gap-2 items-center justify-start'>
        <button className=''
          onClick={createToDoItem}>
          <MdAddBox className='text-brand-primary text-2xl rounded-sm hover:text-gray-7 active:text-gray-9 duration-300'/>
        </button>
        <input 
          className='w-full rounded-sm border border-brand-primary px-1.5 py-1 text-xs text-gray-7 focus:border-brand-primary'
          value={toDoFormData}
          name='toDoInput'
          onChange={(e) => setToDoFormData(e.target.value)}/>
      </form>
      
    </div>
  )
}