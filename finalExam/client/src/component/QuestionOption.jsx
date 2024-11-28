import { Field } from "formik";
import { useState } from "react";
import React from "react";

export default function QuestionOption({ opt, content, choice_id }) {
  return (
    // <button
    //   onClick={() => handleButtonClick(opt)}
    // >
    //   <div
    //     className={`p-11 border-2 border-black rounded-xl m-2 btn ${selected}`}
    //   >
    //     <p className="max-w-7xl">
    //       {opt}. {content}
    //     </p>
    //   </div>
    // </button>
    <>
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white m-2">
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id={opt}
              type="radio"
              value={choice_id}
              name="list-radio"
              className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor={opt}
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {content}
            </label>
          </div>
        </li>
      </ul>
    </>
  );
}
