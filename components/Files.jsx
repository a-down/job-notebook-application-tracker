"use client"
import { FileIcon } from '@/components'
import { PiPlusBold } from 'react-icons/pi'
import { useState, useEffect } from 'react'

export default function Files({ sharedStyle, files }) {
  const [ newFileFormVisibility, setNewFileFormVisibility ] = useState(false)
  const [ newFileFormData, setNewFileFormData ] = useState({file_name: '', file_type: '', file_link: ''})

  function handleNewFileFormChange(e) {
    setNewFileFormData({...newFileFormData, [e.target.name]: e.target.value})
  }

  async function createFile(e) {
    e.preventDefault()
    console.log(newFileFormData)
  }

  return (
    <div className={`${sharedStyle} col-span-3 h-[120px]`}>
      <h6 className="text-lg font-regular mb-3">File</h6>

      {!newFileFormVisibility && (
        <div className="flex gap-2">
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
              <option value="Google Folder">Google Folder</option>
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