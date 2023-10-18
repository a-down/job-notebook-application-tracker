"use client"
import { SiGoogledocs, SiGoogleslides, SiGooglesheets } from 'react-icons/si'
import { useState, useEffect } from 'react'
import { PiFolderSimpleFill } from 'react-icons/pi'
import { BiSolidTrash } from 'react-icons/bi'
import { toast } from 'sonner'

export default function FileIcon({ file, applicationId, updateCard }) {
  const [ fileVisibility, setFileVisibility ] = useState(true)
  const [ grayTrashState, setGrayTrashState ] = useState(false)
  const [ redTrashState, setRedTrashState ] = useState(false)
  let wrapperStyle = 'bg-gray-7 text-2xl rounded-md flex justify-center items-center p-2 duration-300'
  let icon

  `/api/applications/${applicationId}/file`

  async function deleteFile(e) {
    e.preventDefault()
    setFileVisibility(false)
    try {
      const res = await fetch(`/api/applications/${applicationId}/file`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fileId: file._id})
      })
      const data = await res.json()

      if (res.status === 200) {
        toast.success('File deleted', {
          style: {
            backgroundColor: 'var(--brand-primary)',
            color: '#fff'
          }
        })
        updateCard()
      } else {
        toast.error(data.message, {
          style: {
            backgroundColor: '#F87171',
            color: '#fff'
          }
        })
        setFileVisibility(true)
      }
      
    } catch {
      toast.error('Error deleting file', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      })
      setFileVisibility(true)
    }
  } 

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
    <>
      {fileVisibility && (
        <div className='relative' onMouseEnter={() => setGrayTrashState(true)} 
          onMouseLeave={() => {
              setGrayTrashState(false) 
              setRedTrashState(false)
            }}>
          <a href={file.file_link} target="_blank" className='flex flex-col gap-0.5' >
            {icon}
            <div className='min-h-[20px] flex items-center'>
              <p className='text-xxs text-gray-7 w-10 text-center'>{file.file_name}</p>
            </div>
            
          </a>

          <div className='flex grow justify-end items-center absolute top-[22px] right-0 bg-gray-7 rounded-br-md rounded-tl-md p-px hover:bg-red-400'>
            {grayTrashState && (
              <BiSolidTrash className='text-gray-3 flex-shrink-0 hover:cursor-pointer'
                onClick={deleteFile}/>
            )}
          </div>
          
        </div>
      )}
    </>
  )
}