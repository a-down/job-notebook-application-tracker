import Link from 'next/link'


export default function Header() {


  return (
    <header className="flex justify-between items-center bg-white h-24 w-full px-16 py-6 drop-shadow-brand">
      <Link href="/" className=''>
        <h1 className=" font-display font-semibold text-4xl hover:text-brand-primary">MyJobs</h1>
      </Link>
      
      <div className='flex gap-4 font-body'>
        <Link href="/about" className='hover:text-brand-primary'>About</Link>
        <Link href="/howitworks" className='hover:text-brand-primary'>How It Works</Link>
        <Link href="/dashboard" className='hover:text-brand-primary'>Dashboard</Link>
        <Link href="/account" className='hover:text-brand-primary'>Account</Link>
      </div>
    </header>
  )
}