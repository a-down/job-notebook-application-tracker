"use client"
import JobCardDropdown from './JobCardDropdown'
import { useEffect, useState } from 'react'
import { PiCaretDoubleDown } from 'react-icons/pi'
import { BiLogoLinkedinSquare, BiLinkExternal } from 'react-icons/bi'
import { Modal } from '@/components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { toast } from 'sonner';

export default function JobCard({ application, isModal, getApplications, setAsideModalState, asideModalState }) {
  const defaultDropdown = {
    dropdown: false,
    cardBottomMargin: '',
    wrapperShadow: '', 
    wrapperHeight: '',
    rowSpan: 'row-span-1',
    arrowRotation: '0'
  }
  const modalDropdown = {
    dropdown: true,
    cardBottomMargin: 'mb-[6px]',
    wrapperShadow: 'drop-shadow-brand',
    wrapperHeight: 'fit-content',
    rowSpan: 'row-span-4',
    arrowRotation: '180'
  }

  const [ cardVisibility, setCardVisibility ] = useState(true)
  const [ percentage, setPercentage ] = useState(0)
  const [ dropdownState, setDropdownState ] = useState(defaultDropdown)
  const [ applicationState, setApplicationState ] = useState(application)
  const [ nextStep, setNextStep ] = useState('')

  // useEffect for modal
  useEffect(() => {
    setProgressPercentage()
    updateNextStep()
    if (isModal) {
      setDropdownState(modalDropdown)
    }
  }, [applicationState])

  // update job card when the application is updated throught the dropdown
  async function updateCard() {
    try {
      const res = await fetch(`/api/applications/${applicationState._id}`)
      const data = await res.json()
      console.log(data)

      if (res.status === 200) {
        setApplicationState(data.application)
        setProgressPercentage()
        updateNextStep()
      } else {
        toast.error(data.message, {
          style: {
            backgroundColor: '#F87171',
            color: '#fff'
          }
        })
      }
    
    } catch { 
      toast.error('Error updating job card', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      })
    }
  }

  // set the progress percentage for the progress graph
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

  // set the next step as the next uncompleted to do item
  function updateNextStep() {
    let nextUncompletedStep 
    for (let i = 0; i < applicationState.to_do.length; i++) {
      if (!applicationState.to_do[i].completed) {
        nextUncompletedStep = applicationState.to_do[i].description
        break
      }
    }
    setNextStep(nextUncompletedStep)
  }

  // toggle dropdown menu
  // if the dropdown is false (hidden), set it to modal (true, visible)
  function toggleDropdownState() {
    !dropdownState.dropdown ? setDropdownState(modalDropdown) : setDropdownState(defaultDropdown)
  }

  return (
    <>
      {cardVisibility && applicationState && (
        <>
          <div className={`${isModal ? 'w-[96vw] max-w-[600px]' : ''} col-span-2 xl:col-span-1 rounded-md bg-gray-3 ${dropdownState.wrapperShadow} ${dropdownState.rowSpan}`} style={{height: 'fit-content'}}>

            {/* job card upper */}
            <div className={`relative bg-white p-4 rounded-md flex justify-between col-span-1 drop-shadow-brand job-card-upper ${dropdownState.cardBottomMargin}`}>
              <div className="justify-between flex flex-col">
                <div className="flex flex-col gap-1 mb-4">
                  <h4 className="text-2xl font-regular">{applicationState.role.role_name}</h4>

                  <div className='flex gap-0.5'>
                    <h5 className=" font-regular ">{applicationState.role.company.company_name}</h5>
                    {applicationState.role.company.company_linkedin && (
                      <a href={applicationState.role.company.company_linkedin} target="_blank">
                        <BiLogoLinkedinSquare className="text-brand-primary hover:text-gray-7 duration-300 cursor-pointer"/>
                      </a>
                    )}
                    {applicationState.role.company.company_website && (
                      <a href={applicationState.role.company.company_website} target="_blank">
                        <BiLinkExternal className="text-brand-primary hover:text-gray-7 duration-300 cursor-pointer"/>
                      </a>
                    )}
                  </div>

                  <a href={applicationState.role.application_link} target="_blank" className=' w-fit text-sm text-gray-7 hover:text-brand-primary hover:underline duration-200'>{ applicationState.role.application_link ? 'Application' : ''}</a>

                  {!isModal && applicationState.role.job_description && (
                    <Modal button={{text: 'Job Description', style: 'gray-small'}}>
                      <textarea readonly className='job-description w-[96vw] h-[80vh] max-w-[600px] leading-normal bg-white p-4 rounded-md drop-shadow-brand'>
                        {applicationState.role.job_description}
                      </textarea>
                    </Modal>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <p className='text-sm text-gray-7 text-ellipsis'>
                    Next step:
                    <span className='text-gray-9'>
                      {` ${nextStep || ''}`}
                    </span>
                  </p>

                  <p className='text-sm text-gray-7'>
                    Due:
                    <span className='text-gray-9'>
                      {` ${applicationState.role.due_date || ''}`}
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

              {/* toggle dropdown, not visible on modal */}
              {!isModal && (
                <PiCaretDoubleDown className='cursor-pointer absolute bottom-0 left-[50%] text-xl text-brand-primary hover:text-gray-8 duration-300' style={{transform: `translate(-50%, 0) rotate(${dropdownState.arrowRotation}deg)`}} onClick={toggleDropdownState}/>
              )}
            </div>  

            {dropdownState.dropdown && applicationState && (
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

          {/* if it is a modal, display the job description below the job card */}
          {isModal && applicationState.role.job_description && (
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