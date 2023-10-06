import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { JobCard } from '@/components'
import { CgClose } from 'react-icons/cg'

export default function Modal({ children, buttonText }) {

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger className='w-full'>
          <button className=' text-white text-sm bg-brand-primary w-full px-4 py-2 rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1'>
            {buttonText}
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="z-50 bg-[rgb(0,0,0,.6)] data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] translate-x-[-50%] translate-y-[-50%] rounded-md bg-gray-2 p-6 drop-shadow-brand overflow-scroll">

            <Dialog.Close className='flex justify-end w-full pb-4'>
              <CgClose className='text-xl text-gray-9 hover:text-gray-7 duration-300'/>
            </Dialog.Close>

            {children}

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>

  )
}