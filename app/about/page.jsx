import { Image } from 'next/image'
import { Link } from 'next/link'
import { Header } from '@/components'


export default function About() {


  return (
    <>
      <Header activePage={'about'} isDark={false}/>

      <main className='mx-4 md:mx-auto py-8 md:py-12 md:max-w-[60vw] xl:max-w-[800px] h-40 flex flex-col gap-8'>
        <h2 className="font-display font-semibold text-4xl">About Job Notebook</h2>

        <img src='dashboard.png' alt='Job Notebook Mockup' className='rounded-md drop-shadow-brand opacity-100'/>

        <div className=' flex flex-col gap-4'>
          <h3 className='font-display font-semibold text-2xl'>What</h3>

          <p className='leading-relaxed'>Job Notebook is a tool for job seekers to keep track of their current applications. In today's job market, there are many steps for potential candidates. Applications that take their time can struggle to keep each one straight. Unlike other job trackers, Job Notebook focuses on what the user needs to do BEFORE submitting their application.</p>
        </div>

        <div className=' flex flex-col gap-4'>
          <h3 className='font-display font-semibold text-2xl'>Why</h3>

          <p className='leading-relaxed'>I created Job Notebook in the first month after I graduated from my Full Stack Bootcamp. I was searching several job boards and trying to track it all in a spreadsheet. This spreadsheet got pretty long pretty quickly. I found that on top of a running to do list, I was consistently tracking:</p>

          <ul className='list-disc list-inside leading-relaxed'>
            <li>Job Details</li>
            <li>Contacts</li>
            <li>Files</li>
            <li>Notes</li>
            <li>Current and Completed Applications</li>
          </ul>
        </div>
        
        <div className=' flex flex-col gap-4'>
          <h3 className='font-display font-semibold text-2xl'>How to Use</h3>

          <ol className='list-decimal list-inside leading-relaxed'>
            <li>Navigate to the{` `} 
              <a href="/dashboard" className=' underline hover:text-brand-primary duration-300'>Dashboard</a>.</li>
            <li>
              <a href="/dashboard" className=' underline hover:text-brand-primary duration-300'>Create an account</a> 
              {` `}with Google, LinkedIn, GitHub, or an email and password.</li>
            <li>On the Dashboard, use "New Application" to create an application.</li>
            <li>Click the down arrows at the bottom of the application to show more details.</li>
            <li>Add details with "Edit Application" or the plus icons.</li>
            <li>The percentage bar will update as you complete tasks.</li>
            <li>When you finish an application, mark it complete.</li>
            <li>You can delete an application, but it is permanent after confirming.</li>
          </ol>
        </div>

        <div className=' flex flex-col gap-4'>
          <h3 className='font-display font-semibold text-2xl'>Contact</h3>

          <p className='leading-relaxed'>{`If you have any issues with your Job Notebook, please create an issue at `} 
            <a href="https://github.com/a-down/job-notebook-application-tracker/issues" className=' underline hover:text-brand-primary duration-300'>github.com/a-down/job-notebook-application-tracker/issues</a>.
          </p>
          
          <p className='leading-relaxed'>{`For questions or conversations, reach out on LinkedIn at `} 
            <a href="https://linkedin.com/in/alec-downing/" className=' underline hover:text-brand-primary duration-300'>/in/alec-downing/</a>.
          </p>

          <p className='leading-relaxed'>{`You can find more details about the project at `} 
            <a href="https://github.com/a-down/job-notebook-application-tracker" className=' underline hover:text-brand-primary duration-300'>https://github.com/a-down/job-notebook-application-tracker</a>.
          </p>
        </div>

        <div className='pt-12 pb-24 mx-auto'>
          <a href='/dashboard' className=' w-[300px] mx-auto text-center bg-brand-primary text-brand-dark hover:bg-brand-soft duration-300 rounded-full text-lg font-bold py-6 px-8' style={{transitionDuration: '.3s'}}>
            Start your notebook
          </a>
        </div>
        

      </main>
      
    </>
  )
}