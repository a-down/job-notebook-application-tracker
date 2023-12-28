import './globals.css'
import { Lexend, Lexend_Deca, Kadwa  } from 'next/font/google'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster, toast } from 'sonner'
import { Analytics } from '@vercel/analytics/react';

const lexend = Lexend({ 
  weight: ['300', '400', '500', '600', '700'],
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
  title: 'Job Notebook',
  description: 'Job Notebook lets job seekers keep track of their in-progress job applications.',
}

export default function RootLayout({ children }) {
  // const queryClient = new QueryClient()

  return (
      <ClerkProvider>
            {/* <QueryClientProvider client={queryClient}> */}
        <html lang="en">
          <body className={`${lexend.variable} ${kadwa.variable} ${lexendDeca.variable} font-normal` }>
            <Toaster position='top-center'/>
            {children}
            <Analytics />
          </body>
        </html>
        {/* </QueryClientProvider> */}
      </ClerkProvider>

  )
}
