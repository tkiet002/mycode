import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
function Lesson() {

  let params = {
    headers:{
      accessToken: localStorage.getItem("accessToken")
    }
  } 
  
  
  let {userid} = useParams();
  const [listOfLesson, setListOfLessons] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3001/lesson/`).then((response) => {
      console.log(response.data)
      setListOfLessons(response.data);
    });
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="p-4">Bài tập đã tạo</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {listOfLesson.map((value, key) => {
            return (
              <div
                key={value.lesson_id}
                onClick={() => {
                    navigate(`/practice/lesson/${value.lesson_id}/question/${!value.Questions.length >= 1 ? (undefined): (value.Questions[0].question_id)}`)
                }}
                className="group  border border-neutral-600 h-full rounded-md p-4 cursor-pointer"
              >
                <div className="aspect-h-1 aspect-w-1 w-full h-40 overflow-hidden rounded-lg bg-yellow-400 xl:aspect-h-8 xl:aspect-w-7"></div>
                <h3 className="mt-4 font-normal  text-gray-900">
                  {value.lesson_name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Lesson;
