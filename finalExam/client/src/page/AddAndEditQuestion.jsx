import React, { useState, useEffect } from "react";
import Question from "../component/Question";
import AddNewQuestion from "../component/AddNewQuestion";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Field, ErrorMessage, FieldArray , Form, useFormikContext} from "formik";
export default function AddQuestion() {
  const formik = useFormikContext();
  let { question_id } = useParams();
  let {lesson_id} = useParams();
  const [listOfQuestions, setListOfQuestions] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3001/question/byId/${lesson_id}`).then((response) => {
      setListOfQuestions(response.data)
    });
  }, []);
  return (
    <>
    <div>
        <button onClick={()=>{
          navigate('/');
        }}>Back</button>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <form >
            {listOfQuestions.map((value, key) => {
              return (
                <div key={key} className="p-2">
                  <Question
                    index={key + 1}
                    ques={value.question_text}
                    optA={value.Question_Choices[0].choice_text}
                    optB={value.Question_Choices[1].choice_text}
                    optC={value.Question_Choices[2].choice_text}
                    optD={value.Question_Choices[3].choice_text}
                    in_edit_mode={true}
                    question_id = {value.question_id}
                  />
                </div>
              );
            })}
          </form>
        </div>
        <div className="col-span-1">
          <AddNewQuestion />
        </div>
      </div>
    </>
  );
}
