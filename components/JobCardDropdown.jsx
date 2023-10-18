"use client"
import { useState, useEffect } from 'react'
import { Contacts, Files, Notes, ToDo, Modal, ApplicationForm } from '@/components'
import * as Dialog from '@radix-ui/react-dialog';
import { toast } from 'sonner';


export default function JobCardDropdown({ application, setProgressPercentage, updateCard, getApplications, setCardVisibility, isModal, setAsideModalState, asideModalState }) {
  const [ updateModalState, setUpdateModalState ] = useState(true)

  // the update modal (form) is set to false when the application is updated
  // when the application is updated, the update modal button is set to visible again
  useEffect(() => {
    setUpdateModalState(true)
  }, [application])

  async function deleteApplication() {
    setCardVisibility(false)
    if(asideModalState) setAsideModalState(false)
    try {
      const res = await fetch(`/api/applications/${application._id}`, {
        method: 'DELETE'
      })
      const data = await res.json()

      if (res.status === 200) {
        getApplications()
      } else {
        toast.error(data.message, {
          style: {
            backgroundColor: '#F87171',
            color: '#fff'
          }
        })
        }

    } catch {
      toast.error('Error deleting application', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      })
    }
  }

  async function toggleApplicationCompleted(isCompleted) {
    // if it is not a modal application, set the card visibility to false
    // if the application is in a modal, the modal will be deleted, so we don't need to set the card visibility
    if (!isModal) setCardVisibility(false)
    try {
      const res = await fetch(`/api/applications/${application._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({completed: isCompleted})
      })
      const data = await res.json()

      if (res.status === 200) {
        getApplications()
      } else {
        toast.error(data.message, {
          style: {
            backgroundColor: '#F87171',
            color: '#fff'
          }
        })
      }

    } catch {
      toast.error('Error updating application', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      })
    }
  }

  // style shared by all sections
  const sharedStyle = 'bg-white p-4 rounded-md drop-shadow-brand'

  return (
    <>
      {/* section with information */}
      <div className=" px-4 pt-[14px] pb-5 min-h-20 w-full rounded-b-md grid grid-cols-5 auto-rows-min gap-4 dropdown">
        <ToDo sharedStyle={sharedStyle} toDo={application.to_do} setProgressPercentage={setProgressPercentage} updateCard={updateCard} applicationId={application._id}/>
        <Contacts sharedStyle={sharedStyle} contacts={application.contacts} updateCard={updateCard} applicationId={application._id}/>
        <Files sharedStyle={sharedStyle} files={application.files} updateCard={updateCard} applicationId={application._id}/>
        <Notes sharedStyle={sharedStyle} notes={application.notes} updateCard={updateCard} applicationId={application._id}/>
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
          
          <div className='hidden sm:inline'>
            {updateModalState && (
              <Modal button={{text: 'Edit Application', style: 'edit'}}>
                <ApplicationForm isEdit={true} application={application} userId={application.user_id} setUpdateModalState={setUpdateModalState} updateCard={updateCard}/>
              </Modal>
            )}
          </div>

          <div className='inline sm:hidden'>
            {updateModalState && (
              <Modal button={{text: 'Edit', style: 'edit'}}>
                <ApplicationForm isEdit={true} application={application} userId={application.user_id} setUpdateModalState={setUpdateModalState} updateCard={updateCard}/>
              </Modal>
            )}  
          </div>
          
        </div>

        <Modal button={{text: 'Delete', style: 'danger'}}>
          <div className="flex flex-col items-center gap-4 w-[80vw] max-w-[600px] bg-white py-12 px-20 rounded-lg border drop-shadow-brand"> 
            <p className='text-xl'>Are you sure you want to delete this application?</p>
            <div className='flex gap-4 w-full justify-between'>
              <Dialog.Close className='grow'>
                <button className=' p-4 w-full bg-gray-400 border text-white rounded-full hover:opacity-80 duration-300'>
                  Cancel
                </button>
              </Dialog.Close>
              <Dialog.Close className='grow'>
                <button 
                  className=' p-4 w-full grow bg-transparent border text-white rounded-full hover:opacity-60 duration-200'
                  style={{backgroundColor: '#f87171', borderColor: '#f87171'}}
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