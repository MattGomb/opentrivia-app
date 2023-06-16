"use client";

import { useState } from "react";
import { useSearchContext } from "@/context/Context";
import he from "he";

const Quiz = () => {
  const { data, amount, category, difficulty } = useSearchContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <>
      <div className="w-full text-center mt-10 p-4 border border-black border-1 rounded-lg">
        {
          /* If data is not yet fetched, display loading message, fix this later */
          data.results.length === 0 ? (
            <p>
              Create your quiz by choosing from the options and clicking the
              magic button!
            </p>
          ) : data.response_code != 0 ? (
            <p>
              There are not enough questions in this combination, please create
              another quiz!
            </p>
          ) : (
            <div>
              <h1>
                {currentQuestionIndex + 1} / {amount}
              </h1>
              {data.results.map((question) => (
                <div className="mt-4 mb-8" key={question.question}>
                  {category === 0 ? (
                    <div>
                      <p className="my-2 text-lg italic">
                        {question.category} -
                      </p>
                      <p className="my-2 text-lg font-bold">
                        {he.decode(question.question)}
                      </p>
                    </div>
                  ) : (
                    <p className="my-2 text-lg font-bold">
                      {he.decode(question.question)}
                    </p>
                  )}
                  {question.type === "boolean" ? (
                    <div className="lg:w-1/2 lg:mx-auto flex flex-wrap justify-center">
                      {[question.correct_answer, ...question.incorrect_answers]
                        .sort()
                        .reverse()
                        .map((answer, i) => (
                          <button
                            key={i}
                            className="w-2/5 border border-black border-1 rounded-md py-2 m-2 bg-sky-600 text-white hover:bg-sky-300 hover:text-black active:bg-sky-900"
                          >
                            {answer}
                          </button>
                        ))}
                    </div>
                  ) : (
                    <div className="lg:w-1/2 lg:mx-auto flex flex-wrap justify-center">
                      {[...question.incorrect_answers, question.correct_answer]
                        .sort()
                        .map((answer, i) => (
                          <button
                            key={i}
                            className="w-2/5 border border-black border-1 rounded-md py-2 m-2 bg-sky-600 text-white hover:bg-sky-300 hover:text-black active:bg-sky-900"
                          >
                            {he.decode(answer)}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        }
      </div>
    </>
  );
};

export default Quiz;
