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
    <div className={`${sharedStyle} col-span-3 h-[96px]`}>
      <h6 className="text-lg font-regular mb-3">Files</h6>

      <div className="flex gap-2">
        
        {files && (
          files.map((file, index) => (
            <FileIcon file={file} key={index}/>
          ))
        )}

      </div>
    </div>
  )
}