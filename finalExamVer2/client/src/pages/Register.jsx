import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let navigate = useNavigate();
  const initialValue = {
    name: "",
    username:"",
    password: "",
    repassword: "",
    email: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/register", data).then((response) => {
      console.log("Success Added to Database!");
      console.log(response.data)
      navigate(`/`)
    });
    

  };

  const validateSchema = Yup.object().shape({
    name: Yup.string().required(" Xin đừng để trống"),
    username: Yup.string().required(" Xin đừng để trống"),
    password: Yup.string().required(" Xin đừng để trống"),
    repassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password không giống'),
    email: Yup.string().required(" Xin đừng để trống"),
  });


  return (
    <>
      <div className="grid grid-cols-2 bg-black w-screen h-screen p-24">
        <div className="col-span-1 p-72">
          <img src="./src/assets/logoForWeb-DarkTheme.png" alt="img-logo" />
        </div>
        <div className="col-span-1 p-40 pt-20 bg-white rounded-3xl ">
          <Formik
            validationSchema={validateSchema}
            initialValues={initialValue}
            onSubmit={onSubmit}
          >
            <Form method="post" className="grid grid-cols-1 ">
              <label htmlFor="name">Họ và tên:</label>
              <ErrorMessage name="name" component="span" />
              <Field
                type="text"
                id="name"
                name="name"
                className="border-black border rounded-lg p-2"
              />
              <label htmlFor="username">Tên Đăng Nhập:</label>
              <ErrorMessage name="username" component="span" />
              <Field
                type="text"
                id="username"
                name="username"
                className="border-black border rounded-lg p-2"
              />
              <label htmlFor="password">Mật khẩu:</label>
              <ErrorMessage name="password" component="span" />
              <Field
                type="password"
                id="password"
                name="password"
                className="border-black border rounded-lg p-2"
              />
              <label htmlFor="repassword">Nhập lại mật khẩu:</label>
              <ErrorMessage name="repassword" component="span" />
              <Field
                type="password"
                id="repassword"
                name="repassword"
                className="border-black border rounded-lg p-2"
              />
              <label htmlFor="email">Email người dùng:</label>
              <ErrorMessage name="email" component="span" />
              <Field
                type="text"
                id="email"
                name="email"
                className="border-black border rounded-lg p-2"
              />
              <Field
                type="submit"
                value="Đăng ký"
                id="submitbutton"
                name="submitbutton"
                className="border-black border rounded-lg p-2 w-24 mt-4"
              />
            </Form>
          </Formik>
          <div className="grid justify-items-center mt-10">
            <Link to="/login">
              Đã có tài khoản?{" "}
              <span className="border-b-2 border-blue-800">Đăng nhập nào</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
