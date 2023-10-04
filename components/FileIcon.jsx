import { SiGoogledocs, SiGoogleslides, SiGooglesheets } from 'react-icons/si'
import { PiFolderSimpleFill } from 'react-icons/pi'

export default function FileIcon({ file }) {
  let wrapperStyle = 'bg-gray-7 text-2xl rounded-md flex justify-center items-center p-2 duration-300'

  switch (file.file_type) {
    case 'Google Doc':
      return (
        <a href={file.file_link} target="_blank" className='relative' >
          <div className={`hover:bg-[#2584FC] ${wrapperStyle}`}>
            <SiGoogledocs className='text-white'/>
          </div>
          {/* <p className='absolute top-[50%] left-[50%] text-sm text-center overflow-visible' style={{transform: 'translateY(-50%) translateX(-50%)'}}>{file.file_name}</p> */}
        </a>
      )
      break;
    case 'Google Slide':
      return (
        <a href={file.file_link} target="_blank">
          <div className={`hover:bg-[#EEB313] ${wrapperStyle}`}>
            <SiGoogleslides className='text-white'/>
          </div>
        </a>
      )
      break;
    case 'Google Sheet':
      return (
        <a href={file.file_link} target="_blank">
          <div className={`hover:bg-[#34A853] ${wrapperStyle}`}>
            <SiGooglesheets className='text-white'/>
          </div>
        </a>
      )
      break;
    case 'Folder':
      return (
        <a href={file.file_link} target="_blank">
          <div className={`hover:bg-[#5F6367] ${wrapperStyle} text-3xl p-[5px]`}>
            <PiFolderSimpleFill className='text-white'/>
          </div>
        </a>
      )
      break;
  }
}