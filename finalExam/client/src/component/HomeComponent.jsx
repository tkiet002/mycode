import React from "react";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="bg-[url('src/assets/wall_thump.png')] w-full h-[900px] min-h-full bg-no-repeat bg-cover p-80">
        <h1 className="text-white text-5xl max-w-[35rem] leading-normal mb-5">
          <span className="font-bold">Thẻ ghi nhớ,</span> công cụ học tập{" "}
          <span className="font-semibold"> và các lời giải từ chuyên gia</span>
        </h1>
        <p className="text-white text-xl max-w-[35rem] leading-normal mb-5">
          Giúp bạn bứt phá tiềm năng bản thân
        </p>
        <button className="bg-white w-36 h-16 rounded-xl p-3 float-start mb-5">
          Đăng ký ngay!
        </button>
      </div>
    </>
  );
}
