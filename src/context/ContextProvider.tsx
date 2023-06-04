"use client";

import { useState } from "react";
import { SearchContext } from "./Context";
import axios from "axios";
import { ApiResponse, IProps } from "../components/Types";


/* The full api: https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}
The base api : https://opentdb.com/api.php?amount=${amount}
If category !="Any Category" api = base+&category=${category}
If difficulty !="Any Difficulty" api = base+&difficulty=${difficulty}
If type !="Any Type" api = base+&type=${type}
*/
const baseApi = "https://opentdb.com/api.php?amount=10";

const SearchContextProvider = ({ children }: IProps) => {
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
/*   const [data, setData] = useState<ApiResponse>({
    response_code: 0,
    results: [],
  });

  const fetchQuiz = async () => {
    const res = await axios.get<ApiResponse>(baseApi);
    const data = res.data;
    setData(data);

    console.log(data.results);
  }; */

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
        category,
        difficulty,
        type,
        defineCategory,
        defineDifficulty,
        defineType,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
