import { Contacts, Files, Notes, ToDo } from '@/components'


export default function JobCardDropdown() {

  const sharedStyle = 'bg-white p-4 rounded-md drop-shadow-brand'

  return (
    <div className=" p-4 min-h-20 bg-gray-2 w-full rounded-b-md grid grid-cols-5 grid-rows-3 gap-4">
      <ToDo sharedStyle={sharedStyle}/>
      <Contacts sharedStyle={sharedStyle}/>
      <Files sharedStyle={sharedStyle}/>
      <Notes sharedStyle={sharedStyle}/>
    </div>
  )
}