"use client"
import JobCardDropdown from './JobCardDropdown'
import { useEffect, useState } from 'react'
import { PiCaretDoubleDown } from 'react-icons/pi'
import { Modal } from '@/components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function JobCard({ application, isModal }) {
  const [ percentage, setPercentage ] = useState(0)
  const [ dropdownState, setDropdownState ] = useState(false)
  const [ cardBottomMargin, setCardBottomMargin ] = useState('')
  const [ wrapperShadow, setWrapperShadow ] = useState('')
  const [ wrapperHeight, setWrapperHeight ] = useState('')
  const [ rowSpan, setRowSpan ] = useState('row-span-1')
  const [ arrowRotation, setArrowRotation ] = useState('0')

  useEffect(() => {
    setProgressPercentage()
    if (isModal) {
      setDropdownState(true)
      setCardBottomMargin('mb-[6px]')
      setWrapperShadow('drop-shadow-brand')
      setWrapperHeight('fit-content')
      setRowSpan('row-span-4')
      setArrowRotation('180')
    }
  })

  function setProgressPercentage() {
    let numberCompleted = 0
    application.to_do.forEach(toDo => {
      if(toDo.completed) numberCompleted++
    })
    setPercentage(Math.round((numberCompleted / application.to_do.length) * 100))
  }

  function toggleDropdownState() {
    dropdownState === true ? setDropdownState(false) : setDropdownState(true)
    cardBottomMargin ? setCardBottomMargin('') : setCardBottomMargin('mb-[6px]')
    wrapperShadow ? setWrapperShadow('') : setWrapperShadow('drop-shadow-brand')
    wrapperHeight === '172px' ? setWrapperHeight('fit-content') : setWrapperHeight('172px')
    rowSpan === 'row-span-1' ? setRowSpan('row-span-4') : setRowSpan('row-span-1')
    arrowRotation === '0' ? setArrowRotation('180') : setArrowRotation('0')
  }

  return (
    <>
      <div className={`rounded-md bg-gray-3 ${wrapperShadow} ${rowSpan}`} style={{height: 'fit-content', maxWidth: '80vw'}}>
        <div className={`relative bg-white p-4 rounded-md flex justify-between col-span-1 drop-shadow-brand job-card-upper ${cardBottomMargin}`}>
          <div className="justify-between">

            <div className="flex flex-col gap-1 mb-4">
              <h4 className="text-2xl font-regular">Frontend Developer</h4>
              <h5 className=" font-regular ">Google</h5>
              <a href="https://google.com" target="_blank" className=' w-fit text-sm text-gray-7 hover:text-brand-primary hover:underline duration-200'>Application</a>

              {!isModal && (
                <Modal button={{text: 'Job Description', style: 'gray-small'}}>
                  <p className='leading-normal '>
                    {application.role.job_description}
                  </p>
                </Modal>
              )}
              

            </div>

            <div className="flex flex-col gap-1">
              <p className='text-sm text-gray-7'>
                Next step:
                <span className='text-gray-9'>
                  {` ${'Write Cover Letter'}`}
                </span>
              </p>

              <p className='text-sm text-gray-7'>
                Due:
                <span className='text-gray-9'>
                  {` ${application.role.due_date}`}
                </span>
              </p>
            </div>
          </div>

          <div className='w-[154px] font-body'>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "transparent",
                textColor: "var(--brand-primary)",
                pathColor: "var(--brand-primary)",
                trailColor: "transparent",
                textSize: '16px'
            })}/>
          </div>

          {!isModal && (
            <PiCaretDoubleDown className='cursor-pointer absolute bottom-0 left-[50%] text-xl text-brand-primary hover:text-gray-8 duration-300' style={{transform: `translate(-50%, 0) rotate(${arrowRotation}deg)`}} onClick={toggleDropdownState}/>
          )}
          
        </div>  
        

        {dropdownState && (
          <JobCardDropdown application={application} setProgressPercentage={setProgressPercentage}/>
        )}

      </div>

      {isModal && (
        <div className='bg-white my-4 mt-8 p-4 rounded-md drop-shadow-brand'>
          <h6 className="text-lg font-regular mb-3">Job Description</h6>

          <p className='leading-normal text-sm'>
            {application.role.job_description}
          </p>
        </div>

      )}
    </>
    
  )
}