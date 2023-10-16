"use client"
import { PiLinkedinLogoBold, PiPhoneBold, PiEnvelopeBold, PiPlusBold } from 'react-icons/pi'
import { useState, useEffect } from 'react'
import { toast } from 'sonner';
import { PiTrash, PiTrashFill } from 'react-icons/pi'

export default function IndividualContact({ contact, applicationId, updateCard}) {
  const [ grayTrashState, setGrayTrashState ] = useState(false)
  const [ redTrashState, setRedTrashState ] = useState(false)

  async function deleteContact() {
    try {
      const res = await fetch(`/api/applications/${applicationId}/contact`, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({contactId: contact._id})
      })
    } catch (err) {
      console.log('Error deleting contact')
    }
  }

  return (
    <>
      <div className="col-span-1 w-full h-16">
        <div className='mb-1 flex justify-between w-full relative'>
          <h6 className="font-regular w-full"
            onMouseEnter={() => setGrayTrashState(true)}
            onMouseLeave={() => setGrayTrashState(false)}>
            {contact.contact_name}
          </h6>

          <div className='flex grow justify-end items-center absolute right-0 bg-white opacity-80 rounded-full'>
            {grayTrashState && !redTrashState && (
              <PiTrash className='text-gray-7 flex-shrink-0 text-lg hover:cursor-pointer pr-1'
                onMouseEnter={() => {
                    setGrayTrashState(false)
                    setRedTrashState(true)
                  }} />
            )}
            {redTrashState && (
              <PiTrashFill className='text-red-400 active:text-red-800 flex-shrink-0 text-lg hover:cursor-pointer pr-1'
                onMouseLeave={() => setRedTrashState(false)}
                onClick={deleteContact} />
            )}
          </div>
        </div>

        {contact.contact_linkedin && (
          <a href={contact.contact_linkedin} target='_blank' className='flex gap-1 items-center pl-0.5 mb-1 text-gray-7 hover:text-brand-primary duration-300'>
            <PiLinkedinLogoBold className='text-brand-primary text-xs'/>
            <p className='text-xxs overflow-x-clip' style={{textOverflow: 'ellipsis'}}>{contact.contact_linkedin.split('.com')[1]}</p>
          </a>
        )}

        {contact.contact_email && (
          <a href={`mailto: ${contact.contact_email}`} className='flex gap-1 items-center pl-0.5 mb-1 text-gray-7 hover:text-brand-primary duration-300'>
            <PiEnvelopeBold className='text-brand-primary text-xs flex-shrink-0'/>
            <p className='text-xxs overflow-x-clip' style={{textOverflow: 'ellipsis'}}>{contact.contact_email}fhasodfjoiadjsgiasjgoi</p>
          </a>
        )}

        {contact.contact_phone && (
          <a href={`tel: ${contact.contact_phone}`} className='flex gap-1 items-center pl-0.5 mb-1 text-gray-7 hover:text-brand-primary duration-300'>
            <PiPhoneBold className='text-brand-primary text-xs'/>
            <p className='text-xxs overflow-x-clip' style={{textOverflow: 'ellipsis'}}>{contact.contact_phone}</p>
          </a>
        )}
      </div>
    </>
  )
}