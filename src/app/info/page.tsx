import Link from "next/link";
import Image from "next/image";
import pubquiz from "./images/pubquiz.jpg";
import { TiArrowBack } from "react-icons/ti";
import { IgetQuizTexts } from "../types";

async function getQuizTexts<IgetQuizTexts>() {
  const res = await fetch("http://localhost:3000/api/texts", { method: "GET" });
  if (!res.ok) {
    throw new Error("Go fuck yourself");
  }
  return res.json();
}

export default async function Trivia() {
  const Texts = await getQuizTexts<IgetQuizTexts>();

  return (
    <section className="prose md:prose-xl max-w-none bg-white">
      <Link href="/" className="flex justify-center p-2">
        <TiArrowBack
          size={42}
          className="border-solid border-2 hover:border-dashed p-1 rounded-md border-black shadow-md hover:-translate-y-0.5 transition-all duration-100"
        />
      </Link>
      <header className="flex flex-col items-center mt-8">
        <h1>{Texts.pageTitle}</h1>
        <p className="italic text-base text-center px-8">
          {Texts.pageSubtitle}
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2 p-4 md:p-0 relative z-10">
          <article>
            <h2 className="text-center">Quiz</h2>
            <ul>
              {Texts.quizTitles.map((quizTitles: string, i: number) => (
                <li key={i}>
                  {quizTitles}
                  <br />
                  {Texts.quizParagraphs[i]}
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
        </div>
        <Image
          className="rounded-lg shadow-md col-span-1 self-center object-cover hidden inset-0 md:block"
          src={pubquiz}
          alt="pubquiz image"
          placeholder="blur"
          priority
          width={600}
          height={900}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Image
          className="rounded-lg shadow-md col-span-1 self-center object-cover hidden inset-0 md:block"
          src={pubquiz}
          alt="pubquiz image"
          placeholder="blur"
          priority
          width={600}
          height={900}
        />
        <div className="md:col-span-2 p-4 md:p-0 relative z-10">
          <article className="flex flex-col col-span-2">
            <h2 className="self-center">Trivia</h2>
            <ul className="ml-4">
              {Texts.triviaTitles.map((triviaTitles: string, i: number) => (
                <li key={i}>
                  {triviaTitles}
                  <br />
                  {Texts.triviaParagraphs[i]}
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
      </div>
    </section>
  );
}
