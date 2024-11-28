import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";
import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setUsername_Password] = useState();
  const {setAuthState} = useContext(AuthContext)

  
  const initialValue = {
    username: "",
    user_password: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      
      if (response.data.error) {
        alert(response.data.error)
      }else{
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({username: response.data.username, id: response.data.id, status: true});
        navigate("/home")
      }
      
      // navigate(`/editLessons`)
    });
    

  };

  const validateSchema = Yup.object().shape({
    username: Yup.string().required(" Xin đừng để trống"),
    user_password: Yup.string().required(" Xin đừng để trống"),
  });


  return (
    <>
      <div className="grid grid-cols-2 bg-black w-screen h-screen p-24">
        <div className="col-span-1 p-72">
          <img src="./src/assets/logoForWeb-DarkTheme.png" alt="img-logo" />
        </div>
        <div className="col-span-1 p-40 pt-20 bg-white rounded-3xl ">
          <div id="login-with" className="grid grid-cols-2 pb-20">
            <button className="border-black border rounded-lg p-2 mt-4 m-2 grid grid-cols-2">
              <span className="col-span-1">
                <img
                  src="./src/assets/google.png"
                  alt="google"
                  className="w-10 h-10 ml-10"
                />
              </span>
              <span className="col-span-1 p-2">
                <p className="ml-[-6.5rem]">Google</p>
              </span>
            </button>
            <button className="border-black border rounded-lg p-2 mt-4 m-2 grid grid-cols-2">
              <span className="col-span-1">
                <img
                  src="./src/assets/facebook.png"
                  alt="google"
                  className="w-10 h-10 ml-10"
                />
              </span>
              <span className="col-span-1 p-2">
                <p className="ml-[-6.5rem]">Facebook</p>
              </span>
            </button>
          </div>
          <Formik
            initialValues={initialValue}
            validationSchema={validateSchema}
            onSubmit={onSubmit}
          >
            <Form method="post" className="grid grid-cols-1 ">
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                className="border-black border rounded-lg p-2"
              />
              <label htmlFor="lname">Password:</label>
              <Field
                type="password"
                id="user_password"
                name="user_password"
                className="border-black border rounded-lg p-2"
              />
              <Field
                type="submit"
                id="submit"
                name="submit"
                value="Login"
                className="border-black border rounded-lg p-2 w-24 mt-4"
              />
            </Form>
          </Formik>
          <div className="grid justify-items-center mt-10">
            <Link to="/signup">
              Chưa có tài khoản?{" "}
              <span className="border-b-2 border-blue-800">Đăng ký ngay</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
