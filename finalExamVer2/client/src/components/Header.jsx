import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import axios from "axios";
export default function Header() {
  const {authState} = useContext(AuthContext);
  const {setAuthState} = useContext(AuthContext);
  let params = {
    headers:{
      accessToken: localStorage.getItem("accessToken")
    }
  } 
  
  
  useEffect(() =>{
    axios.post("http://localhost:3001/auth/getAuth/", params).then((response) => {
      
      if (response.data.error) {
        setAuthState({ username: "", id: 0, status: false });
        
      } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        
      }
    });
  },[])
  
  const logout = () =>{
    localStorage.removeItem("accessToken");
    setAuthState({
      username: "", id: 0, status: false
    });
  }
  
  return (
    <>
      <div className="w-full min-w-full h-fit p-3 pl-32 pr-32 static grid grid-cols-5 gap-4 border-b-8 ">
        <div className="grid grid-cols-4 h-fit col-span-3">
          <div className="logo-container col-span-1 ml-2 w-auto h-auto p-2 mt-2">
            <Link to="/">
              <img
                src="src/assets/logoForWeb.png"
                className=" min-h-35 min-w-40"
              />
            </Link>
          </div>
          <div className="col-span-3 mt-6 ml-2 w-auto ">
            <button className=" w-28 h-10 rounded-3xl mr-4  min-w-max">
              Trang trủ
            </button>
            <Link to="/dashboard" className="m-2">
              Bài học của bạn
            </Link>
            <TextField
              id="outlined-start-adornment"
              label="Tìm khóa học"
              variant="outlined"
              size="small"
              className="w-auto min-w-30"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className="mt-6 col-span-2 ">
          {!authState.status ? (
            <>
              <Link
                to="/signup"
                className="bg-white w-28 h-10 rounded-3xl mr-4 float-end"
              >
                Đăng ký
              </Link>
              <Link
                to="/login"
                className="bg-white w-28 h-10 rounded-3xl mr-4  float-end"
              >
                Đăng nhập
              </Link>
            </>
          ) : (
            <>
              <Link to="/ " className="bg-white w-28 h-10 p-2 mr-4  float-end border-l-2 border-black">Hello {authState.username}</Link>
              <Link to="/" className="bg-white w-fit h-10 p-2 mr-4 float-end border-l-2 border-black">Đến danh sách bài làm?</Link>
              <button onClick={logout} className="bg-white w-fit p-2 h-10  mr-4 float-end border-l-2 border-black">Đăng xuất</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
