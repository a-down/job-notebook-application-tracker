import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components'
import primaryWave from '@/public/primary-wave.svg'

export default function Home() {
  return (
    <>
      <div className='bg-brand-dark'>
        <Header isDark={true} />

        <main className="bg-brand-dark min-h-screen overflow-clip">
        
          {/* hero section */}
          <div className='grid grid-cols-12 gap-4 pt-24 h-[636px] px-16'>
            <div className='col-span-4'>
              <div className='bg-white h-[324px] mb-6'>

              </div>
              <button className='h-20 bg-brand-primary text-brand-dark rounded-full w-full text-lg font-bold'>Start your notebook</button>
            </div>

            <div className="col-span-7 col-start-6">
              <div className='w-full flex justify-end mb-12'>
                <Link href='/howitworks' className='py-3 px-4 text-brand-primary font-bold border-2 border-brand-primary rounded-full hover:bg-brand-primary hover:text-brand-dark' style={{transitionDuration: '.3s'}}>
                  Try it out
                </Link>
              </div>

              <div className="bg-white rounded-md w-[904px] h-[638px] overflow z-0">

              </div>
            </div>
          </div>

          <div className=" w-screen h-[576px] relative">

            <svg width="100%" height="576" viewBox="0 0 1444 576" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg"
              className='absolute top-0 left-0 z-0'>
              <path d="M0 576V0C866.393 26.8364 1153.26 47.687 1440 98.8432V576H0Z" fill="#9DD4C7"/>
            </svg>

            <div className='relative z-10 px-16 py-24'>
              <h3 className='text-black font-bold text-2xl mb-16'>Job information available at a glance</h3>

              <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-1 h-[288px] bg-brand-soft'>

                </div>
                <div className='col-span-1 h-[288px] bg-brand-soft'>

                </div>
                <div className='col-span-1 h-[288px] bg-brand-soft'>

                </div>
                <div className='col-span-1 h-[288px] bg-brand-soft'>

                </div>

              </div>
            </div>

          </div>

          <div className='w-full h-[664px]'>

            

          </div>

        </main>

        <footer className="w-full h-[260px] bg-[url('../public/footer-wave.svg')] bg-left-top z-10 relative">
          

        </footer>
      </div>
    </>
    
  )
}
