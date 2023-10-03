"use client"
import Link from 'next/link'
import JobCardDropdown from './JobCardDropdown'
import { useEffect, useState } from 'react'


export default function JobCard({ project }) {
  const [ dropdownState, setDropdownState ] = useState(false)
  const [ cardBottomMargin, setCardBottomMargin ] = useState('')
  const [ wrapperShadow, setWrapperShadow ] = useState('')
  const [ wrapperHeight, setWrapperHeight ] = useState('')

  function toggleDropdownState() {
    dropdownState ? setDropdownState(false) : setDropdownState(true)
    cardBottomMargin ? setCardBottomMargin('') : setCardBottomMargin('mb-[6px]')
    wrapperShadow ? setWrapperShadow('') : setWrapperShadow('drop-shadow-brand')
    wrapperHeight === '172px' ? setWrapperHeight('fit-content') : setWrapperHeight('172px')
  }

  return (
    <div className={`rounded-md bg-gray-3 ${wrapperShadow}`} style={{height: 'fit-content'}}>
      <div className={`bg-white p-4 rounded-md flex justify-between col-span-1 cursor-pointer drop-shadow-brand job-card-upper ${cardBottomMargin}`} onClick={toggleDropdownState}>
        <div className="justify-between">

          <div className="flex flex-col gap-1 mb-4">
            <h4 className="text-2xl font-regular">Frontend Developer</h4>
            <h5 className=" font-regular ">Google</h5>
            <Link href="https://google.com" target="_blank" className='text-sm text-brand-primary underline hover:opacity-80 duration-200'>Application Link</Link>
            <button className='text-xs text-gray-7 w-fit px-2 py-1 rounded-md  border-2 border-gray-4 hover:bg-brand-primary hover:border-brand-primary hover:text-white duration-300 active:border-gray-9'>Job Description</button>
          </div>

          <div className="flex flex-col gap-1">
            <p className='text-sm text-gray-7 mb-1'>
              Next step:
              <span className='text-gray-9'>
                {` ${'Write Cover Letter'}`}
              </span>
            </p>

            <p className='text-sm text-gray-7'>
              Due:
              <span className='text-gray-9'>
                {` ${'Friday, October 7'}`}
              </span>
            </p>
          </div>
        </div>

        <div className="h-[136px] aspect-square bg-brand-primary rounded-full flex justify-center items-center">
          <div className="w-16 aspect-square bg-white rounded-full"></div>
        </div>
      </div>  
      

      {dropdownState && (
        <JobCardDropdown project={project}/>
      )}
      

    </div>
    
  )
}