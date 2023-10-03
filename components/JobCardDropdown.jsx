import { Contacts, Files, Notes, ToDo } from '@/components'


export default function JobCardDropdown({ project }) {

  const sharedStyle = 'bg-white p-4 rounded-md drop-shadow-brand'

  return (
    <div className=" p-4 min-h-20 bg-gray-2 w-full rounded-b-md grid grid-cols-5 auto-rows-min gap-4">
      <ToDo sharedStyle={sharedStyle} toDo={project.to_do}/>
      <Contacts sharedStyle={sharedStyle} contacts={project.contacts}/>
      <Files sharedStyle={sharedStyle}/>
      <Notes sharedStyle={sharedStyle}/>
    </div>
  )
}