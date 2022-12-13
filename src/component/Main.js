import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "./Api";
import {FaPlay} from 'react-icons/fa'
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
  console.log(movies)
  return (
    <div className="w-full ">
      <div className=" w-full  bg-gradient-to-r from-black">
        <div className="w-full ">
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
            alt={movies?.title}
          />
        </div>
        <div className="md:absolute w-full top-[40%] p-4 md:p-8 ">
          <h2 className="text-3xl md:text-5xl font-bold ">{movies?.title}</h2>
          <div className="py-5 flex items-center">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 flex items-center font-bold">
              <FaPlay className="mr-3"/>play
            </button>
            <button className="border ml-4 border-gray-300 py-2 px-5 bg-slate-600 font-bold">
              Watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm font-bold">
            {movies?.release_date?.slice(0, 4)}
          </p>
         
        </div>
      </div>
      <p className=" md:w-2/5 text-gray-200 font-bold p-4">
            {read(movies?.overview)}
          </p>
    </div>
  );
}
