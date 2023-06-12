'use client'

import { createContext, useContext } from "react";

// If we want to have the fetch in the context, we need to add 'data' to the interface, data is an object of {response_code: 0, results: Array(10)}

interface ISearchContext {
  category: number;
  defineCategory: (category: number) => void;
  difficulty: string;
  defineDifficulty: (difficulty: string) => void;
  type: string;
  defineType: (type: string) => void;
}

export const SearchContext = createContext<ISearchContext>({
  category: 9,
  defineCategory(category) {},
  difficulty: "",
  defineDifficulty(difficulty) {},
  type: "",
  defineType(type) {},
});

export const useSearchContext = () => useContext(SearchContext);