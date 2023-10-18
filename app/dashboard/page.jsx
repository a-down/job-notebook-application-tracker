"use client"
import { JobCard, Modal, ApplicationForm, Header, AsideWrapper } from '@/components'
import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
// import * as Toast from '@radix-ui/react-toast';

export default function Dashboard() {
  const [ currentApplicationsState, setCurrentApplicationsState ] = useState([]) 
  const [ completedApplicationsState, setCompletedApplicationsState ] = useState([]) 
  const { isSignedIn, user, isLoaded } = useUser();
  const [ newApplicationModalState, setNewApplicationModalState ] = useState(true)
  const [ loadingState, setLoadingState ] = useState(true)
  
  useEffect(() => {
    if (user) {
      getApplications()
    }
  }, [isLoaded])

  async function getApplications() {
    const res = await fetch(`/api/applications/user/${user.id}`)
    const data = await res.json()
    createApplicationsArrays(data)
    setNewApplicationModalState(true)
  }

  function createApplicationsArrays(data) {
    let currentApps = []
    let completedApps = []
    data.forEach(app => {
      app.completed ? completedApps.unshift(app) : currentApps.push(app)
    })
    setCurrentApplicationsState(currentApps)
    setCompletedApplicationsState(completedApps)
    setLoadingState(false)
  }

  return (
    <>
      <Header isDark={false} activePage={'dashboard'}/>

      <main className=" bg-gray-1 min-h-[calc(100vh-96px)] px-4 md:px-8 lg:px-16 2xl:px-32 p-8 md:py-16">
        <div className='flex justify-between items-center gap-4 mb-6 md:mb-12'>
          <h2 className="font-display font-semibold text-4xl">Dashboard</h2>

          <div className='max-w-64 hidden md:block'>
            {user && newApplicationModalState && (
              <>
                <Modal button={{text: 'New Application', style: 'primary'}}>
                  <ApplicationForm 
                    userId={user.id} 
                    getApplications={getApplications} 
                    setNewApplicationModalState={setNewApplicationModalState}/>
                </Modal>
              </>
            )}
          </div>

          <div className='max-w-64 md:hidden'>
            {user && newApplicationModalState && (
              <>
                <Modal button={{text: 'New', style: 'primary'}}>
                  <ApplicationForm 
                    userId={user.id} 
                    getApplications={getApplications} 
                    setNewApplicationModalState={setNewApplicationModalState}/>
                </Modal>
              </>
            )}
          </div>
        </div>
        

        <div className=" grid grid-cols-12 gap-4">

          <div className="grid-cols-2 grid grid-flow-row auto-rows-min gap-4 col-span-12 md:col-span-9 xl:col-span-10">

            {currentApplicationsState && (
              currentApplicationsState.map(application => (
                <JobCard application={application} getApplications={getApplications} isModal={false} key={application._id}/>
              ))
            )}

            {currentApplicationsState.length === 0 && !loadingState && (
              <>
                <div className='hidden md:block bg-white drop-shadow-brand rounded-md col-span-2 px-6 py-8'>
                  <h3 className='text-xl text-gray-800 leading-loose'>{`Use the `}
                    <span className=' cursor-pointer text-white text-sm leading-tight bg-brand-primary w-full px-4 py-[12px] rounded-md border border-brand-primary mb-1'>New Application</span> 
                  {` button to add an application to your notebook!`}</h3>
                </div>
                <div className='md:hidden bg-white drop-shadow-brand rounded-md col-span-2 px-6 py-8'>
                  <h3 className='text-xl text-gray-800 leading-loose'>{`Use the `}
                    <span className=' cursor-pointer text-white text-sm leading-tight bg-brand-primary w-full px-4 py-[12px] rounded-md border border-brand-primary mb-1'>New</span>
                  {` button to add an application to your notebook!`}</h3>
                </div>
              </>
              
            )}

            {loadingState && (
              <>
                <div className='flex justify-between col-span-2 lg:col-span-1 bg-white rounded-md drop-shadow-brand h-[180px] p-4'>
                  <div className=' h-full animate-pulse flex flex-col gap-1 w-full job-card-upper mb-6'>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[20px] w-1/2'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-1/4'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-1/6'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-1/4 mt-12'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-2/12'></div>
                  </div>
                  <div className='bg-gray-5 rounded-full animate-pulse h-full aspect-square'></div>
                </div>
                <div className='flex justify-between col-span-2 lg:col-span-1 bg-white rounded-md drop-shadow-brand h-[180px] p-4'>
                  <div className=' h-full animate-pulse flex flex-col gap-1 w-full job-card-upper mb-6'>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[20px] w-1/2'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-1/4'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-1/6'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-1/4 mt-12'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-2/12'></div>
                  </div>
                  <div className='bg-gray-5 rounded-full animate-pulse h-full aspect-square'></div>
                </div>
                <div className='flex justify-between col-span-2 lg:col-span-1 bg-white rounded-md drop-shadow-brand h-[180px] p-4'>
                  <div className=' h-full animate-pulse flex flex-col gap-1 w-full job-card-upper mb-6'>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[20px] w-1/2'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-1/4'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-1/6'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-1/4 mt-12'></div>
                    <div className='bg-gray-5 rounded-sm animate-pulse h-[16px] w-2/12'></div>
                  </div>
                  <div className='bg-gray-5 rounded-full animate-pulse h-full aspect-square'></div>
                </div>
              </>
            )}

          </div>
          
          <aside className="mt-4 md:mt-0 col-span-12 md:col-span-3 xl:col-span-2 bg-gray-2 rounded drop-shadow-brand h-full md:min-h-[calc(100vh-320px)] p-4">
            <div className='mb-4'>
              <h6 className='text-lg text-gray-7 font-regular mb-2'>
                Current
                <span className='font-thin text-gray-8'> ({ currentApplicationsState.length })</span>
              </h6>

              <div className='grid grid-cols-2 gap-4 md:block'>
                {currentApplicationsState && (
                  currentApplicationsState.map(application => (
                    <AsideWrapper button={{text: application.role.role_name, style: 'primary'}} key={`${application._id}-modal`} application={application} getApplications={getApplications}/>
                  ))
                )}
              </div>

              {loadingState && (
                <>
                  <div className='grid grid-cols-2 gap-4 md:block'>
                    <div className='bg-gray-5 rounded-md h-11 w-full animate-pulse mb-1 md:col-span-2'></div>
                    <div className='bg-gray-5 rounded-md h-11 w-full animate-pulse mb-1 md:col-span-2'></div>
                    <div className='bg-gray-5 rounded-md h-11 w-full animate-pulse mb-1 md:col-span-2'></div>
                  </div>
                </>
              )}

            </div>
            <div className='mb-4'>
              <h6 className='text-lg text-gray-7 font-regular mb-2'>
                Completed
                <span className='font-thin text-gray-8'> ({ completedApplicationsState.length })</span>
              </h6>

              <div className='grid grid-cols-2 gap-4 md:block'>
                {completedApplicationsState && (
                  completedApplicationsState.map(application => (
                    <AsideWrapper button={{text: application.role.role_name, style: 'gray-outline'}} key={`${application._id}-modal`} application={application} getApplications={getApplications}/>
                  ))
                )}
              </div>

              {loadingState && (
                <>
                  <div className='grid grid-cols-2 gap-4 md:block'>
                    <div className='bg-gray-5 rounded-md h-11 w-full animate-pulse mb-1 md:col-span-2'></div>
                    <div className='bg-gray-5 rounded-md h-11 w-full animate-pulse mb-1 md:col-span-2'></div>
                    <div className='bg-gray-5 rounded-md h-11 w-full animate-pulse mb-1 md:col-span-2'></div>
                  </div>
                </>
              )}

            </div>
            
          </aside>

        </div>
      </main>
    </>
  )
}