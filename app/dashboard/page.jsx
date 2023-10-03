"use client"

import JobCard from '@/components/JobCard'
import { useEffect, useState } from 'react'
import projects from '@/mockProjects'

export default function Dashboard() {
  console.log(projects)

  // useEffect(() => {
  //   async () => {
  //     const res = await fetch('@/mockProjects')
  //     const data = await res.json()
  //     await console.log(data)
  //   }
  // }, [])

  return (
    <main className="bg-gray-1 min-h-[calc(100vh-96px)] px-16 py-16">
      <h2 className="font-display font-semibold text-4xl mb-12">Dashboard</h2>

      <div className="grid grid-cols-12 gap-4">

        <div className="grid-cols-2 grid grid-flow-row auto-rows-min gap-4 col-span-10">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
 
        </div>

        <aside className="col-span-2 bg-gray-2 rounded drop-shadow-brand h-full">

        </aside>

      </div>

      

    </main>
  )
}