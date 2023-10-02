import './globals.css'
import Header from '../components/Header'
import { Lexend, Lexend_Deca, Kadwa  } from 'next/font/google'

const lexend = Lexend({ 
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--lexend'
})
const lexendDeca = Lexend_Deca({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--lexend-deca'
})

const kadwa = Kadwa({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--kadwa'
})

export const metadata = {
  title: 'Job Hunt',
  description: 'Website for job hunters to keep track of various job applications in one place.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${kadwa.variable} ${lexendDeca.variable} font-normal` }>
        <Header />
        {children}
      </body>
    </html>
  )
}
