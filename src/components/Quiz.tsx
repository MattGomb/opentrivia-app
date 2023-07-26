"use client";

import { useState } from "react";
import { useSearchContext } from "@/context/Context";
import he from "he";
import { TiTick } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";

const Quiz = () => {
  const { data, amount, category, difficulty } = useSearchContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const currentQuestion = data.results[currentQuestionIndex];

  const handleChoice = (answer: string) => {
    setChosenAnswer([...chosenAnswer, answer]);
    const isCorrect = answer === currentQuestion.correct_answer;
    setScore(isCorrect ? score + 1 : score);

    if (currentQuestionIndex < amount) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    console.log(currentQuestionIndex, score, amount);
  };

  return (
    <section className="mb-24 sm:p-4 w-full">
      <div className="w-full text-center">
        {!data.response_code && data.results.length === 0 && (
          <p className="bg-cyan-600 p-4 font-bold text-white tracking-wider rounded-lg text-2xl">
            Create your quiz by choosing from the options and clicking the magic
            button!
          </p>
        )}
        {data.response_code != 0 && data.results.length === 0 && (
          <p className="bg-red-500 p-4 font-bold text-white tracking-wider rounded-lg text-2xl">
            There are not enough questions in this combination, please create
            another quiz!
          </p>
        )}
        {currentQuestion &&
          currentQuestionIndex < amount &&
          data.response_code === 0 && (
            <div className="flex flex-col border border-white border-1 rounded-lg drop-shadow-lg bg-slate-700 justify-around md:justify-start md:p-5">
              <h1 className="text-xl pb-4 md:pb-0">
                {currentQuestionIndex + 1} / {amount}
              </h1>
              <div className="md:mt-4" key={currentQuestion.question}>
                {category === 0 && (
                  <p className="md:my-2 md:text-lg italic">
                    {currentQuestion.category}
                  </p>
                )}
                {difficulty === "" && (
                  <span className="md:my-2 md:text-lg italic">
                    ({currentQuestion.difficulty})
                  </span>
                )}
                <p className="mt-4 md:mt-6 p-2 md:py-0 md:text-lg md:font-bold">
                  {he.decode(currentQuestion.question)}
                </p>
                {currentQuestion.type === "boolean" ? (
                  <div className="py-2 lg:w-1/2 lg:mx-auto flex flex-wrap justify-center">
                    {[
                      currentQuestion.correct_answer,
                      ...currentQuestion.incorrect_answers,
                    ]
                      .sort()
                      .reverse()
                      .map((answer, i) => (
                        <button
                          key={i}
                          className="w-2/5 rounded-md py-2 m-2 bg-slate-200 text-black hover:bg-slate-400 hover:text-white active:bg-zinc-700"
                          onClick={() => handleChoice(answer)}
                        >
                          {answer}
                        </button>
                      ))}
                  </div>
                ) : (
                  <div className="py-2 lg:w-1/2 lg:mx-auto flex flex-wrap justify-center">
                    {[
                      ...currentQuestion.incorrect_answers,
                      currentQuestion.correct_answer,
                    ]
                      .sort()
                      .map((answer, i) => (
                        <button
                          key={i}
                          className="w-2/5 rounded-md py-2 m-2 bg-slate-200 text-black hover:bg-slate-400 hover:text-white active:bg-zinc-700"
                          onClick={() => handleChoice(answer)}
                        >
                          {he.decode(answer)}
                        </button>
                      ))}
                  </div>
                )}
              </div>
            </div>
          )}
        {currentQuestionIndex === amount && (
          <div className="border border-white border-1 rounded-lg bg-slate-700">
            <h1 className="text-2xl md:text-3xl font-bold my-4">
              Your score is {score} / {amount}!
            </h1>
            <div className="">
              {data.results.map((question, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 px-2 py-2">
                  <p className="md:col-span-2 font-semibold my-1 px-2 md:pr-5 md:text-left text-xl md:text-2xl">
                    {i + 1}. {he.decode(question.question)}
                  </p>
                  <div className="md:col-span-1 md:text-left">
                    <p className="mt-2 mb-1 md:text-lg">
                      The correct answer was:{" "}
                      <TiTick
                        color="green"
                        size={24}
                        className="inline-block"
                      />{" "}
                      {he.decode(question.correct_answer)}
                    </p>
                    {question.correct_answer === chosenAnswer[i] ? (
                      <p className="mb-1 md:text-lg">
                        Your answer was:{" "}
                        <TiTick
                          color="green"
                          size={24}
                          className="inline-block"
                        />{" "}
                        {he.decode(chosenAnswer[i])}
                      </p>
                    ) : (
                      <p className="mb-1 md:text-lg">
                        Your answer was:{" "}
                        <FaTimes
                          color="red"
                          size={24}
                          className="inline-block"
                        />{" "}
                        {he.decode(chosenAnswer[i])}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
