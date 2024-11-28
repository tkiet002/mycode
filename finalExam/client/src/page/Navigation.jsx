import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'

function Navigation() {
  let navigate = useNavigate();
  let lesson_id = useParams();
  const [userState, setUserState] = useState();
  let params = {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  }; 
  
  useEffect(() =>{
    axios.post("http://localhost:3001/auth/getAuth/", params).then((response) => {
      setUserState(response.data.id);
    });
  },[])
  let userid = userState;
  return (
    <div className='grid grid-cols-1'>
        <button
              type="submit"
              className="border-black border rounded-lg p-2 mt-4 "
              onClick={() =>{
                navigate("/createLesson")
              }}
            >
              Thêm Bài Tập Mới
            </button>
            <button
              type="submit"
              className="border-black border rounded-lg p-2 mt-4 "
              onClick={() =>{
                navigate(`/editLesson/byuser/${userid}`)
              }}
            >
              Chỉnh sửa bài tập
            </button>
            <button
              type="submit"
              className="border-black border rounded-lg p-2 mt-4 "
              onClick={() =>{
                navigate(`/lessons`)
              }}
            >
              Làm bài
            </button>
            {/* <button
              type="submit"
              className="border-black border rounded-lg p-2 mt-4 "
            >
              Tạo bài
            </button>
            <button
              type="submit"
              className="border-black border rounded-lg p-2 mt-4 "
            >
              Tạo bài
            </button> */}

    </div>
  )
}

export default Navigation