import { ToDoItem } from '@/components'


export default function ToDo({ sharedStyle }) {

  return (
    <div className={`${sharedStyle} row-span-2`}>
      <h6 className="text-lg font-regular">To Do</h6>

      <ToDoItem />

    </div>
  )
}