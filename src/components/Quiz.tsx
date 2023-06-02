import React from 'react';
import axios from "axios";

type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type ApiResponse = {
  response_code: number;
  results: Question[];
};

const Quiz = () => {

  const fetchQuiz = async () => {
    const res = await axios.get<ApiResponse>('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    const data = res.data

  return (
    <div>Quiz</div>
  )
}
}

export default Quiz