"use client"
import { FileIcon } from '@/components'
import { PiPlusBold } from 'react-icons/pi'
import { useState, useEffect } from 'react'
import { toast } from 'sonner';

export default function Files({ sharedStyle, files, applicationId, updateCard }) {
  const defaultFormData = {file_name: '', file_type: '', file_link: ''}
  const [ newFileFormVisibility, setNewFileFormVisibility ] = useState(false)
  const [ newFileFormData, setNewFileFormData ] = useState(defaultFormData)

  function handleNewFileFormChange(e) {
    setNewFileFormData({...newFileFormData, [e.target.name]: e.target.value})
  }

  async function createFile(e) {
    e.preventDefault()
    setNewFileFormVisibility(false)
    try {
      const res = await fetch(`/api/applications/${applicationId}/file`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFileFormData)
      })
      const data = res.json()

      if (res.status === 200) {
        setNewFileFormData(defaultFormData)
        updateCard()
      } else {
        toast.error(data.message, {
          style: {
            backgroundColor: '#F87171',
            color: '#fff'
          }
        })
      }

    } catch {
      toast.error('Error creating file', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      })
    }
  }

  return (
    <div className={`${sharedStyle} col-span-3 h-[112px]`}>
      <h6 className="text-lg font-regular mb-2">Files</h6>

      {!newFileFormVisibility && (
        <div className="file-wrapper h-[64px] flex flex-wrap gap-2 mt-1 overflow-y-scroll">
          {files && (
            files.map((file, index) => (
              <FileIcon file={file} key={index}/>
            ))
          )}
        </div>
      )}

      {newFileFormVisibility && (
        <form className='grid grid-cols-4 grid-rows-2 gap-1'>
          <input className="text-xxs p-1 px-1.5 border border-gray-5 rounded-sm w-full col-span-2" 
            placeholder='File Name'
            name='file_name'
            value={newFileFormData.file_name}
            onChange={handleNewFileFormChange}
            />
          <select className="text-xxs px-px border border-gray-5 rounded-sm w-full col-span-2 text-gray-400" 
            name='file_type'
            value={newFileFormData.file_type}
            onChange={handleNewFileFormChange}
            >
              <option >File type</option>
              <option value="Google Doc">Google Doc</option>
              <option value="Google Slide">Google Slide</option>
              <option value="Google Sheet">Google Sheet</option>
              <option value="Folder">Folder</option>
            </select>
          <input className="text-xxs p-1 px-1.5 border border-gray-5 rounded-sm w-full col-span-3" 
            placeholder='File Link'
            name='file_link'
            value={newFileFormData.file_link}
            onChange={handleNewFileFormChange}
            />
            <button className='w-full bg-brand-soft hover:bg-brand-primary duration-300 rounded-md text-white text-xs py-2 px-2 mx-auto'
              onClick={createFile}>
              Add File
            </button>
        </form>
      )}


      <PiPlusBold 
        className=' cursor-pointer bg-brand-primary text-white rounded-sm text-lg  hover:bg-brand-soft active:bg-gray-2 absolute top-4 right-4'
        onClick={() => setNewFileFormVisibility(prev => !prev)}/>
    </div>
  )
}