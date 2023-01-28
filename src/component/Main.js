import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "./Api";
import { FaPlay } from "react-icons/fa";
export default function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(api.popular).then((res) => {
      setMovies(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
      );
    });
  }, []);

  const read = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full ">
      <div className=" ">
        <div className="w-full">
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
            alt={movies?.title}
            
          />
        </div>
        <div className="md:absolute  top-[11.5%] md:h-[760px] p-4 md:p-8  bg-gradient-to-r from-black to-">
          <h2 className="text-3xl md:text-5xl font-bold w-1/2 md:my-16">
            {movies?.title}
          </h2>
          <div className="py-5 flex items-center">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 flex items-center font-bold">
              <FaPlay className="mr-3" />
              Play
            </button>
            <button className="border ml-4 border-gray-300 py-2 px-5 bg-slate-600 font-bold">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm font-bold">
            {movies?.release_date?.slice(0, 4)}
          </p>
          <p className=" text-gray-200 font-bold md:w-1/2">
        {read(movies?.overview)}
      </p>
        </div>
      </div>
     
    </div>
  );
}
