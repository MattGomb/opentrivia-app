import Link from "next/link";
import Image from "next/image";
import pubquiz from "./images/pubquiz.jpg";
import PageTexts from "./texts/PageTexts.json";
import QuizTexts from "./texts/QuizTexts.json";
import TriviaTexts from "./texts/TriviaTexts.json";
import { Texts } from "@/app/types";
import { TiArrowBack } from "react-icons/ti";

const Trivia = () => {
  const { quizTitles, quizParagraphs } = QuizTexts as Texts;
  const { triviaTitles, triviaParagraphs } = TriviaTexts as Texts;
  const { pageTitle, pageSubtitle } = PageTexts as Texts;
  return (
    <section className="prose md:prose-xl max-w-none bg-white">
      <Link href="/" className="flex justify-center p-2">
        <TiArrowBack
          size={42}
          className="border-solid border-2 hover:border-dashed p-1 rounded-md border-black shadow-md hover:-translate-y-0.5 transition-all duration-100"
        />
      </Link>
      <header className="flex flex-col items-center mt-8">
        <h1>{pageTitle}</h1>
        <p className="italic text-base text-center px-8">
          {pageSubtitle}
        </p>
      </header>
      <div className="grid grid-cols-3">
        <article className="flex flex-col col-span-2">
          <h2 className="self-center">Quiz</h2>
          <ul>
            {quizTitles.map((quizTitles, i) => (
              <li key={i}>
                {quizTitles}
                <br />
                {quizParagraphs[i]}
              </li>
            ))}
          </ul>
          <Link
            href="https://www.britannica.com/topic/quiz/Types-of-quizzes"
            target="_blank"
            rel="noopener noreferrer"
            className="italic font-light self-end"
          >
            source
          </Link>
        </article>
        <Image
          className="rounded-lg shadow-md mx-4 col-span-1 self-center"
          src={pubquiz}
          alt="pubquiz image"
          placeholder="blur"
          priority
          width={600}
          height={900}
        />
      </div>
      <div className="grid grid-cols-3">
      <Image
          className="rounded-lg shadow-md mx-4 col-span-1 self-center"
          src={pubquiz}
          alt="pubquiz image"
          placeholder="blur"
          priority
          width={600}
          height={900}
        />
        <article className="flex flex-col col-span-2">
          <h2 className="self-center">Trivia</h2>
          <ul className="ml-4">
            {triviaTitles.map((triviaTitles, i) => (
              <li key={i}>
                {triviaTitles}
                <br />
                {triviaParagraphs[i]}
              </li>
            ))}
          </ul>
          <Link
            href="https://www.trivianerd.com/blog/history-of-trivia"
            target="_blank"
            rel="noopener noreferrer"
            className="italic font-light self-end"
          >
            source
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Trivia;
