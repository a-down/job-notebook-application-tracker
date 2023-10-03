import { ToDoItem } from '@/components'


export default function ToDo({ sharedStyle, toDo }) {
  console.log(toDo)

  return (
    <div className={`${sharedStyle} col-span-2 row-span-2 mb-1`}>
      <h6 className="text-lg font-regular mb-4">
        To Do
      </h6>

      <div className='flex flex-col items-start gap-2'>

        {toDo && (
          toDo.map(item => (
            <ToDoItem item={item}/>
          ))
        )}

      </div>
      

    </div>
  )
}