"use client"
import { SiGoogledocs, SiGoogleslides, SiGooglesheets } from 'react-icons/si'
import { useState, useEffect } from 'react'
import { PiFolderSimpleFill, PiTrash, PiTrashFill } from 'react-icons/pi'

export default function FileIcon({ file }) {
  const [ grayTrashState, setGrayTrashState ] = useState(false)
  const [ redTrashState, setRedTrashState ] = useState(false)
  let wrapperStyle = 'bg-gray-7 text-2xl rounded-md flex justify-center items-center p-2 duration-300'
  let icon

  switch (file.file_type) {
    case 'Google Doc':
      icon = <>
          <div className={`hover:bg-[#2584FC] ${wrapperStyle}`}>
            <SiGoogledocs className='text-white'/>
          </div>
        </>
      break;
    case 'Google Slide':
      icon = <>
          <div className={`hover:bg-[#EEB313] ${wrapperStyle}`}>
            <SiGoogleslides className='text-white'/>
          </div>
        </>
      break;
    case 'Google Sheet':
      icon = <>
          <div className={`hover:bg-[#34A853] ${wrapperStyle}`}>
            <SiGooglesheets className='text-white'/>
          </div>
      </>
      break;
    case 'Folder':
      icon = <>
          <div className={`hover:bg-[#5F6367] ${wrapperStyle} text-3xl p-[5px]`}>
            <PiFolderSimpleFill className='text-white'/>
          </div>
        </>
      break;
  }

  return (
    <div className='relative' onMouseEnter={() => setGrayTrashState(true)} 
      onMouseLeave={() => {
          setGrayTrashState(false) 
          setRedTrashState(false)
        }}>
      <a href={file.file_link} target="_blank" className='flex flex-col gap-0.5' >
        {icon}
        <p className='text-xxs text-gray-7 w-10 text-center'>{file.file_name}</p>
      </a>

      <div className='flex grow justify-end items-center absolute top-[22px] right-0 bg-gray-7 rounded-br-md rounded-tl-md p-px'>
        {grayTrashState && !redTrashState && (
          <PiTrash className='text-gray-3 flex-shrink-0 hover:cursor-pointer'
            onMouseEnter={() => {
                setGrayTrashState(false)
                setRedTrashState(true)
              }} />
        )}
        {redTrashState && (
          <PiTrashFill className='text-red-400 active:text-red-800 flex-shrink-0 hover:cursor-pointer'
            onMouseLeave={() => setRedTrashState(false)}
             />
        )}
      </div>
      
    </div>
  )
}