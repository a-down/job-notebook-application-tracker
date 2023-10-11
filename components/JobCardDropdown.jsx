"use client"
import { useState } from 'react'
import { Contacts, Files, Notes, ToDo, Modal } from '@/components'
import * as Dialog from '@radix-ui/react-dialog';


export default function JobCardDropdown({ application, setProgressPercentage, updateCard, getApplications, setCardVisibility }) {
  const [ confirmDeleteState, setConfirmDeleteState ] = useState(false)

  async function deleteApplication() {
    setCardVisibility(false)
    const res = await fetch(`/api/applications/${application._id}`, {
      method: 'DELETE'
    })
    const data = await res.json()
  }

  const sharedStyle = 'bg-white p-4 rounded-md drop-shadow-brand'

  return (
    <>
          <div className=" px-4 pt-[14px] pb-5 min-h-20 w-full rounded-b-md grid grid-cols-5 auto-rows-min gap-4 dropdown">
            <ToDo sharedStyle={sharedStyle} toDo={application.to_do} setProgressPercentage={setProgressPercentage} updateCard={updateCard}/>
            <Contacts sharedStyle={sharedStyle} contacts={application.contacts}/>
            <Files sharedStyle={sharedStyle} files={application.files}/>
            <Notes sharedStyle={sharedStyle} notes={application.notes}/>
          </div>
          <div className='px-4 pb-4 flex justify-between'>
            <div>
              <button className=' text-xs p-2 px-3 bg-brand-primary border border-brand-primary text-white rounded-full hover:bg-gray-7 hover:border-gray-7 duration-300 mr-2'>
                Mark Complete
              </button>

              <button className=' text-xs p-2 px-3 bg-transparent border border-gray-400 text-gray-400 rounded-full hover:bg-gray-400 hover:border-gray-400 hover:text-white duration-300'>
                Edit Application
              </button>
            </div>

            <Modal button={{text: 'Delete', style: 'danger'}}>
              <form className="flex flex-col items-center gap-4 w-[80vw] max-w-[600px] bg-white py-12 px-20 rounded-lg border drop-shadow-brand"> 
                <label className='text-xl'>Are you sure you want to delete this application?</label>
                <div className='flex gap-4 w-full justify-between'>
                  <Dialog.Close className='grow'>
                    <button className=' p-4 w-full bg-transparent border border-gray-400 text-gray-400 rounded-full hover:bg-gray-400 hover:border-gray-400 hover:text-white duration-300'>
                      Cancel
                    </button>
                  </Dialog.Close>
                  <button 
                    className=' p-4 grow bg-transparent border bg-red-400 text-white rounded-full hover:bg-red-600 hover:text-white duration-300'
                    onClick={deleteApplication}>
                    Delete
                  </button>
                </div>
              </form>
            </Modal>

          </div>

    </>
  )
}