"use client"
import { useState, useEffect } from 'react'
import { toast } from 'sonner';


export default function Notes({ sharedStyle, notes, updateCard, applicationId }) {
  const [ notesState, setNotesState ] = useState(notes)

  useEffect(() => {
    setNotesState(notes)
  }, [notes])

  async function updateNotes() {
    try {
      const res = await fetch(`/api/applications/${applicationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({notes: notesState})
      })
      const data = await res.json()

      if (res.status === 200) {
        updateCard()
        toast.success('Notes saved', {
          style: {
            backgroundColor: 'var(--brand-primary)',
            color: '#fff'
          }
        })
      } else {
        toast.error('Notes saved', {
          style: {
            backgroundColor: '#F87171',
            color: '#fff'
          }
        })
      }
      
    } catch {
      toast.error('Error saving notes', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      })
    }
  }
  

  return (
    <div className={`${sharedStyle} col-span-5 relative`}>
      <h6 className="text-lg font-regular mb-3">Notes</h6>

      <textarea className="w-full h-[135px] rounded-sm border border-gray-6 py-1 px-2 overflow-y-scroll notes-wrapper text-xs leading-normal"
        value={notesState}
        onChange={(e) => setNotesState(e.target.value)}
        onBlur={updateNotes}>
      </textarea>

      <button className='bg-brand-primary text-white hover:bg-brand-soft duraction-300 active:bg-brand-gray-5 p-2 rounded-md text-xs absolute top-[10px] right-4' onClick={updateNotes}>
        Save Notes
      </button>
    </div>
  )
}