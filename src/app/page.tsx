import Quiz from '@/components/Quiz'
import Select from '@/components/Select'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-2 py-2 justify-between">
      <Select />
      <Quiz />
      <Footer />
    </main>
  )
}
