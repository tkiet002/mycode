import Homepage from "./pages/Homepage";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./helpers/AuthContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Dashboard } from "@mui/icons-material";
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
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}