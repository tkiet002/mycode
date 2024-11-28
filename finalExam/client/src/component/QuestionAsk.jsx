import React from "react";

export default function QuestionAsk({questionContent}) {
  return (
    <>
      <div className="p-11 border-2 border-black rounded-xl m-2">
        <p className="max-w-7xl">
          {questionContent}
        </p>
      </div>
    </>
  );
}
