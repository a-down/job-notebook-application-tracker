"use client"
import JobCardDropdown from './JobCardDropdown'
import { useEffect, useState } from 'react'
import { PiCaretDoubleDown } from 'react-icons/pi'
import { BiLogoLinkedinSquare, BiLink } from 'react-icons/bi'
import { Modal } from '@/components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function JobCard({ application, isModal, getApplications, setAsideModalState, asideModalState }) {
  const [ cardVisibility, setCardVisibility ] = useState(true)
  const [ percentage, setPercentage ] = useState(0)
  const [ dropdownState, setDropdownState ] = useState(false)
  const [ cardBottomMargin, setCardBottomMargin ] = useState('')
  const [ wrapperShadow, setWrapperShadow ] = useState('')
  const [ wrapperHeight, setWrapperHeight ] = useState('')
  const [ rowSpan, setRowSpan ] = useState('row-span-1')
  const [ arrowRotation, setArrowRotation ] = useState('0')
  const [ applicationState, setApplicationState ] = useState(application)
  const [ nextStep, setNextStep ] = useState('')

  function updateNextStep() {
    let nextUncompletedStep 
    for (let i = 0; i < applicationState.to_do.length; i++) {
      if (!applicationState.to_do[i].completed) {
        nextUncompletedStep = applicationState.to_do[i].description
        break
      }
    }

    console.log(nextUncompletedStep)
    setNextStep(nextUncompletedStep)
  }

  useEffect(() => {
    setProgressPercentage()
    updateNextStep()
    if (isModal) {
      // updateCard()
      setDropdownState(true)
      setCardBottomMargin('mb-[6px]')
      setWrapperShadow('drop-shadow-brand')
      setWrapperHeight('fit-content')
      setRowSpan('row-span-4')
      setArrowRotation('180')
    }
  }, [applicationState])

  async function updateCard() {
    const res = await fetch(`/api/applications/${applicationState._id}`)
    const data = await res.json()
    setApplicationState(data)
    setProgressPercentage()
    updateNextStep()
  }

  function setProgressPercentage() {
    if (applicationState.to_do?.length === 0) {
      setPercentage(0)
    } else {
      let numberCompleted = 0
      applicationState.to_do.forEach(toDo => {
        if(toDo.completed) numberCompleted++
      })
      setPercentage(Math.round((numberCompleted / applicationState.to_do.length) * 100))
    }
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
      {cardVisibility && applicationState && (
        <>
          <div className={`rounded-md bg-gray-3 ${wrapperShadow} ${rowSpan}`} style={{height: 'fit-content', maxWidth: '80vw'}}>
            <div className={`relative bg-white p-4 rounded-md flex justify-between col-span-1 drop-shadow-brand job-card-upper ${cardBottomMargin}`}>
              <div className="justify-between flex flex-col">

                <div className="flex flex-col gap-1 mb-4">
                  <h4 className="text-2xl font-regular">{applicationState.role.role_name}</h4>

                  <div className='flex gap-0.5'>
                    <h5 className=" font-regular ">{applicationState.role.company.company_name}</h5>
                    <a href={applicationState.role.company.company_linkedin} target="_blank">
                      <BiLogoLinkedinSquare className="text-brand-primary hover:text-gray-7 duration-300 cursor-pointer"/>
                    </a>
                    <a href={applicationState.role.company.company_website} target="_blank">
                      <BiLink className="text-brand-primary hover:text-gray-7 duration-300 cursor-pointer"/>
                    </a>
                  </div>

                  <a href={applicationState.role.application_link} target="_blank" className=' w-fit text-sm text-gray-7 hover:text-brand-primary hover:underline duration-200'>Application</a>

                  {!isModal && (
                    <Modal button={{text: 'Job Description', style: 'gray-small'}}>
                      <p className='leading-normal bg-white p-4 rounded-md drop-shadow-brand'>
                        {applicationState.role.job_description}
                      </p>
                    </Modal>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <p className='text-sm text-gray-7'>
                    Next step:
                    <span className='text-gray-9'>
                      {` ${nextStep}`}
                    </span>
                  </p>

                  <p className='text-sm text-gray-7'>
                    Due:
                    <span className='text-gray-9'>
                      {` ${applicationState.role.due_date}`}
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
            

            {dropdownState && applicationState && (
              <JobCardDropdown 
                application={applicationState} 
                setProgressPercentage={setProgressPercentage} 
                updateCard={updateCard}
                getApplications={getApplications}
                setCardVisibility={setCardVisibility}
                isModal={isModal}
                setAsideModalState={setAsideModalState}
                asideModalState={asideModalState}
                />
            )}

          </div>

          {isModal && (
            <div className='bg-white my-4 mt-8 p-4 rounded-md drop-shadow-brand'>
              <h6 className="text-lg font-regular mb-3">Job Description</h6>

              <p className='leading-normal text-sm'>
                {applicationState.role.job_description}
              </p>
            </div>

          )}
        </>
      )}
    </>
    
  )
}