import React from "react";
import QuestionSelectorOpt from "./QuestionSelectorOpt";
export default function QuestionSelector({number}){
  const rows = [];
  for (let i = 1; i <= number; i++) {
    rows.push(<QuestionSelectorOpt key={i} questionNumber={i}/>);   
  }

  return (
    <>
      <div className="border-black border-4 rounded-xl p-3 m-2">
        <div className="grid grid-cols-5  max-w-7xl ">
          {rows} 
        </div>
        <div className="flex justify-end">
          <input type="submit" className="bg-white w-28 h-10 rounded-xl mr-4 border-2 border-black mt-4" value={"Nộp Bài"}>
            
          </input>
        </div>
      </div>
    </>
  );
}
