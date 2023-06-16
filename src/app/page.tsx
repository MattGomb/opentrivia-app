import Quiz from '@/components/Quiz'
import Select from '@/components/Select'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-8 md:px-12 lg:px-24">
      <Select />
      <Quiz />
      <Footer />
    </main>
  )
}
