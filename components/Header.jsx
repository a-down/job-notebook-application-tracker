"use client"
import Link from 'next/link'
import { useState } from 'react'
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { BiMenu } from 'react-icons/bi'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function Header({ isDark, activePage }) {
  const [ dropdownMenuState, setDropdownMenuState ] = useState(false)

  let backgroundColor = isDark ? 'bg-brand-dark' : 'bg-white'
  let titleColor = isDark ? 'text-brand-primary hover:text-white' : 'text-black hover:text-brand-primary'
  let linkColor = isDark ? 'text-white hover:text-brand-primary' : 'text-black hover:text-brand-primary'

  return (
    <>
      <header className={`${backgroundColor} flex justify-between items-center h-24 w-full px-4 md:px-8 lg:px-16 2xl:px-32 py-6 drop-shadow-brand`}>
        <Link href="/" className=''>
          <h1 className={`${titleColor} font-display font-semibold text-4xl duration-300`}>Job Notebook</h1>
        </Link>
        
        {/* if medium screen or bigger, display traditional nav */}
        <nav className='hidden md:flex gap-4 font-body items-center md:'>

          {activePage === 'home' ? (
            <Link href="/" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>Home</Link>
          ) : (
            <Link href="/" className={linkColor} style={{transitionDuration: '.3s'}}>Home</Link>
          )}

          {activePage === 'about' ? (
            <Link href="/about" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>About</Link>
          ) : (
            <Link href="/about" className={linkColor} style={{transitionDuration: '.3s'}}>About</Link>
          )}

          {activePage === 'try-it' ? (
            <Link href="/try-it" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>Try It</Link>
          ) : (
            <Link href="/try-it" className={linkColor} style={{transitionDuration: '.3s'}}>Try It</Link>
          )}

          {activePage === 'dashboard' ? (
            <Link href="/dashboard" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>Dashboard</Link>
          ) : (
            <Link href="/dashboard" className={linkColor} style={{transitionDuration: '.3s'}}>Dashboard</Link>
          )}

          <SignedIn>
            <UserButton afterSignOutUrl='/'/>
          </SignedIn>

          <SignedOut>
            <SignInButton className={`${linkColor} font-body duration-300`}/>
          </SignedOut>
          
        </nav>

        {/* if small screen, display dropdown hamburger nav menu */}
        <div className='md:hidden '>
          <BiMenu className={`${linkColor} text-3xl cursor-pointer`} 
            onClick={() => setDropdownMenuState(prev => !prev)}/>

          {dropdownMenuState && (
            <div className={`mobile-nav flex items-center justify-end py-8 px-4 md:px-8 lg:px-16 2xl:px-32 justify-right ${backgroundColor} gap-4 drop-shadow-brand rounded-b-md absolute right-0 w-full`}>
              {activePage === 'home' ? (
                <Link href="/" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>Home</Link>
              ) : (
                <Link href="/" className={linkColor} style={{transitionDuration: '.3s'}}>Home</Link>
              )}

              {activePage === 'about' ? (
                <Link href="/about" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>About</Link>
              ) : (
                <Link href="/about" className={linkColor} style={{transitionDuration: '.3s'}}>About</Link>
              )}

              {activePage === 'dashboard' ? (
                <Link href="/dashboard" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>Dashboard</Link>
              ) : (
                <Link href="/dashboard" className={linkColor} style={{transitionDuration: '.3s'}}>Dashboard</Link>
              )}

              <SignedIn>
                <UserButton afterSignOutUrl='/'/>
              </SignedIn>

              <SignedOut>
                <SignInButton className={`${linkColor} font-body duration-300`}/>
              </SignedOut>
            </div>
          )}
          {/* <DropdownMenu.Root>
            <DropdownMenu.Trigger className='h-full flex justify-center'>
              <BiMenu className={`${linkColor} text-3xl`} />
            </DropdownMenu.Trigger>

              <DropdownMenu.Content className={`${backgroundColor} ${isDark ? 'px-4 md:px-8' : ''} w-screen mt-4 py-4 pb-8  drop-shadow-brand rounded-md text-right flex items-center justify-end gap-6 mobile-nav`}>

                  {activePage === 'home' ? (
                    <Link href="/" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>Home</Link>
                  ) : (
                    <Link href="/" className={linkColor} style={{transitionDuration: '.3s'}}>Home</Link>
                  )}

                  {activePage === 'about' ? (
                    <Link href="/about" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>About</Link>
                  ) : (
                    <Link href="/about" className={linkColor} style={{transitionDuration: '.3s'}}>About</Link>
                  )}

                  {/* {activePage === 'tryit' ? (
                    <Link href="/tryit" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>Try It</Link>
                  ) : (
                    <Link href="/tryit" className={linkColor} style={{transitionDuration: '.3s'}}>Try It</Link>
                  )} */}

                  {/* {activePage === 'dashboard' ? (
                    <Link href="/dashboard" className='text-brand-primary hover:text-brand-soft' style={{transitionDuration: '.3s'}}>Dashboard</Link>
                  ) : (
                    <Link href="/dashboard" className={linkColor} style={{transitionDuration: '.3s'}}>Dashboard</Link>
                  )}

                  <UserButton afterSignOutUrl='/'/> */}
{/* 
              </DropdownMenu.Content>
          </DropdownMenu.Root>  */}
        </div>
      </header>
    </>
    
  )
}