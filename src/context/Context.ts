'use client'

import { createContext, useContext } from "react";
import { ISearchContext } from "@/components/Types";

export const SearchContext = createContext<ISearchContext>({
  data: {
    response_code: 0,
    results: [],
  },
  amount: 10,
  defineAmount(amount) { },
  category: 0,
  defineCategory(category) { },
  difficulty: "",
  defineDifficulty(difficulty) { },
  type: "",
  defineType(type) { },
  fetchQuiz: (response_code: number, results: [],) => Promise.resolve({ response_code, results }),
});

export const useSearchContext = () => useContext(SearchContext);