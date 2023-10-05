"use client"
import JobCard from '@/components/JobCard'
import { useEffect, useState } from 'react'
import { UserButton, auth, useUser } from '@clerk/nextjs'
import applications from '@/mockProjects'

export default function Dashboard() {
  const [ applicationsState, setApplicationsState ] = useState([])
  const { isSignedIn, user, isLoaded } = useUser();
  
  useEffect(() => {
    if (user) {
      console.log(user)
      getApplications()
    }
  }, [isLoaded])

  async function getApplications() {
    const res = await fetch(`/api/applications/user/${user.id}`)
    const data = await res.json()
    await setApplicationsState(data)
  }

  // const { userId } = auth()
  // const router = useRouter()
  // const [ projectDropdownState, setProjectDropdownState ] = useState([])

  // useEffect(() => {
  //   console.log(projectDropdownState)
  // }, [])
  
  
  // useEffect(() => {
  //   let arr = []
  //   projects.forEach(project => {
  //     arr.push({project: project, displayedDropdown: true})
  //   })
  //   setProjectDropdownState(arr)
  // }, [])

  // function setAllDropdownFalse() {
  //   let arrClone = projectDropdownState
  //   arrClone.forEach(project => {
  //     project["displayedDropdown"] = false
  //   })
  //   console.log(arrClone)
  //   setProjectDropdownState(arrClone)
  // }
  // console.log(projectDropdownState)

  // useEffect(() => {
  //   let applications = async () => {
  //     const res = await fetch(`/api/applications/user/${userId}`)
  //     const data = await res.json()
  //     await console.log(data)
  //   }
  // }, [userId])


  return (
      <main className="bg-gray-1 min-h-[calc(100vh-96px)] px-16 py-16">
        <h2 className="font-display font-semibold text-4xl mb-12">Dashboard</h2>

        <div className="grid grid-cols-12 gap-4">

          <div className="grid-cols-2 grid grid-flow-row auto-rows-min gap-4 col-span-10">

            {applicationsState && (
              applicationsState.map((application) => (
                <JobCard application={application} key={application._id}/>
              ))
            )}
  
          </div>

          <aside className="col-span-2 bg-gray-3 rounded drop-shadow-brand h-full p-4">
            <div className='mb-4'>
              <h6 className='text-lg text-gray-7 font-regular mb-2'>
                Current
                <span className='font-thin text-gray-8'> (7)</span>
              </h6>

              <button className=' text-white bg-brand-primary w-full px-4 py-2 rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1'>Job Title</button>
              <button className=' text-white bg-brand-primary w-full px-4 py-2 rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1'>Job Title</button>
              <button className=' text-white bg-brand-primary w-full px-4 py-2 rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1'>Job Title</button>
              <button className=' text-white bg-brand-primary w-full px-4 py-2 rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1'>Job Title</button>
              <button className=' text-white bg-brand-primary w-full px-4 py-2 rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1'>Job Title</button>
              <button className=' text-white bg-brand-primary w-full px-4 py-2 rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1'>Job Title</button>
              <button className=' text-white bg-brand-primary w-full px-4 py-2 rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1'>Job Title</button>


            </div>
            <div className='mb-4'>
              <h6 className='text-lg text-gray-7 font-regular mb-2'>
                Completed
                <span className='font-thin text-gray-8'> (3)</span>
              </h6>

              <button className=' text-gray-7 w-full px-4 py-2 rounded-md  border border-gray-7 hover:bg-brand-primary hover:border-brand-primary hover:text-white duration-300 active:border-gray-9 mb-1'>Job Title</button>
              <button className=' text-gray-7 w-full px-4 py-2 rounded-md  border border-gray-7 hover:bg-brand-primary hover:border-brand-primary hover:text-white duration-300 active:border-gray-9 mb-1'>Job Title</button>
              <button className=' text-gray-7 w-full px-4 py-2 rounded-md  border border-gray-7 hover:bg-brand-primary hover:border-brand-primary hover:text-white duration-300 active:border-gray-9 mb-1'>Job Title</button>
            </div>
            
          </aside>

        </div>

        

      </main>
  )
}