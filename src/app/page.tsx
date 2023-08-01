import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Link href="/quiz" className=''>QUIZZEZ!</Link>
      <Link href="/trivia">Trivia of Quiz</Link>
    </div>
  )
}

export default Home