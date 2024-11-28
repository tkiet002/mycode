import React from "react";
import Layout from "../global/Layout";
import MovieCard from "../global/MovieCard";
import ActorCard from "../global/ActorCard";
export default function show_result_movie() {
  return (
    <Layout>
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
        <input
          type="text"
          className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"
          placeholder="Search and let me recommend you some good movie..."
        />
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

      <div className="m-4 font-bold">
        <p>Do you mean this actor?</p>

        <div className="inline-flex">
          <ActorCard />
          <ActorCard />
        </div>
      </div>
      <p className="font-bold m-4">Or you may just want to see some movie?</p>
      <div className="inline-flex">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </Layout>
  );
}
