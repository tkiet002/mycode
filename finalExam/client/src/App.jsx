import React from "react";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import CreateLesson from "./page/CreateLesson";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import Practice from "./page/Practice";
import Lesson from "./page/Lesson";
import AddQuestion from "./page/AddAndEditQuestion";
import Navigation from "./page/Navigation";
import LessonEdit from "./page/LessonEdit";
import FinalResult from "./page/FinalResult";
import {AuthContext} from './helpers/AuthContext'
import { useState , useEffect} from "react";
import axios from "axios";

export default function App() {
  const [authState, setAuthState] = useState({username: "", id: 0, status: false});
  let params = {
    headers:{
      accessToken: localStorage.getItem("accessToken")
    }
  } 
  useEffect(() => {
    axios
      .post("http://localhost:3001/auth/getAuth/", params)
      .then((response) => {
        if (response.data.error) {
          alert("Bạn chưa đăng nhập");
          
        }else{
          
        }
      });
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />} />
            <Route path="/home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path="practice/lesson/:lesson_id/question/:question_id"
              element={<Practice />}
            />
            <Route path="/practice" element={<Practice />} />
            <Route path="/createLesson" element={<CreateLesson />} />
            <Route path="/lessons/" element={<Lesson />}></Route>
            {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
            {/* <Route path="/lessons/:id/createQuestion" element={<AddQuestion />} /> */}
            <Route path="/editLesson/byuser/:userid" element={<LessonEdit />} />
            
            <Route path="/editLesson/:lesson_id/byuser/:userid/" element={<AddQuestion />} />
            <Route path="/finalResult/:userid/result/:diem" element={<FinalResult />} />

          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}
