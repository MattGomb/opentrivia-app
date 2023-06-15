"use client";

import { useSearchContext } from "@/context/Context";

const Quiz = () => {
  const { data } = useSearchContext();

  return (
    <>
      <h1 className="text-2xl">Quiz</h1>
      <div className="w-full text-center">
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
            data.results.map((question) => (
              <div className="mt-4 mb-8" key={question.question}>
                <p className="my-2 text-lg font-bold">{question.question}</p>
                {question.type === "boolean" ? (
                  <div className="flex flex-wrap justify-center">
                    {[question.correct_answer, ...question.incorrect_answers]
                      .sort()
                      .reverse()
                      .map((answer, i) => (
                        <p key={i} className="w-2/5 border border-black border-1 rounded-md py-2 m-2">{answer}</p>
                      ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap justify-center">
                    {[...question.incorrect_answers, question.correct_answer]
                      .sort()
                      .map((answer, i) => (
                        <p key={i} className="w-2/5 border border-black border-1 rounded-md py-2 m-2">{answer}</p>
                      ))}
                  </div>
                )}
              </div>
            ))
          )
        }
      </div>
    </>
  );
};

export default Quiz;
