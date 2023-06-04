import Quiz from '@/components/Quiz'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Quiz />
    </main>
  )
}
