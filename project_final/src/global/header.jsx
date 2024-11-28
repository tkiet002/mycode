
import React from 'react'
import GetWindows from './GetWindows';
import { useNavigate } from 'react-router';

export default function header() {
  var window = GetWindows();
  let navigate = useNavigate();

  return (
    <>
      <header className="p-4 flex justify-between items-center border-b-2">
        <div className="text-2xl font-bold cursor-pointer" onClick={()=>{
          navigate("/")
        }}>Recommendr</div>

        <button className="bg-gray-700 px-4 py-2 rounded text-white">
          Sign In
        </button>
      </header>
    </>
  );
}
