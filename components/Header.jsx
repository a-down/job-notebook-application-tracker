import Link from 'next/link'
import { ClerkProvider } from '@clerk/nextjs'
// import { useRouter } from 'next/navigation'
import { UserButton, auth } from '@clerk/nextjs'

export default function Header() {
  // const router = useRouter()
  const {userId} = auth()
  console.log(userId)

  return (
    <header className="flex justify-between items-center bg-white h-24 w-full px-16 py-6 drop-shadow-brand">
      <Link href="/" className=''>
        <h1 className=" font-display font-semibold text-4xl hover:text-brand-primary duration-300">MyJobs</h1>
      </Link>
      
      <nav className='flex gap-4 font-body items-center'>
        <Link href="/about" className='hover:text-brand-primary' style={{transitionDuration: '.3s'}}>About</Link>
        <Link href="/howitworks" className='hover:text-brand-primary' style={{transitionDuration: '.3s'}}>How It Works</Link>
        <Link href="/dashboard" className='hover:text-brand-primary' style={{transitionDuration: '.3s'}}>Dashboard</Link>
        <UserButton afterSignOutUrl='/'/>
      </nav>
    </header>
  )
}