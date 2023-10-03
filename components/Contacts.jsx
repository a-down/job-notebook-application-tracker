import { PiLinkedinLogoBold, PiPhoneBold, PiEnvelopeBold } from 'react-icons/pi'


export default function Contacts({ sharedStyle, contacts }) {
  console.log(contacts)
  return (
    <div className={`${sharedStyle} col-span-3 mb-1 h-full grid grid-cols-2 gap-x-1 gap-y-2`}>
      <h6 className="text-lg font-regular col-span-2 mb-1">Contacts</h6>

      {contacts && (
        contacts.map(contact => (

          <div className="col-span-1 w-full h-16" >
            <h6 className="font-regular mb-1">{contact.contact_name}</h6>

            {contact.contact_linkedin && (
              <a href={contact.contact_linkedin} target='_blank' className='flex gap-1 items-center pl-0.5 mb-1 text-gray-7 hover:text-brand-primary'>
                <PiLinkedinLogoBold className='text-brand-primary text-xs'/>
                <p className='text-xxs overflow-x-clip' style={{textOverflow: 'ellipsis'}}>{contact.contact_linkedin.split('.com')[1]}</p>
              </a>
            )}

            {contact.contact_email && (
              <a href={`mailto: ${contact.contact_email}`} className='flex gap-1 items-center pl-0.5 mb-1 text-gray-7 hover:text-brand-primary'>
                <PiEnvelopeBold className='text-brand-primary text-xs flex-shrink-0'/>
               <p className='text-xxs overflow-x-clip' style={{textOverflow: 'ellipsis'}}>{contact.contact_email}fhasodfjoiadjsgiasjgoi</p>
              </a>
            )}

            {contact.contact_phone && (
              <a href={`tel: ${contact.contact_phone}`} className='flex gap-1 items-center pl-0.5 mb-1 text-gray-7 hover:text-brand-primary'>
                <PiPhoneBold className='text-brand-primary text-xs'/>
                <p className='text-xxs overflow-x-clip' style={{textOverflow: 'ellipsis'}}>{contact.contact_phone}</p>
              </a>
            )}
          </div>

        ))
      )}
    

    </div>
  )
}