"use client";

import { useState } from "react";
import { SearchContext } from "./Context";
import axios from "axios";
import { ApiResponse, IProps } from "../components/Types";

const SearchContextProvider = ({ children }: IProps) => {
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
    
  const [data, setData] = useState<ApiResponse>({
    response_code: 0,
    results: [],
  });

  const fetchQuiz = async () => {
    const res = await axios.get<ApiResponse>(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
    const data = res.data;
    setData(data);

    console.log(data, res.config.url);
  };

  const defineAmount = (amount: number) => {
    setAmount(amount);
  };

  const defineCategory = (category: number) => {
    setCategory(category);
  };

  const defineDifficulty = (difficulty: string) => {
    setDifficulty(difficulty);
  };

  const defineType = (type: string) => {
    setType(type);
  };

  return (
    <SearchContext.Provider
      value={{
        data,
        amount,
        category,
        difficulty,
        type,
        defineAmount,
        defineCategory,
        defineDifficulty,
        defineType,
        fetchQuiz,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
