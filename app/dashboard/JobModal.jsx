import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { JobCard } from '@/components'

export default function JobModal({ application }) {

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className=' text-white text-sm bg-brand-primary w-full px-4 py-2 rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1'>
            Test Radix
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="z-50 bg-[rgb(0,0,0,.6)] data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-fit translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[25px] drop-shadow-brand overflow-scroll">

            <JobCard application={application} isModal={true}/>

            <Dialog.Close/>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>

  )
}