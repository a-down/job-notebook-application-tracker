"use client"
import { Modal, JobCard} from '@/components'
import { useState } from 'react'


export default function AsideWrapper({ button, application, getApplications }) {
  const [ asideModalState, setAsideModalState ] = useState(true)

  return (
    <>
      {asideModalState && (
        <Modal button={button} key={`${application._id}-modal`}>
          <JobCard application={application} getApplications={getApplications} isModal={true} setAsideModalState={setAsideModalState} asideModalState={asideModalState}/>
        </Modal>
      )}
    </>
    
  )
}