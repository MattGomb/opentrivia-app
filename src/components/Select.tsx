import { useSearchContext } from "@/context/Context";
import React from "react";

const Select = () => {
  // Put here the context logic for the three variables
  // Create onChange events for the three select elements to update the context0
  const { category, defineCategory } = useSearchContext();
  const { difficulty, defineDifficulty } = useSearchContext();
  const { type, defineType } = useSearchContext();
  
  return (
    <>
      <h1>Put together the quiz you would like to solve!</h1>
      <div className="flex my-4 gap-5">
        <div>
          <label htmlFor="category" className="p-2">Category</label>
          <select name="category" id="category" value={category} onChange={(e) => defineCategory(+e.target.value)}>
            <option value="any" selected>Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
          </select>
        </div>
        <div>
          <label htmlFor="difficulty" className="p-2">Difficulty</label>
          <select name="difficulty" id="difficulty" value={difficulty} onChange={(e) => defineDifficulty(e.target.value)}>
            <option value="any" selected>Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label htmlFor="type" className="p-2">Type</label>
          <select name="type" id="type" value={type} onChange={(e) => defineType(e.target.value)}>
            <option value="any" selected>Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Select;
