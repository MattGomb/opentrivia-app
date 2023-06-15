"use client";

import { useSearchContext } from "@/context/Context";
import React from "react";

const Select = () => {
  const {
    data,
    amount,
    defineAmount,
    category,
    defineCategory,
    difficulty,
    defineDifficulty,
    type,
    defineType,
    fetchQuiz,
  } = useSearchContext();

  return (
    <>
      <h1 className="text-3xl">
        Put together the quiz you would like to solve!
      </h1>
      <div className="flex flex-col md:flex-row my-4 gap-5">
        <div>
          <label htmlFor="amount" className="py-2">
            Amount
          </label>
          <select
            name="amount"
            id="amount"
            className="p-1 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={amount}
            onChange={(e) => defineAmount(+e.target.value)}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div>
          <label htmlFor="category" className="py-2">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="p-1 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={category}
            onChange={(e) => defineCategory(+e.target.value)}
          >
            <option value={0}>Any Category</option>
            <option value={9}>General Knowledge</option>
            <option value={10}>Entertainment: Books</option>
            <option value={11}>Entertainment: Film</option>
            <option value={12}>Entertainment: Music</option>
            <option value={13}>Entertainment: Musicals &amp; Theatres</option>
            <option value={14}>Entertainment: Television</option>
            <option value={15}>Entertainment: Video Games</option>
            <option value={16}>Entertainment: Board Games</option>
            <option value={17}>Science &amp; Nature</option>
            <option value={18}>Science: Computers</option>
            <option value={19}>Science: Mathematics</option>
            <option value={20}>Mythology</option>
            <option value={21}>Sports</option>
            <option value={22}>Geography</option>
            <option value={23}>History</option>
            <option value={24}>Politics</option>
            <option value={25}>Art</option>
            <option value={26}>Celebrities</option>
            <option value={27}>Animals</option>
            <option value={28}>Vehicles</option>
            <option value={29}>Entertainment: Comics</option>
            <option value={30}>Science: Gadgets</option>
            <option value={31}>
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value={32}>Entertainment: Cartoon &amp; Animations</option>
          </select>
        </div>
        <div>
          <label htmlFor="difficulty" className="py-2">
            Difficulty
          </label>
          <select
            name="difficulty"
            id="difficulty"
            className="p-1 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={difficulty}
            onChange={(e) => defineDifficulty(e.target.value)}
          >
            <option value={""}>Any Difficulty</option>
            <option value={"easy"}>Easy</option>
            <option value={"medium"}>Medium</option>
            <option value={"hard"}>Hard</option>
          </select>
        </div>
        <div>
          <label htmlFor="type" className="py-2">
            Type
          </label>
          <select
            name="type"
            id="type"
            className="p-1 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={type}
            onChange={(e) => defineType(e.target.value)}
          >
            <option value={""}>Any Type</option>
            <option value={"multiple"}>Multiple Choice</option>
            <option value={"boolean"}>True / False</option>
          </select>
        </div>
      </div>
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={() => {
          fetchQuiz(data.response_code, []),
            console.log(
              `nr of questions: ${amount}, `,
              `id of category (0 if any): ${category}, `,
              `difficulty (empty if any): ${difficulty}, `,
              `question type (empty if any): ${type} `
            );
        }}
      >
        Get me a Quiz!
      </button>
    </>
  );
};

export default Select;
