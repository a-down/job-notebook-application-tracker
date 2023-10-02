import './globals.css'
import { Lexend  } from 'next/font/google'

const lexend = Lexend({ 
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Job Hunt',
  description: 'Website for job hunters to keep track of various job applications in one place.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
