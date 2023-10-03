import { SiLinkedin } from 



export default function Contacts({ sharedStyle }) {

  return (
    <div className={`${sharedStyle} col-span-3 mb-1 h-full grid grid-cols-2 gap-4`}>
      <h6 className="text-lg font-regular col-span-2">Contacts</h6>

      <div className="col-span-1 grid auto-cols-auto w-full" >
        <h6 className="font-regular">Jim Smith</h6>
        <Image />

      </div>
      <div className="col-span-1 h-20 bg-red-100"></div>
      <div className="col-span-1 h-20 bg-red-100"></div>

    </div>
  )
}