"use client"
import { BiLogoLinkedinSquare, BiSolidEnvelope, BiSolidPhone, BiSolidTrash } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { toast } from 'sonner';
import { PiTrash, PiTrashFill } from 'react-icons/pi'

export default function IndividualContact({ contact, applicationId, updateCard}) {
  const [ contactVisibility, setContactVisibility ] = useState(true)
  const [ grayTrashState, setGrayTrashState ] = useState(false)

  // async function deleteContact() {
  //   try {
  //     const res = await fetch(`/api/applications/${applicationId}/contact`, {
  //       method: 'DELETE', 
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({contactId: contact._id})
  //     })
  //   } catch (err) {
  //     console.log('Error deleting contact')
  //   }
  // }

  async function deleteContact(e) {
    e.preventDefault()
    setContactVisibility(false)
    try {
      const res = await fetch(`/api/contacts/${contact._id}/${applicationId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      if (data.status === 200) {
        updateCard()
      } else {
        toast.error(data.message, {
          style: {
            backgroundColor: '#F87171',
            color: '#fff'
          }
        })
      }
    } catch (err) {
      toast.error('Error deleting contact', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      })
    }
  
  }

  return (
    <>
    {contactVisibility && (
      <div className="col-span-2 md:col-span-1 w-full min-h-12"
        onMouseEnter={() => setGrayTrashState(true)}
        onMouseLeave={() => setGrayTrashState(false)}>
        <div className='mb-0.5 flex justify-between w-full relative' >
          <h6 className="font-regular w-full mb-0.5">
            {contact.contact_name}
          </h6>

          <div className='flex grow justify-end items-center absolute right-0 bg-white opacity-80 rounded-full'>
            {grayTrashState && (
              <BiSolidTrash className='text-gray-7 hover:text-red-400 flex-shrink-0 text-lg hover:cursor-pointer pr-1'
                onClick={deleteContact} />
            )}
          </div>
        </div>

        {contact.contact_linkedin && (
          <a href={contact.contact_linkedin} target='_blank' className='flex gap-1 items-center mb-px text-gray-7 hover:text-brand-primary duration-300'>
            <BiLogoLinkedinSquare className='text-brand-primary text-md'/>
            <p className='text-xxs overflow-x-clip' style={{textOverflow: 'ellipsis'}}>{contact.contact_linkedin.split('.com')[1]}</p>
          </a>
        )}

        {contact.contact_email && (
          <a href={`mailto: ${contact.contact_email}`} className='flex gap-1 items-center mb-px text-gray-7 hover:text-brand-primary duration-300'>
            <BiSolidEnvelope className='text-brand-primary text-md flex-shrink-0'/>
            <p className='text-xxs overflow-x-clip' style={{textOverflow: 'ellipsis'}}>{contact.contact_email}fhasodfjoiadjsgiasjgoi</p>
          </a>
        )}

        {contact.contact_phone && (
          <a href={`tel: ${contact.contact_phone}`} className='flex gap-1 items-center mb-px text-gray-7 hover:text-brand-primary duration-300'>
            <BiSolidPhone className='text-brand-primary text-md'/>
            <p className='text-xxs overflow-x-clip' style={{textOverflow: 'ellipsis'}}>{contact.contact_phone}</p>
          </a>
        )}
      </div>
    )}
    </>
  )
}