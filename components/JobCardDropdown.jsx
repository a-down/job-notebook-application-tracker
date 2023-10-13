"use client"
import { useState } from 'react'
import { Contacts, Files, Notes, ToDo, Modal } from '@/components'
import * as Dialog from '@radix-ui/react-dialog';


export default function JobCardDropdown({ application, setProgressPercentage, updateCard, getApplications, setCardVisibility, isModal }) {

  // if(application) console.log('here it is', application)
  // if(!application) console.log('no application')
  // console.log(application)

  async function deleteApplication() {
    setCardVisibility(false)
    const res = await fetch(`/api/applications/${application._id}`, {
      method: 'DELETE'
    })
    const data = await res.json()
    getApplications()
  }

  async function toggleApplicationCompleted(isCompleted) {
    // if it is not a modal application, set the card visibility to false
    // if the application is in a modal, the modal will be deleted, so we don't need to set the card visibility
    if (!isModal) setCardVisibility(false)
    await fetch(`/api/applications/${application._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({completed: isCompleted})
    })
    await getApplications()
  }

  const sharedStyle = 'bg-white p-4 rounded-md drop-shadow-brand'

  return (
    <>
      {/* section with information */}
      <div className=" px-4 pt-[14px] pb-5 min-h-20 w-full rounded-b-md grid grid-cols-5 auto-rows-min gap-4 dropdown">
        <ToDo sharedStyle={sharedStyle} toDo={application.to_do} setProgressPercentage={setProgressPercentage} updateCard={updateCard}/>
        <Contacts sharedStyle={sharedStyle} contacts={application.contacts}/>
        <Files sharedStyle={sharedStyle} files={application.files}/>
        <Notes sharedStyle={sharedStyle} notes={application.notes}/>
      </div>

      {/* buttons at bottom of dropdown */}
      <div className='px-4 pb-4 flex justify-between'>
        <div>

          {!application.completed ? (
            <button className=' text-xs p-2 px-3 bg-brand-primary border border-brand-primary text-white rounded-full hover:bg-gray-7 hover:border-gray-7 duration-300 mr-2'
              onClick={() => toggleApplicationCompleted(true)}>
              Mark Complete
            </button>
          ) : (
            <button className=' text-xs p-2 px-3 bg-transparent border border-brand-primary text-brand-primary rounded-full hover:bg-brand-primary hover:text-white duration-300 mr-2'
              onClick={() => toggleApplicationCompleted(false)}>
              Mark Not Complete
            </button>
          )}
          
          <button className=' text-xs p-2 px-3 bg-transparent border border-gray-400 text-gray-400 rounded-full hover:bg-gray-400 hover:border-gray-400 hover:text-white duration-300'>
            Edit Application
          </button>
        </div>

        <Modal button={{text: 'Delete', style: 'danger'}}>
          <div className="flex flex-col items-center gap-4 w-[80vw] max-w-[600px] bg-white py-12 px-20 rounded-lg border drop-shadow-brand"> 
            <p className='text-xl'>Are you sure you want to delete this application?</p>
            <div className='flex gap-4 w-full justify-between'>
              <Dialog.Close className='grow'>
                <button className=' p-4 w-full bg-transparent border border-gray-400 text-gray-400 rounded-full hover:bg-gray-400 hover:border-gray-400 hover:text-white duration-300'>
                  Cancel
                </button>
              </Dialog.Close>
              <Dialog.Close>
                <button 
                  className=' p-4 grow bg-transparent border bg-red-500 text-white rounded-full hover:bg-red-700 duration-300'
                  onClick={deleteApplication}>
                  Delete
                </button>
              </Dialog.Close>
              
            </div>
          </div>
        </Modal>

      </div>
    </>
  )
}