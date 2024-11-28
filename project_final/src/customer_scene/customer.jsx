import React from "react";
import logo from "../../public/logo.png";
import { useState, useEffect } from "react";
import axios from "axios";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function customer() {
  const API_KEY = "af939bc3061b33787b1038a1c4aa6731";
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPopularMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    setMovies(response.data.results);
    console.log(movies);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e); // Gọi hàm tìm kiếm khi nhấn Enter
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {

      console.log(query)
      // Gửi yêu cầu tìm kiếm phim
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      setMovies(response.data.results); // Lưu kết quả phim vào state
      console.log(movies)
    } catch (err) {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="m-auto mt-[12%]">
        {/* Logo handle */}
        <div className="inline-flex">
          {windowDimensions.width > 584 ? (
            <>
              <img src={logo} alt="logo" className="w-72" />
              <h1 className="font-medium text-7xl mt-20">Recomendr</h1>
            </>
          ) : (
            <>
              <img src={logo} alt="logo" className="w-72 ml-[10%]" />
            </>
          )}
        </div>
        <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border border-black">
          <div className="pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <form onSubmit={handleSearch} onKeyDown={handleKeyDown}>
            <input
              type="text"
              className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none lg:w-[500px]"
              placeholder="Search and let me recommend you some good movie..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <div className="pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
