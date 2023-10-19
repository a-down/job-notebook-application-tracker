import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components'
import dashboard from '../public/dashboard.png'
import career from '../public/career.png'
import contacts from '../public/contacts.png'
import todo from '../public/todo.png'
import file from '../public/file.png'
import dropdownCard from '../public/dropdowncard.png'
import clerk from '../public/clerk.png'
import github from '../public/github.png'
import icons8 from '../public/icons8.png'
import linkedIn from '../public/linkedin.png'
import phosphor from '../public/phosphor.png'
import simpleIcons from '../public/simpleicons.png'
import boxIcons from '../public/boxicons.png'

export default function Home() {
  const featureDetails = [
    { title: 'Job Details', description: "Too many sites and links. Store the job's title, description, application link, and due date, as well as the company's name, website, and LinkedIn.", image: career },
    { title: 'Contacts', description: "Hopefully you will talk to multiple employees at a company during the process. Job Notebook holds the contact info for as many people as needed. Easy to access and reach out to.", image: contacts },
    { title: 'To Do List', description: 'Not every job has an "Easy Apply." Break down your process into tasks, and keep them in a neat list. Job Notebook will tell you the next step and how close you are to completing your tasks! ', image: todo },
    { title: 'Documents', description: 'Lots of resumes. Lots of cover letters. Definitely lots of folders. Use Job Notebook for quick access to the files and folders for each application.', image: file },
  ]

  const footerLinks1 = [
    { title: 'GitHub', link: 'https://github.com/a-down/job-notebook-application-tracker', icon: github },
    { title: '/in/alec-downing', link: 'https://linkedin.com/in/alec-downing', icon: linkedIn }
  ]

  const footerLinks2 = [
    { title: 'Clerk', link: 'https://clerk.com', icon: clerk },
    { title: 'Phosphor Icons', link: 'https://phosphoricons.com/', icon: phosphor },
    { title: 'Box Icons', link: 'https://boxicons.com/', icon: boxIcons },
    { title: 'Simple Icons', link: 'https://simpleicons.org/', icon: simpleIcons },
  ]

  return (
    <>
      <div className='bg-brand-dark overflow-clip'>
        <Header isDark={true} activePage={'home'}/>

        <main className="bg-brand-dark min-h-screen">
        
          {/* hero section */}
          <div className='grid grid-cols-12 gap-4 pt-8 md:pt-12 lg:pt-24 h-[636px] px-4 md:px-8 lg:px-16 2xl:px-32'>
            <div className='col-span-12 lg:col-span-4'>
              <div className='mb-8 lg:mb-16'>
                <p className='text-xl text-white leading-normal mb-4'>
                  You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 different versions of your resume.
                </p>
                <p className='text-xl text-white leading-normal'>
                  Sound familiar? Keep track of your applications in one Job Notebook.
                </p>
              </div>

              <div className='w-full flex justify-center'>
                <Link href='/dashboard' className=' w-full md:w-5/12 lg:w-fit text-center bg-brand-primary text-brand-dark hover:bg-brand-soft duration-300 rounded-full text-lg font-bold py-6 px-8' style={{transitionDuration: '.3s'}}>
                  Start your notebook
                </Link>
              </div>
              
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6 2xl:col-start-8">
              {/* <div className='w-full flex justify-center lg:justify-end mb-12'>
                <Link href='/tryit' className=' w-full md:w-5/12 lg:w-fit text-center py-3 px-4 text-brand-primary font-bold border-2 border-brand-primary rounded-full hover:bg-brand-primary hover:text-brand-dark' style={{transitionDuration: '.3s'}}>
                  Try it out
                </Link>
              </div> */}

              <div className="ml-[64px] lg:ml-0 w-[904px] h-[638px] z-0 mt-24">
                <Image src={dashboard} alt='Job Notebook Mockup' height={638} width={904} className='rounded-md'/>
              </div>

            </div>
          </div>

          <div className=" w-screen h-fit relative">

            <svg width="110%" height="100%" viewBox="0 0 1444 576" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-0 z-0'>
              <path d="M0 576V0C866.393 26.8364 1153.26 47.687 1440 98.8432V576H0Z" fill="#9DD4C7"/>
            </svg>

            <div className='relative z-10 px-4 md:px-8 lg:px-16 2xl:px-32 pt-24 pb-12 lg:pb-24'>
              <h3 className='w-3/4 md:w-full text-black font-bold text-2xl mb-8 lg:mb-16'>Job information available at a glance</h3>

              <div className='grid grid-cols-4 gap-8 lg:gap-4'>

                {featureDetails.map((feature, index) => (
                  <div className='col-span-4 md:col-span-2 lg:col-span-1' key={index}>
                    
                    <div className='bg-brand-soft rounded-lg w-12 aspect-square mb-4 flex justify-center items-center'>
                      <Image src={feature.image} alt={`${feature.title} Icon`} width={32} height={32}/>
                    </div>
                    <h4 className='text-black text-2xl font-bold mb-4'>{feature.title}</h4>
                    <p className='text-black leading-normal lg:mb-8'>
                      {feature.description}
                    </p>
                    {/* <Link href='/howitworks' className='hidden lg:inline py-2 px-4 rounded-md text-black bg-brand-soft hover:opacity-60 duration-300'>Learn more</Link> */}
                  </div>
                ))}

              </div>
            </div>
          </div>

          <div className='w-full h-[664px] grid grid-cols-12 px-4 md:px-8 lg:px-16 lg:pt-12 relative'>
            <Image src={dropdownCard} alt='Job Card Dropdown Example' height={834} width={680} className='hidden lg:block col-span-6 rounded-xl relative -left-20 top-24'/>

            <div className='mx-auto w-fit mt-12 lg:mt-28 col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col items-center'>
              <h3 className='lg:max-w-[478px] text-white text-4xl font-bold leading-normal mb-8 lg:mb-16'>
                Don't find any more postings until you have a 
                <span className='text-brand-primary'> Notebook </span>
                to keep them in!
              </h3>

              <Link href='/dashboard' className='w-full md:w-5/12 lg:w-fit text-center lg:ml-none bg-brand-primary text-brand-dark hover:bg-brand-soft duration-300 rounded-full text-lg font-bold py-6 px-8 mb-12 lg:mb-0' style={{transitionDuration: '.3s'}}>Start your notebook</Link>
            </div>

            <Image src={dropdownCard} alt='Job Card Dropdown Example' height={834} width={680} className=' lg:hidden col-span-10 rounded-xl relative -left-20'/>
          </div>

        </main>

        <footer className="w-screen h-fit relative">
          <svg width="100%" height="100%" viewBox="0 0 1444 240" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2400/svg" className='absolute left-0 z-0'>
            <path d="M1438 259V84.137C843.203 27.1788 527.661 8.24314 0 0V259H1438Z" fill="#9dd4c7"/>
          </svg>
          <svg width="100%" height="100%" viewBox="0 0 1444 240" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[5px] left-0 z-0'>
            <path d="M1438 259V84.137C843.203 27.1788 527.661 8.24314 0 0V259H1438Z" fill="#253330"/>
          </svg>
          
          <div className='flex justify-between gap-6 lg:flex-row items-end h-full relative px-4 md:px-8 lg:px-16 2xl:px-32 py-12 text-gray-5'>
            <div className=' flex flex-col justify-end gap-6 pb-0.5'>
              <div className=' flex flex-col gap-6 flex-wrap '>
                {footerLinks1.map((link, index) => (
                  <div className='hover:text-brand-primary duration-300 flex' key={index}>
                    <a href={link.link} target="_blank" className='flex gap-4 items-center'>
                      <Image src={link.icon} alt={`${link.title} icon`} height={24} width={24}/>
                      <p className='font-semibold'>{link.title}</p>
                    </a>
                  </div>
                ))}
              </div>
              <div className=' flex flex-col gap-6 flex-wrap'>
                {footerLinks2.map((link, index) => (
                  <div className='hover:text-brand-primary duration-300 flex' key={index}>
                    <a href={link.link} target="_blank" className='flex gap-4 items-center'>
                      <Image src={link.icon} alt={`${link.title} icon`} height={24} width={24}/>
                      <p className='font-semibold'>{link.title}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

        </footer>
      </div>
    </>
    
  )
}
