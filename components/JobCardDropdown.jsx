import { Contacts, Files, Notes, ToDo } from '@/components'


export default function JobCardDropdown({ project }) {

  const sharedStyle = 'bg-white p-4 rounded-md drop-shadow-brand'

  return (
    <div className=" px-4 pt-[14px] pb-5 min-h-20 w-full rounded-b-md grid grid-cols-5 auto-rows-min gap-4 dropdown">
      <ToDo sharedStyle={sharedStyle} toDo={project.to_do}/>
      <Contacts sharedStyle={sharedStyle} contacts={project.contacts}/>
      <Files sharedStyle={sharedStyle} files={project.files}/>
      <Notes sharedStyle={sharedStyle}/>
    </div>
  )
}