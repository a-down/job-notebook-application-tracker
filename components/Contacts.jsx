"use client"
import { PiLinkedinLogoBold, PiPhoneBold, PiEnvelopeBold, PiPlusBold } from 'react-icons/pi'
import { useState, useEffect } from 'react'

export default function Contacts({ sharedStyle, contacts, updateCard, applicationId }) {
  const defaultFormData = {contact_name: '', contact_linkedin: '', contact_email: '', contact_phone: ''}
  const [ newContactVisibility, setNewContactVisibility ] = useState(false)
  const [ newContactFormData, setNewContactFormData ] = useState(defaultFormData)
  const [ contactsState, setContactsState ] = useState(contacts)

  useEffect(() => {
    setContactsState(contacts)
  }, [contacts])

  function handleContactFormChange(e) {
    setNewContactFormData({...newContactFormData, [e.target.name]: e.target.value})
  }

  async function createNewContact(e) {
    e.preventDefault()
    setNewContactVisibility(false)
    setContactsState([...contactsState, newContactFormData])
    try {
      const res = await fetch(`/api/applications/${applicationId}/contact`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContactFormData)
      })
      const data = await res.json()
      if (data.status === 200) {
        setNewContactFormData(defaultFormData)
        updateCard()
      } else {
        console.log(data.message)
      }
    } catch (err) {
      console.log('Error creating new contact')
    }
  
  }

  return (
    <div className={` ${sharedStyle} col-span-3 max-h-[200px] relative`}>
      <h6 className="text-lg font-regular col-span-2 mb-1">Contacts</h6>

      {newContactVisibility && (
        <form className="col-span-2 w-full mt-3 mb-1">
          <input className="font-regular mb-1 p-1 border border-gray-5 rounded-sm w-full" 
            placeholder='New Contact Name'
            name='contact_name'
            value={newContactFormData.contact_name}
            onChange={handleContactFormChange}/>

          <div className='flex gap-1 items-center pl-0.5 mb-1 text-gray-7'>
            <PiLinkedinLogoBold className='text-brand-primary text-xxs ml-px'/>
            <input className=' text-xxs p-1 border border-gray-5 rounded-sm w-full' 
              placeholder='LinkedIn'
              type='url'
              pattern="https://.*"
              name='contact_linkedin'
              value={newContactFormData.contact_linkedin}
              onChange={handleContactFormChange}/>
          </div>

          <div className='flex gap-1 items-center pl-0.5 mb-1 text-gray-7 '>
            <PiEnvelopeBold className='text-brand-primary text-xs'/>
            <input className='text-xxs p-1 border border-gray-5 rounded-sm w-full' 
              placeholder='Email'
              type='email'
              name='contact_email'
              value={newContactFormData.contact_email}
              onChange={handleContactFormChange}/>
          </div>

          <div className='flex gap-1 items-center pl-0.5 mb-1 text-gray-7 '>
            <PiPhoneBold className='text-brand-primary text-xs'/>
            <input className='text-xxs p-1 border border-gray-5 rounded-sm w-full' 
              placeholder='Phone'
              type='tel'
              name='contact_phone'
              value={newContactFormData.contact_phone}
              onChange={handleContactFormChange}/>
          </div>

          <div className='w-full flex flex-col mt-1'>
            <button className='w-full bg-brand-soft hover:bg-brand-primary duration-300 rounded-md text-white text-xs py-2 px-2 mx-auto'
              onClick={createNewContact}>
              Add contact
            </button>
          </div>

        </form>
      )}

      {!newContactVisibility && contactsState && (

        <div className=' h-[calc(100%-24px)] mt-3 contact-wrapper grid grid-cols-2 gap-x-1 gap-y-2 overflow-y-scroll pb-1'>
          {contactsState.map((contact, index) => (
  
            <div className="col-span-1 w-full h-16" key={index}>
              <h6 className="font-regular mb-1">{contact.contact_name}</h6>
  
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
  
          ))}
        </div>
      )}

      



      <PiPlusBold 
        className=' cursor-pointer bg-brand-primary text-white rounded-sm text-lg  hover:bg-brand-soft active:bg-gray-2 absolute top-4 right-4'
        onClick={() => setNewContactVisibility(prev => !prev)}/>

    </div>
  )
}