import { Contacts, Files, Notes, ToDo } from '@/components'


export default function JobCardDropdown({ application }) {

  function randomString() {
    return Math.random() .toString(36) .slice (2)
  } 

  const sharedStyle = 'bg-white p-4 rounded-md drop-shadow-brand'

  return (
    <div className=" px-4 pt-[14px] pb-5 min-h-20 w-full rounded-b-md grid grid-cols-5 auto-rows-min gap-4 dropdown">
      <ToDo sharedStyle={sharedStyle} toDo={application.to_do} key={randomString}/>
      <Contacts sharedStyle={sharedStyle} contacts={application.contacts} key={randomString}/>
      <Files sharedStyle={sharedStyle} files={application.files} key={randomString}/>
      <Notes sharedStyle={sharedStyle} notes={application.notes} key={randomString}/>
    </div>
  )
}