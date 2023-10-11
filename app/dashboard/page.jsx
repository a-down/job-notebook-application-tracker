"use client"
import { JobCard, Modal, ApplicationForm } from '@/components'
import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
// import * as Toast from '@radix-ui/react-toast';

export default function Dashboard() {
  const [ currentApplicationsState, setCurrentApplicationsState ] = useState([]) 
  const [ completedApplicationsState, setCompletedApplicationsState ] = useState([]) 
  const { isSignedIn, user, isLoaded } = useUser();
  const [ newApplicationModalState, setNewApplicationModalState ] = useState(true)
  
  useEffect(() => {
    if (user) {
      getApplications()
    }
  }, [isLoaded])

  async function getApplications() {
    const res = await fetch(`/api/applications/user/${user.id}`)
    const data = await res.json()
    createApplicationsArrays(data)
  }

  function createApplicationsArrays(data) {
    let currentApps = []
    let completedApps = []
    data.forEach(app => {
      app.completed ? completedApps.unshift(app) : currentApps.push(app)
    })
    console.log(currentApps, completedApps)
    setCurrentApplicationsState(currentApps)
    setCompletedApplicationsState(completedApps)
  }

  return (
      <main className=" bg-gray-1 min-h-[calc(100vh-96px)] px-16 py-16">
        <div className='flex justify-between items-start'>
          <h2 className="font-display font-semibold text-4xl mb-12">Dashboard</h2>

          <div className='max-w-64'>
            {user && newApplicationModalState && (
              <Modal button={{text: 'New Application', style: 'primary'}}>
                <ApplicationForm 
                  userId={user.id} 
                  getApplications={getApplications} 
                  setNewApplicationModalState={setNewApplicationModalState}/>
              </Modal>
            )}
            
          </div>

        </div>
        

        <div className="grid grid-cols-12 gap-4">

          <div className="grid-cols-2 grid grid-flow-row auto-rows-min gap-4 col-span-10">

            {currentApplicationsState && (
              currentApplicationsState.map(application => (
                <JobCard application={application} getApplications={getApplications} isModal={false} key={application._id}/>
              ))
            )}
  
          </div>

          <aside className="col-span-2 bg-gray-3 rounded drop-shadow-brand h-full p-4">
            <div className='mb-4'>
              <h6 className='text-lg text-gray-7 font-regular mb-2'>
                Current
                <span className='font-thin text-gray-8'> ({ currentApplicationsState.length })</span>
              </h6>

              {currentApplicationsState && (
                currentApplicationsState.map(application => (
                  <Modal button={{text: application.role.role_name, style: 'primary'}} key={`${application._id}-modal`}>
                    <JobCard application={application} getApplications={getApplications} isModal={true}/>
                  </Modal>
                ))
              )}

            </div>
            <div className='mb-4'>
              <h6 className='text-lg text-gray-7 font-regular mb-2'>
                Completed
                <span className='font-thin text-gray-8'> ({ completedApplicationsState.length })</span>
              </h6>

              {completedApplicationsState && (
                completedApplicationsState.map(application => (
                  <Modal button={{text: application.role.role_name, style: 'gray-outline'}} key={`${application._id}-modal`}>
                    <JobCard application={application} getApplications={getApplications} isModal={true}/>
                  </Modal>
                ))
              )}
            </div>
            
          </aside>

        </div>

        

      </main>
  )
}