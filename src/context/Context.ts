import { createContext, useContext } from "react";

interface ISearchContext {
  category: number;
  setCategory: (category: number) => void;
}