import { createContext, useContext } from "react";

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