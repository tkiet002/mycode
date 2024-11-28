import axios from "axios"

const BASE_API_URL = "http://localhost:3000";


export default function App() {
  const ThuCung = ({
      thuCungId,
      thuCungName,
      thuCungDescription,
      thuCungThumbmail,
  }) => {
    return(
      <>
         {/**Danh Sách các sản phẩm */}
         <div className="max-w-xs rounded-md overflow-hidden bg-white">
              {/**Tag a hiển thị thông tin sản phẩm*/}
            <a className="group p-2">
              {
                thuCungThumbmail ? (
                    <img
                    src="img/Violin/Selmer/Selmer-GlaeselBWL11E4CH.jpg"
                    alt="sanPham"
                  ></img>
                )
              }
              <p className="mt-4 ml-2">{}</p>
              <p className="ml-2 text-zinc-400">{productPrice} VNĐ</p>
            </a>
          </div>
      </>
  );
  };


  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}