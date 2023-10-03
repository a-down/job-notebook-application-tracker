import { SiLinkedin } from 'react-icons/si'
import { PiLinkedinLogo, PiLinkedinLogoFill } from 'react-icons/pi'


export default function Contacts({ sharedStyle, contacts }) {
  console.log(contacts)
  return (
    <div className={`${sharedStyle} col-span-3 mb-1 h-full grid grid-cols-2 gap-x-1 gap-y-2`}>
      <h6 className="text-lg font-regular col-span-2 ">Contacts</h6>

      {contacts && (
        contacts.map(contact => (

          <div className="col-span-1 w-full h-16" >
            <h6 className="font-regular mb-1">{contact.contact_name}</h6>
            <div className='flex gap-1 items-center pl-0.5 mb-1'>
              <SiLinkedin className='text-brand-primary text-xs col-span-1'/>
              <p className='text-xxs text-gray-7'>{contact.contact_linkedin.split('.com')[1]}</p>
            </div>
            <div className='flex gap-1 items-center pl-0.5 mb-1'>
              <SiLinkedin className='text-brand-primary text-xs col-span-1'/>
              <p className='text-xxs text-gray-7'>{contact.contact_email}</p>
            </div>
            <div className='flex gap-1 items-center pl-0.5 mb-1'>
              <SiLinkedin className='text-brand-primary text-xs col-span-1'/>
              <p className='text-xxs text-gray-7'>{contact.contact_phone}</p>
            </div>
          </div>

        ))
      )}
    

    </div>
  )
}