import MainButton from './MainButton'

const Home = () => {
  return (
    <main className="flex flex-col md:flex-row min-h-screen items-center px-2 py-2 justify-evenly md:justify-around">
      <MainButton href="/quiz">QUIZZEZ!</MainButton>
      <MainButton href="/trivia">Trivia of Quiz</MainButton>
    </main>
  )
}

export default Home