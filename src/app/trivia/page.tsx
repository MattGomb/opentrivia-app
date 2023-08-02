import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";

const Trivia = () => {
  return (
    <section className="prose prose-headings:text-white prose-li:text-white max-w-none">
      <Link href="/" className="flex justify-center p-2">
          <TiArrowBack size={42} className=" text-white border-solid border-2 hover:border-dashed p-1 rounded-md"/>
      </Link>
      <h1>Did you know?</h1>
      <article>
        <h2>Trivia</h2>
        <ul>
          <li>
            Origin of the Word &quot;Quiz&quot;:<br/>The word &quotquiz&quot is
            believed to have originated in the late 18th century in Dublin,
            Ireland. It was used as a term for a practical joke or hoax. Over
            time, its meaning evolved to include the idea of testing
            someone&apos;s knowledge with questions.
          </li>
        </ul>
      </article>
      <article className="">
        <h2>Quiz</h2>
      </article>
    </section>
  );
};

export default Trivia;
