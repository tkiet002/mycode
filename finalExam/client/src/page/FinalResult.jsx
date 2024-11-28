import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function FinalResult({nameOfQuestion}) {
  let {diem} = useParams()
  let navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-1 p-40 pl-[40rem] pr-[40rem]">
        <h1 className="grid justify-items-center">Your Final Result of Latest Attempt</h1>
        <div className="grid grid-cols-2 ">
          <div className="col-span-1 grid justify-items-start">
            <div>
              <p>Tổng câu hỏi:</p>
            </div>
            <div className="">
              <p>Số câu trả lời đúng:</p>
            </div>

            <div>
              <p>Điểm:</p>
            </div>
            <div className="col-span-1 grid justify-items-start">
              <button>Làm lại</button>
            </div>
          </div>
          <div className="grid justify-items-end">
            <div>
              <p>2</p>
            </div>
            <div className="">
              <p>{diem}</p>
            </div>

            <div>
              <p>{diem}</p>
            </div>
            <div className=" grid justify-items-end">
              <button onClick={()=>{
                navigate("/lessons")
              }}>Quay lại trang trủ</button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default FinalResult;