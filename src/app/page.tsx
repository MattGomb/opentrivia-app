import Quiz from '@/components/Quiz'
import Select from '@/components/Select'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Select />
      <Quiz />
    </main>
  )
}
