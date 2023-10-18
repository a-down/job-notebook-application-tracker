"use client"
import { FileIcon } from '@/components'
import { BiSolidPlusSquare } from 'react-icons/bi'
import { useState } from 'react'
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
    <div className={`${sharedStyle} col-span-5 md:col-span-3 h-[112px] relative`}>
      <h6 className="text-lg font-regular mb-2">Files</h6>

      {/* if not displaying new file form, file icons are displayed */}
      {!newFileFormVisibility && (
        <div className="file-wrapper h-[64px] flex flex-wrap gap-2 mt-1 overflow-y-scroll">
          {files && (
            files.map((file, index) => (
              <FileIcon file={file} key={index} updateCard={updateCard} applicationId={applicationId}/>
            ))
          )}
        </div>
      )}

      {/* new file form */}
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
              <option value="Other">Other</option>
            </select>
          <div className='col-span-4 flex gap-1'>
            <input className="grow text-xxs p-1 px-1.5 border border-gray-5 rounded-sm w-full" 
              placeholder='File Link'
              name='file_link'
              value={newFileFormData.file_link}
              onChange={handleNewFileFormChange}
              />
            <button className='shrink-0 bg-brand-primary hover:bg-brand-soft duration-300 rounded-md text-white text-xs py-2 px-2 mx-auto'
              onClick={createFile}>
              Add File
            </button>
          </div>
        </form>
      )}

      {/* toggles new file form state */}
      <BiSolidPlusSquare className='text-brand-primary text-2xl rounded-sm hover:text-gray-7 active:text-gray-9 duration-300 absolute top-4 right-4 cursor-pointer' onClick={() => setNewFileFormVisibility(prev => !prev)}/>

    </div>
  )
}