import Link from 'next/link'
import { ClerkProvider } from '@clerk/nextjs'


export default function Header() {

  return (
    <ClerkProvider>
      <header className="flex justify-between items-center bg-white h-24 w-full px-16 py-6 drop-shadow-brand">
        <Link href="/" className=''>
          <h1 className=" font-display font-semibold text-4xl hover:text-brand-primary duration-300">MyJobs</h1>
        </Link>
        
        <nav className='flex gap-4 font-body'>
          <Link href="/about" className='hover:text-brand-primary' style={{transitionDuration: '.3s'}}>About</Link>
          <Link href="/howitworks" className='hover:text-brand-primary' style={{transitionDuration: '.3s'}}>How It Works</Link>
          <Link href="/dashboard" className='hover:text-brand-primary' style={{transitionDuration: '.3s'}}>Dashboard</Link>
          <Link href="/account" className='hover:text-brand-primary' style={{transitionDuration: '.3s'}}>Account</Link>
        </nav>
      </header>
    </ClerkProvider>
  )
}