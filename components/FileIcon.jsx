import { SiGoogledocs, SiGoogleslides, SiGooglesheets } from 'react-icons/si'
import { PiFolderSimpleFill } from 'react-icons/pi'

export default function FileIcon({ file }) {
  let wrapperStyle = 'bg-gray-7 text-2xl rounded-md flex justify-center items-center p-2 duration-300'

  switch (file.file_type) {
    case 'Google Doc':
      return (
        <a href={file.file_link} target="_blank" className='flex flex-col gap-0.5' >
          <div className={`hover:bg-[#2584FC] ${wrapperStyle}`}>
            <SiGoogledocs className='text-white'/>
          </div>
          <p className='text-xxs text-gray-7 w-10 text-center'>{file.file_name}</p>
        </a>
      )
      break;
    case 'Google Slide':
      return (
        <a href={file.file_link} target="_blank" className='flex flex-col gap-0.5'>
          <div className={`hover:bg-[#EEB313] ${wrapperStyle}`}>
            <SiGoogleslides className='text-white'/>
          </div>
          <p className='text-xxs text-gray-7 w-10 text-center'>{file.file_name}</p>
        </a>
      )
      break;
    case 'Google Sheet':
      return (
        <a href={file.file_link} target="_blank" className='flex flex-col gap-0.5'>
          <div className={`hover:bg-[#34A853] ${wrapperStyle}`}>
            <SiGooglesheets className='text-white'/>
          </div>
          <p className='text-xxs text-gray-7 w-10 text-center'>{file.file_name}</p>
        </a>
      )
      break;
    case 'Folder':
      return (
        <a href={file.file_link} target="_blank">
          <div className={`hover:bg-[#5F6367] ${wrapperStyle} text-3xl p-[5px]`}>
            <PiFolderSimpleFill className='text-white'/>
          </div>
          <p className='text-xxs text-gray-7 w-10 text-center'>{file.file_name}</p>
        </a>
      )
      break;
  }
}