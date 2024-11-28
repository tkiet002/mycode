import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function createLesson() {
  let navigate = useNavigate();
  let {userid} = useParams();

  const initialValue = {
    lesson_name: "",
    time_limited: "",
    need_explain: false,
  };
  let params = {
    headers:{
      accessToken: localStorage.getItem("accessToken")
    }
  } 
  
  useEffect(() => {
    axios
      .post("http://localhost:3001/auth/getAuth/", params)
      .then((response) => {
        userid = response.data.id;
      });
  }, []);
  const onSubmit = (data) => {
    let params = {
      data: data,
      headers:{
        accessToken: localStorage.getItem("accessToken")
      }
    }
    
    axios.post("http://localhost:3001/lesson", params).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        console.log("Success Added to Database!");
        
        navigate(`/editLesson/byuser/${userid}`);
      }
    });
    

  };

  const validateSchema = Yup.object().shape({
    lesson_name: Yup.string().required(" Xin đừng để trống"),
    time_limited: Yup.number().required(" Xin đừng để trống"),
  });
  return (
    <div className="w-full grid justify-items-center grid-cols-1">
      <div>
        <button onClick={()=>{
          navigate('/');
        }}>Back</button>
      </div>
      <div className=" p-40 pt-20 bg-white rounded-3xl ">
        <Formik
          initialValues={initialValue}
          onSubmit={onSubmit}
          validationSchema={validateSchema}
        >
          <Form className="grid grid-cols-2 w-[750px]">
            <div className="mt-4">
              <label htmlFor="lesson_name">Tên của bài</label>
              <ErrorMessage name="lesson_name" component="span" />
            </div>
            <Field
              autoComplete="off"
              type="text"
              id="lesson_name"
              name="lesson_name"
              className="border-black border rounded-lg p-2 mt-4"
              placeholder="Tên Bài"
            ></Field>
            <div className="mt-4">
              <label htmlFor="time_limited">Giới hạn thời gian</label>
              <ErrorMessage name="time_limtited" component="span" />
            </div>
            <Field
              autoComplete="off"
              type="number"
              id="time_limited"
              name="time_limited"
              className="border-black border rounded-lg p-2 mt-4"
              placeholder="Có thể đặt bằng 0 - Không giới hạn"
            ></Field>
            <div className="mt-4">
              <label htmlFor="need_explain">Cần thêm phần giải thích</label>
              <ErrorMessage name="need_explain" component="span" />
            </div>
            <Field
              type="checkbox"
              id="need_explain"
              name="need_explain"
              className="border-black border rounded-lg p-2 mt-4 "
              
            ></Field>

            <button
              type="submit"
              className="border-black border rounded-lg p-2 mt-4 "

            >
              Tạo bài
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default createLesson;
