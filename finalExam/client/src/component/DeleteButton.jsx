import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function DeleteButton({question_id}) {
    
    
    const handleDelete = (event) =>{
        event.preventDefault();
        // console.log(question_id);
        axios.delete(`http://localhost:3001/question/api/delete/${question_id}`,{headers: {
          accessToken: localStorage.getItem("accessToken")
        }}).then(()=>{
          console.log("asdasd");
        //   navigate(`/editLesson/byuser/${userid}/`)
        })
        // window.location.reload(false);
        
      }

  return (
    <div className=" w-fit p-4 bg-white ml-[80%] mt-4 rounded-lg">
      <button onClick={handleDelete}> Xóa câu hỏi này?</button>
    </div>
  );
}
