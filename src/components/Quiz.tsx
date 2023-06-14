"use client";

import { useSearchContext } from "@/context/Context";

const Quiz = () => {
  const { data } = useSearchContext();

  return (
    <>
      <h1 className="text-2xl">Quiz</h1>
      <div>
        {
          /* If data is not yet fetched, display loading message, fix this later */
          data.response_code != 0 ? (
            <p>
              There are not enough questions in this combination, please create
              another quiz!
            </p>
          ) : (
            data.results.map((question) => (
              <div className="my-4" key={question.question}>
                <p className="my-2">{question.question}</p>
                {/* If question type is "multiple" display correct answer and incorrect array in random order
                If question type is "boolean" just display true and false buttons */}
                <p>{question.correct_answer}</p>
                {question.incorrect_answers.map((answer) => (
                  <p>{answer}</p>
                ))}
              </div>
            ))
          )
        }
      </div>
    </>
  );
};

export default Quiz;
