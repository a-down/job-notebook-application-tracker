import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components'
import mockup from '../public/mockup.png'
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
    { title: 'Job Details', description: 'You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 and 1/2 different versions of your resume.', image: career },
    { title: 'Contacts', description: 'You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 and 1/2 different versions of your resume.', image: contacts },
    { title: 'To Do List', description: 'You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 and 1/2 different versions of your resume.', image: todo },
    { title: 'Documents', description: 'You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 and 1/2 different versions of your resume.', image: file },
  ]

  const footerLinks1 = [
    { title: '/in/alec-downing', link: 'https://linkedin.com/in/alec-downing', icon: linkedIn },
    { title: 'GitHub', link: 'https://github.com/a-down/job-notebook-application-tracker', icon: github },
    { title: 'Clerk', link: 'https://clerk.com', icon: clerk }
  ]

  const footerLinks2 = [
    { title: 'Phosphor Icons', link: 'https://phosphoricons.com/', icon: phosphor },
    { title: 'Icons8', link: 'https://https://icons8.com/', icon: icons8 },
    { title: 'Box Icons', link: 'https://boxicons.com/', icon: boxIcons },
    { title: 'Simple Icons', link: 'https://simpleicons.org/', icon: simpleIcons },
  ]


  return (
    <>
      <div className='bg-brand-dark overflow-clip'>
        <Header isDark={true} activePage={'landing'}/>

        <main className="bg-brand-dark min-h-screen">
        
          {/* hero section */}
          <div className='grid grid-cols-12 gap-4 pt-12 lg:pt-24 h-[636px] px-8 lg:px-16 2xl:px-32'>
            <div className='col-span-12 lg:col-span-4'>
              <div className='mb-8 lg:mb-16'>
                <p className='text-xl text-white leading-normal mb-4'>
                  You’re trying to find the perfect job. You’re working to keep your skills sharp. You’re searching for roles on way too many sites. You have 254 and 1/2 different versions of your resume.
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
              <div className='w-full flex justify-center lg:justify-end mb-12'>
                <Link href='/howitworks' className=' w-full md:w-5/12 lg:w-fit text-center py-3 px-4 text-brand-primary font-bold border-2 border-brand-primary rounded-full hover:bg-brand-primary hover:text-brand-dark' style={{transitionDuration: '.3s'}}>
                  Try it out
                </Link>
              </div>

              <div className="ml-[64px] lg:ml-0 w-[904px] h-[638px] z-0">
                <Image src={mockup} alt='Job Notebook mockup' height={638} width={904} className='rounded-md'/>
              </div>

            </div>
          </div>

          <div className=" w-screen h-fit relative">

            <svg width="110%" height="100%" viewBox="0 0 1444 576" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-0 z-0'>
              <path d="M0 576V0C866.393 26.8364 1153.26 47.687 1440 98.8432V576H0Z" fill="#9DD4C7"/>
            </svg>

            <div className='relative z-10 px-8 lg:px-16 2xl:px-32 pt-24 pb-12 lg:pb-24'>
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
                    <Link href='/howitworks' className='hidden lg:inline py-2 px-4 rounded-md text-black bg-brand-soft hover:opacity-60 duration-300'>Learn more</Link>
                  </div>
                ))}

              </div>
            </div>
          </div>

          <div className='w-full h-[664px] grid grid-cols-12 px-8 lg:px-16 lg:pt-12 relative'>
            <Image src={dropdownCard} alt='Job Card Dropdown Example' height={834} width={680} className='hidden lg:block col-span-6 rounded-xl relative -left-20 top-24'/>

            <div className='mx-auto w-fit mt-12 lg:mt-28 col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col items-center'>
              <h3 className='lg:max-w-[478px] text-white text-4xl font-bold leading-normal mb-8 md:mb-16'>
                Don't find any more postings until you have a 
                <span className='text-brand-primary'> Notebook </span>
                to keep them in!
              </h3>

              <Link href='/dashboard' className='w-full md:w-5/12 lg:w-fit text-center lg:ml-none bg-brand-primary text-brand-dark hover:bg-brand-soft duration-300 rounded-full text-lg font-bold py-6 px-8 mb-12 lg:mb-0' style={{transitionDuration: '.3s'}}>Start your notebook</Link>
            </div>

            <Image src={dropdownCard} alt='Job Card Dropdown Example' height={834} width={680} className=' lg:hidden col-span-10 rounded-xl relative -left-20'/>
          </div>

        </main>

        <footer className="w-screen h-[240px] relative">
          <svg width="100%" height="240" viewBox="0 0 1444 240" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2400/svg" className='absolute left-0 z-0'>
            <path d="M1438 259V84.137C843.203 27.1788 527.661 8.24314 0 0V259H1438Z" fill="#9dd4c7"/>
          </svg>
          <svg width="100%" height="240" viewBox="0 0 1444 240" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[5px] left-0 z-0'>
            <path d="M1438 259V84.137C843.203 27.1788 527.661 8.24314 0 0V259H1438Z" fill="#253330"/>
          </svg>
          
          <div className='flex flex-wrap gap-6 lg:flex-row justify-between items-start lg:items-end h-full relative px-8 lg:p-16 py-20 2xl:px-32 text-gray-5'>
            <div className=' flex flex-col justify-end gap-6 pb-0.5'>
              <div className=' flex gap-6 flex-wrap '>
                {footerLinks1.map((link, index) => (
                  <div className='hover:text-brand-primary duration-300 flex' key={index}>
                    <a href={link.link} target="_blank" className='flex gap-2 items-center'>
                      <Image src={link.icon} height={24} width={24}/>
                      <p className='font-semibold'>{link.title}</p>
                    </a>
                  </div>
                ))}
              </div>
              <div className=' flex gap-6 flex-wrap'>
                {footerLinks2.map((link, index) => (
                  <div className='hover:text-brand-primary duration-300 flex' key={index}>
                    <a href={link.link} target="_blank" className='flex gap-2 items-center'>
                      <Image src={link.icon} height={24} width={24}/>
                      <p className='font-semibold'>{link.title}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className='text-brand-primary flex flex-o gap-6 mb-1.5 font-semibold'>
              <Link href='/' className=' hover:white' style={{transitionDuration: '.3s'}}>Home</Link>
              <Link href='/about' className='hover:white' style={{transitionDuration: '.3s'}}>About</Link>
              <Link href='/howitworks' className='hover:white' style={{transitionDuration: '.3s'}}>How It Works</Link>
              <Link href='/dashboard' className='hover:white' style={{transitionDuration: '.3s'}}>Dashboard</Link>
            </div>
          </div>

        </footer>
      </div>
    </>
    
  )
}
