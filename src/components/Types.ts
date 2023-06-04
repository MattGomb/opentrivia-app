import { ReactNode } from "react";

export enum categoryList {
  "Any Category",
  "General Knowledge" = 9,
  "Entertainment: books",
  "Entertainment: film",
  "Entertainment: music",
  "Entertainment: musicals & theatres",
  "Entertainment: television",
  "Entertainment: video games",
  "Entertainment: board games",
  "Science & nature",
  "Science: computers",
  "Science: mathematics",
  "Mythology",
  "Sports",
  "Geography",
  "History",
  "Politics",
  "Art",
  "Celebrities",
  "Animals",
  "Vehicles",
  "Entertainment: comics",
  "Science: gadgets",
  "Entertainment: Japanese anime & manga",
  "Entertainment: cartoon & animations",
}

export enum difficultyList {
  "Any Difficulty",
  "Easy" = "easy",
  "Medium" = "medium",
  "Hard" = "hard",
}

export enum typeList {
  "Any Type",
  "Multiple Choice" = "multiple",
  "True / False" = "boolean",
}

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type ApiResponse = {
  response_code: number;
  results: Question[];
};

export interface IProps {
  children: ReactNode;
}