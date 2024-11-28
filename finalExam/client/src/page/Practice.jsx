import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Practice() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState([]);
  //let {lesson_id}  = useParams();
  const {lesson_id}  = useParams();
  const {userid} = useParams();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`http://localhost:3001/question/byId/${lesson_id}`);
        console.log(response)
        setQuestion(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  //console.log(question)
  const handleNext = () =>{
    if (index == question.length - 1) {
      setIndex[0]
    }else{
      setIndex(index + 1)
    }
    console.log(question[index])
  }
  const handlePrevious = () =>{
    if (index < 0) {
      setIndex[question.length - 1]
    }else{
      setIndex(index - 1)
    }
    console.log(question[index])
  }
  const handleSubmit = () =>{
    navigate(`/finalResult/${userid}/result/${diem}`)
  }
  let scorePerQuestion = 10/question.length;
  let diem = 0;

  const answerIsRight = (choiceId) =>{
    if (loading) {
      setTimeout(()=>{
        console.log("Hello World")
      }, 3000)
    }else{
      const choice = question[index].Question_Choices.find(c => c.choice_id === choiceId);
      return choice ? choice.is_right : false;
    }
  }

  const checkAnswer = (e, ans) =>{
    if (answerIsRight(ans)) {
      diem = diem + scorePerQuestion;
    } else {
      diem = diem;
    }
    
    if (!index == question.length - 1) {
      console.log("CheckAnswer")
      handleNext();
    }else{
      handleSubmit();
    }
  }

  
  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="bg-slate-800 w-full h-full text-white p-5">
          <h1>QuizThis</h1>
          <div className="mt-4">
            <div className="bg-slate-500 p-4 rounded-3xl h-96 text-">
              <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-screen-lg lg:px-8">
                <h1 className="flex justify-center text-3xl">
                  {" "}
                  {question[index].question_text}
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="bg-slate-500 p-4 rounded-3xl h-80 ">
              <div className="grid grid-cols-4 w-full h-full">
                <div
                  className="border border-white m-10 content-center rounded-lg p-10 cursor-pointer"
                  onClick={(e) =>
                    checkAnswer(
                      e,
                      question[index].Question_Choices[0].choice_id
                    )
                  }
                >
                  <h1 className="">
                    {" "}
                    {question[index].Question_Choices[0].choice_text}
                  </h1>
                </div>
                <div
                  className="border border-white m-10 content-center rounded-lg p-10 cursor-pointer"
                  onClick={(e) =>
                    checkAnswer(
                      e,
                      question[index].Question_Choices[1].choice_id
                    )
                  }
                >
                  <h1 className="">
                    {question[index].Question_Choices[1].choice_text}
                  </h1>
                </div>
                <div
                  className="border border-white m-10 content-center rounded-lg p-10 cursor-pointer"
                  onClick={(e) =>
                    checkAnswer(
                      e,
                      question[index].Question_Choices[2].choice_id
                    )
                  }
                >
                  <h1 className="">
                    {question[index].Question_Choices[2].choice_text}
                  </h1>
                </div>
                <div
                  className="border border-white m-10 content-center rounded-lg p-10 cursor-pointer"
                  onClick={(e) =>
                    checkAnswer(
                      e,
                      question[index].Question_Choices[3].choice_id
                    )
                  }
                >
                  <h1 className="">
                    {question[index].Question_Choices[3].choice_text}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-slate-500 rounded-3xl border ">
              <div className="">
                <div className="content-center p-6 ">
                  {index >= 0 ? (
                    <>
                      <button className="w-fit p-4 rounded-md border-white border static">
                        Previous
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                  {index === question.length - 1 ? (
                    <button
                      className="w-fit p-4 rounded-md border-white border float-end"
                      onClick={handleSubmit}
                    >
                      Nộp bài
                    </button>
                  ) : (
                    <button
                      className="w-fit p-4 rounded-md border-white border float-end"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
