import * as Dialog from '@radix-ui/react-dialog';
import { CgClose } from 'react-icons/cg'

export default function Modal({ children, button }) {

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger className='w-full'>
          {button.style === 'primary' && (
            <button className=' text-white text-sm leading-tight bg-brand-primary w-full px-4 py-[12px] rounded-md border border-brand-primary hover:bg-gray-7 hover:border-gray-7 hover:text-white duration-300 active:border-black mb-1'>
              {button.text}
            </button>
          )}

          {button.style === 'gray-outline' && (
            <button className=' text-gray-7 text-sm leading-tight w-full px-4 py-[12px] rounded-md  border border-gray-7 hover:bg-brand-primary hover:border-brand-primary hover:text-white duration-300 active:border-gray-9 mb-1'>
              {button.text}
            </button>
          )}

        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="z-50 bg-[rgb(0,0,0,.6)] data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="modal-content z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] translate-x-[-50%] translate-y-[-50%] rounded-md bg-gray-2 p-6 drop-shadow-brand overflow-scroll">

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