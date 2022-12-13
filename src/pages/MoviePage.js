import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { UserAuth } from "../component/context/Auth";


export default function MoviePage(props) {
  const [movie, setMovie] = useState();
  const [removie, setRemovie] = useState();
  const { data } = UserAuth();
 
  console.log(data)
  const movieApi =useCallback((id) => {
    
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          id ? id : data
        }?api_key=64ff6c5098cdafbe0dcb9398d4334f83&language=en-US`
      )
      .then((res) => setMovie(res.data));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[data])
  const recomendation = useCallback((id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          id ? id : data
        }/similar?api_key=64ff6c5098cdafbe0dcb9398d4334f83&language=en-US&page=1`
      )
      .then((res) => setRemovie(res.data.results))
      .catch((error) => console.log(error));
  },[data])

  useEffect(() => {
    console.log("its from useffect");
    movieApi();
    recomendation();
   
  }, [movieApi,recomendation]);
  return (
    <div>
      
      <img
        className=" "
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt=""
      />
      <div className="md:absolute md:top-[11.5%]  md:w-1/2 md:h-screen  bg-gradient-to-r from-black  ">
        <div className="py-20 p-5 space-y-8">
          <h2 className="font-bold text-2xl  leading-8">{movie?.title}</h2>
          <div className="flex space-x-6 text-slate-400 font-bold">
            <p>{movie?.release_date.slice(0, 4)}</p>
            {movie?.genres?.map((curr, id) => {
              return <p key={id}>{curr.name}</p>;
            })}
          </div>
          <p className="w-full">{movie?.overview}</p>
        </div>
      </div>
      <h2 className="text-2xl text-center">More Like This</h2>
      <div className="max-w-[850px] p-5 mx-auto grid grid-cols-2 md:grid-cols-3  gap-x-2 gap-y-2">
        {removie?.map((curr) => {
          return (
            <img
              key={curr.id}
              src={`https://image.tmdb.org/t/p/original/${curr?.poster_path}`}
              alt=""
              width={250}
              onClick={() => {
                movieApi(curr.id);
                recomendation(curr.id);
               
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
