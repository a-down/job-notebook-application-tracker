import Image from 'next/image'
import { FileIcon } from '@/components'

export default function Files({ sharedStyle, files }) {
  let projectFiles = []


  // files.forEach(file => {
  //   let filePath
  //   switch(file.file_type){
  //     case "Google Doc":
  //       filePath = <SiGoogledocs />
  //       break;
  //     case "Google Slide":
  //       filePath = <SiGoogleslides />
  //       break;
  //     case "Google Sheet":
  //       filePath = <SiGooglesheets />
  //       break;
  //     case "Folder":
  //       filePath = <PiFolderSimpleFill />
  //       break;
  //   }

  //   projectFiles.push(filePath)
  //   console.log(projectFiles)
  // })
  

  return (
    <div className={`${sharedStyle} col-span-3`}>
      <h6 className="text-lg font-regular mb-3">Files</h6>

      <div className="flex gap-2">
        {/* <img src='https://placehold.co/32' className='rounded-sm'/>
        <img src='https://placehold.co/32' className='rounded-sm'/>
        <img src='https://placehold.co/32' className='rounded-sm'/>
        <img src='https://placehold.co/32' className='rounded-sm'/> */}
        
        {files && (
          files.map(file => (
            <FileIcon file={file}/>
          ))
        )}

      </div>
    </div>
  )
}