import React from 'react'

export default function Footer() {
  return (
    <footer className="p-32 bg-slate-900 text-white">
        <div className="grid grid-cols-4">
          <div className="col-span-3 text-3xl">
            <h1 className="border-b-2 w-fit">Giới thiệu</h1>
            <p className="max-w-[40rem] text-lg pt-5">
              Thành lập năm 2024, chúng tôi mong muốn tạo ra một môi trường cho
              mọi người học tập và phát triển bản thân. Bản thân chúng tôi cũng
              từng là học sinh, nên chúng tôi hiểu hơn bao giờ hết về mong muốn
              có một môi trường ôn tập các kiến thức và kiểm tra lại bản thân.
              Và chúng tôi ở đây để làm điều đó.
            </p>
          </div>
          <div className="col-span-1 text-3xl">
            <h1 className="border-b-2 w-fit">Thông tin liên hệ</h1>
            <p className="max-w-[40rem] text-lg pt-5">
              🌐 434, Nguyễn Tất Thành, Thành phố Hồ Chí Minh
            </p>
            <p className="max-w-[40rem] text-lg pt-5">
              📭 quizthis.inc@gmail.com
            </p>
            <p className="max-w-[40rem] text-lg pt-5">☎️ +84 0929 312 93</p>
          </div>
        </div>

        <div className="grid justify-items-center mt-12">
          <h1 className="text-7xl border-separate border-2">
            Quiz<span className="font-bold">This</span> .Inc
          </h1>
          <p>© 2024 QuizThis. All rights reserved </p>
        </div>
      </footer>
  )
}
