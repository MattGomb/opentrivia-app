"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Question, ApiResponse } from "./Types";

/* The full api: https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}
The base api : https://opentdb.com/api.php?amount=${amount}
If category !="Any Category" api = base+&category=${category}
If difficulty !="Any Difficulty" api = base+&difficulty=${difficulty}
If type !="Any Type" api = base+&type=${type}
*/
const baseApi = "https://opentdb.com/api.php?amount=10";

const Quiz = () => {
  const [data, setData] = useState<ApiResponse>({
    response_code: 0,
    results: [],
  });

  const fetchQuiz = async () => {
    const res = await axios.get<ApiResponse>(baseApi);
    const data = res.data;
    setData(data);

    console.log(data.results);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <>
      <h1>Quiz</h1>
      <div>
        {data.results.map((question) => (
          <div className="my-4">
            <p key={question.question} className="my-2">
              {question.question}
            </p>
            <p>{question.correct_answer}</p>
            {question.incorrect_answers.map((answer) => (
              <p>{answer}</p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Quiz;
