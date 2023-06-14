"use client";

import { useSearchContext } from "@/context/Context";

const Quiz = () => {
  const { data } = useSearchContext();

// We need a way to properly display quotes and stuff in the questions and answers.
  return (
    <>
      <h1 className="text-2xl">Quiz</h1>
      <div>
        {/* If data is not yet fetched, display loading message, fix this later */
        data.response_code != 0 ? (
          <p>There are no 10 questions in this combination, please put together another one!</p>
        ) : (
        data.results.map((question) => (
          <div className="my-4">
            <p key={question.question} className="my-2">
              {question.question}
            </p>
            {/* If question type is "multiple" display correct answer and incorrect array in random order
                If question type is "boolean" just display true and false buttons */}
            <p>{question.correct_answer}</p>
            {question.incorrect_answers.map((answer) => (
              <p>{answer}</p>
            ))}
          </div>
        )))}
      </div>
    </>
  );
};

export default Quiz;
