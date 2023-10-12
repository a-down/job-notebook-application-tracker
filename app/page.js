import Image from 'next/image'
import { Header } from '@/components'

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen">
      <Header isDark={true} />

    </main>
  )
}
