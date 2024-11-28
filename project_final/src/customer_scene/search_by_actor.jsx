import React from "react";
import GetWindows from "../global/GetWindows";
import Layout from "../global/Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../global/MovieCard";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default function search_by_actor() {
  var window = GetWindows();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Layout>
        <main className="p-8">
          <div className="flex lg:items-start lg:justify-start items-center justify-center space-x-8 flex-col ">
            <div className="lg:inline-flex">
              <img
                src=""
                alt="logo"
                className="w-48 h-48 rounded-lg border-black border-2 m-5"
              />
              <div className="">
                <h1 className="text-4xl font-bold">Actor Name</h1>
                <p className="text-gray-400">
                  Actor, Producer, Director, Writer
                </p>
                <p className="text-gray-400">
                  Born Month Day, Year (Age years)
                </p>
                <p className="mt-4 text-gray-300">
                  Brief biography of the actor...Brief biography of the
                  actor...Brief biography of the actor...Brief biography of the
                  actor...Brief biography of the actor...Brief biography of the
                  actor...Brief biography of the actor...Brief biography of the
                  actor...
                  <button className="text-yellow-500 ml-2">More</button>
                </p>
              </div>
            </div>
            <div
              style={{
                width: "98.5%",
                height: "fit-content",
                margin: "0",
                marginTop: "30px",
              }}
            >
              <Slider {...settings}>
                <div>
                  <MovieCard />
                </div>
                <div>
                  <MovieCard />
                </div>
                <div>
                  <MovieCard />
                </div>
                <div>
                  <MovieCard />
                </div>
                <div>
                  <MovieCard />
                </div>
                <div>
                  <MovieCard />
                </div>
              </Slider>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
