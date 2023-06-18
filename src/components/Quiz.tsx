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

  // let's change the nested ternaries to something more readable

  return (
    <section className="mb-24 p-4">
      <div className="w-full text-center">
        {!data.response_code && data.results.length === 0 ? (
          <p className="bg-cyan-600 p-4 font-bold text-white tracking-wider rounded-lg text-2xl">
            Create your quiz by choosing from the options and clicking the magic
            button!
          </p>
        ) : data.response_code != 0 && data.results.length === 0 ? (
          <p className="bg-red-500 p-4 font-bold text-white tracking-wider rounded-lg text-2xl">
            There are not enough questions in this combination, please create
            another quiz!
          </p>
        ) : (
          currentQuestionIndex < amount &&
          data.response_code === 0 && (
            <div className="border border-white border-1 rounded-lg drop-shadow-lg bg-slate-700">
              <h1 className="m-4 text-xl">
                {currentQuestionIndex + 1} / {amount}
              </h1>
              <div className="mt-4 mb-8" key={currentQuestion.question}>
                {category === 0 && (
                  <p className="my-2 text-lg italic">
                    {currentQuestion.category}
                  </p>
                )}
                {difficulty === "" && (
                  <span className="my-2 text-lg italic">
                    ({currentQuestion.difficulty})
                  </span>
                )}
                <p className="my-2 text-lg font-bold">
                  {he.decode(currentQuestion.question)}
                </p>
                {currentQuestion.type === "boolean" ? (
                  <div className="lg:w-1/2 lg:mx-auto flex flex-wrap justify-center">
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
                  <div className="lg:w-1/2 lg:mx-auto flex flex-wrap justify-center">
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
          )
        )}
        {currentQuestionIndex === amount && (
          <div className="border border-white border-1 rounded-lg bg-slate-700">
            <h1 className="text-3xl font-bold my-4">
              Your score is {score} / {amount}!
            </h1>
            <div className="grid lg:grid-cols-2">
              {data.results.map((question, i) => (
                <div key={i} className="flex flex-col lg:mx-auto">
                  <p className="font-bold m-1 text-2xl">
                    {i + 1}. {he.decode(question.question)}
                  </p>
                  <p className="m-1 text-lg">
                    The correct answer was:{" "}
                    <TiTick color="green" size={24} className="inline-block" />{" "}
                    {he.decode(question.correct_answer)}
                  </p>
                  {question.correct_answer === chosenAnswer[i] ? (
                    <p className="mb-3 mt-2 text-lg">
                      Your answer was:{" "}
                      <TiTick
                        color="green"
                        size={24}
                        className="inline-block"
                      />{" "}
                      {he.decode(chosenAnswer[i])}
                    </p>
                  ) : (
                    <p className="mb-3 mt-2 text-lg">
                      Your answer was:{" "}
                      <FaTimes color="red" size={24} className="inline-block" />{" "}
                      {he.decode(chosenAnswer[i])}
                    </p>
                  )}
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
