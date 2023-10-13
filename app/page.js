import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components'
import mockup from '../public/mockup.png'
import career from '../public/career.png'
import contacts from '../public/contacts.png'
import todo from '../public/todo.png'
import file from '../public/file.png'
import dropdownCard from '../public/dropdowncard.png'

export default function Home() {
  const featureDetails = [
    { title: 'Job Details', description: 'You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 and 1/2 different versions of your resume.', image: career },
    { title: 'Contacts', description: 'You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 and 1/2 different versions of your resume.', image: contacts },
    { title: 'To Do List', description: 'You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 and 1/2 different versions of your resume.', image: todo },
    { title: 'Documents', description: 'You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 and 1/2 different versions of your resume.', image: file },
  ]
  return (
    <>
      <div className='bg-brand-dark overflow-clip'>
        <Header isDark={true} activePage={'landing'}/>

        <main className="bg-brand-dark min-h-screen">
        
          {/* hero section */}
          <div className='grid grid-cols-12 gap-4 pt-24 h-[636px] px-16 2xl:px-32'>
            <div className='col-span-4'>
              <div className='mb-16'>
                <p className='text-xl text-white leading-normal mb-4'>
                  You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 and 1/2 different versions of your resume.
                </p>
                <p className='text-xl text-white leading-normal'>
                  Sound familiar? Keep track of your applications in one Job Notebook.
                </p>
              </div>

              <Link href='/dashboard' className=' bg-brand-primary text-brand-dark hover:bg-brand-soft duration-300 rounded-full text-lg font-bold py-6 px-8' style={{transitionDuration: '.3s'}}>Start your notebook</Link>
            </div>

            <div className="col-span-7 col-start-6 2xl:col-start-8">
              <div className='w-full flex justify-end mb-12'>
                <Link href='/howitworks' className='py-3 px-4 text-brand-primary font-bold border-2 border-brand-primary rounded-full hover:bg-brand-primary hover:text-brand-dark' style={{transitionDuration: '.3s'}}>
                  Try it out
                </Link>
              </div>

              {/* 2xl:absolute 2xl:-right-[36px] */}
              <div className="w-[904px] h-[638px] z-0">
                <Image src={mockup} alt='Job Notebook mockup' height={638} width={904} className='rounded-md'/>
              </div>

            </div>
          </div>

          <div className=" w-screen h-[576px] relative">

            <svg width="100%" height="576" viewBox="0 0 1444 576" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-0 z-0'>
              <path d="M0 576V0C866.393 26.8364 1153.26 47.687 1440 98.8432V576H0Z" fill="#9DD4C7"/>
            </svg>

            <div className='relative z-10 px-16 2xl:px-32 py-24'>
              <h3 className='text-black font-bold text-2xl mb-16'>Job information available at a glance</h3>

              <div className='grid grid-cols-4 gap-4'>

                {featureDetails.map((feature, index) => (
                  <div className='col-span-1' key={index}>
                    
                    <div className='bg-brand-soft rounded-lg w-12 aspect-square mb-4 flex justify-center items-center'>
                      <Image src={feature.image} alt={`${feature.title} Icon`} width={32} height={32}/>
                    </div>
                    <h4 className='text-black text-2xl font-bold mb-4'>{feature.title}</h4>
                    <p className='text-black leading-normal mb-8'>
                      {feature.description}
                    </p>
                    <Link href='/howitworks' className='py-2 px-4 rounded-md text-black bg-brand-soft hover:opacity-60 duration-300'>Learn more</Link>
                </div>

                ))}

              </div>
            </div>
          </div>

          <div className='w-full h-[664px] grid grid-cols-12 px-16 pt-24'>
            
            <Image src={dropdownCard} alt='Job Card Dropdown Example' height={834} width={680} className='col-span-6 rounded-xl relative -left-20'/>

            <div className='mt-28 col-span-6 col-start-7 flex flex-col items-center'>
              <h3 className='w-[478px] text-white text-4xl font-bold leading-normal mb-16'>
                Don't find any more postings until you have a 
                <span className='text-brand-primary'> Notebook </span>
                to keep them in!
              </h3>

              <Link href='/dashboard' className=' bg-brand-primary text-brand-dark hover:bg-brand-soft duration-300 rounded-full text-lg font-bold py-6 px-8' style={{transitionDuration: '.3s'}}>Start your notebook</Link>
            </div>
            

          </div>

        </main>

        <footer className="w-screen h-[260px] relative">
          <svg width="100%" height="260" viewBox="0 0 1444 260" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-0 z-0'>
            <path d="M1438 259V84.137C843.203 27.1788 527.661 8.24314 0 0V259H1438Z" fill="#9dd4c7"/>
          </svg>
          <svg width="100%" height="260" viewBox="0 0 1444 260" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[5px] left-0 z-0'>
            <path d="M1438 259V84.137C843.203 27.1788 527.661 8.24314 0 0V259H1438Z" fill="#253330"/>
          </svg>
          

        </footer>
      </div>
    </>
    
  )
}
