import Link from 'next/link'
import { UserButton, auth } from '@clerk/nextjs'

export default function Header({ isDark }) {
  let backroundColor = isDark ? 'bg-brand-dark' : 'bg-white'
  let titleColor = isDark ? 'text-brand-primary hover:text-white' : 'text-black hover:text-brand-primary'
  let linkColor = isDark ? 'text-white hover:text-brand-primary' : 'text-black hover:text-brand-primary'

  return (
    <>
      <header className={`${backroundColor} flex justify-between items-center h-24 w-full px-16 2xl:px-32 py-6 drop-shadow-brand`}>
        <Link href="/" className=''>
          <h1 className={`${titleColor} font-display font-semibold text-4xl duration-300`}>Job Notebook</h1>
        </Link>
        
        <nav className='flex gap-4 font-body items-center'>
          <Link href="/about" className={linkColor} style={{transitionDuration: '.3s'}}>About</Link>
          <Link href="/howitworks" className={linkColor} style={{transitionDuration: '.3s'}}>How It Works</Link>
          <Link href="/dashboard" className={linkColor} style={{transitionDuration: '.3s'}}>Dashboard</Link>
          <UserButton afterSignOutUrl='/'/>
        </nav>
      </header>
    </>
    
  )
}