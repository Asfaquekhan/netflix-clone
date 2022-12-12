import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "./Api";
export default function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(api.popular).then((res) => {
      setMovies(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
      );
    });
  }, []);

  
  const read=(str,num)=>{
    if(str?.length>num){
        return str.slice(0,num)+'...'
    }
    else{
        return str
    }
  }
  return (
    <div className="w-full md:h-[550px] ">
      <div className=" w-full h-full bg-gradient-to-r from-black">
        <img
          className="bg-gradient-to-r from-black"
          src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
          alt={movies?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8 ">
          <h2 className="text-3xl md:text-5xl font-bold ">{movies?.title}</h2>
          <div>
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              play
            </button>
            <button className="border ml-4 border-gray-300 py-2 px-5 ">
              Watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">Released:{movies?.release_date?.slice(0,4)}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200">{read(movies?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
}
