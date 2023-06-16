"use client";

import { useState } from "react";
import { useSearchContext } from "@/context/Context";
import he from "he";

const Quiz = () => {
  const { data, amount, category, difficulty } = useSearchContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const currentQuestion = data.results[currentQuestionIndex];

  const goToNextQuestion = () => {
    if (currentQuestionIndex < amount) {
      setCurrentQuestionIndex((i) => i + 1);
    }
  };

  const handleChoice = (answer: string) => {
    setChosenAnswer([...chosenAnswer, answer]);
    const isCorrect = answer === currentQuestion.correct_answer.toString();
    setScore(isCorrect ? score + 1 : score);
    goToNextQuestion();

    console.log(currentQuestionIndex, score, amount);
  };

  return (
    <>
      <div className="w-full text-center mt-10 p-4 border border-black border-1 rounded-lg">
        {!data.response_code && data.results.length === 0 ? (
          <p className="bg-sky-500 p-4 font-bold text-white tracking-wider rounded-lg">
            Create your quiz by choosing from the options and clicking the magic
            button!
          </p>
        ) : data.response_code != 0 && data.results.length === 0 ? (
          <p className="bg-red-500 p-4 font-bold text-white tracking-wider rounded-lg">
            There are not enough questions in this combination, please create
            another quiz!
          </p>
        ) : (
          currentQuestionIndex < amount &&
          data.response_code === 0 && (
            <div>
              <h1>
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
                          className="w-2/5 border border-black border-1 rounded-md py-2 m-2 bg-sky-600 text-white hover:bg-sky-300 hover:text-black active:bg-sky-900"
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
                          className="w-2/5 border border-black border-1 rounded-md py-2 m-2 bg-sky-600 text-white hover:bg-sky-300 hover:text-black active:bg-sky-900"
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
          <div>
            <h1 className="text-2xl font-bold my-4">
              Your score is {score} / {amount}!
            </h1>
            <div className="grid grid-cols-2">
              {data.results.map((question, i) => (
                <div key={i} className="  flex flex-col lg:mx-auto">
                  <p className="font-bold m-1 text-xl">
                    {i + 1}. {he.decode(question.question)}
                  </p>
                  <p className="mb-1">
                    The correct answer was: {he.decode(question.correct_answer)}
                  </p>
                  {question.correct_answer === chosenAnswer[i] ? (
                    <p className="mb-2">
                      Your answer was:
                      <span> correctsymbol </span>
                      {chosenAnswer[i]}
                    </p>
                  ) : (
                    <p className="mb-2">
                      Your answer was:
                      <span> wrongsymbol </span>
                      {chosenAnswer[i]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
