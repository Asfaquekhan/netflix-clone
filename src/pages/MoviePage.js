import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MoviePage(props) {
  const [movie, setmovie] = useState();
  const [recomendation, setRecomendation] = useState();

  const data = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          id ? id : 715931
        }?api_key=64ff6c5098cdafbe0dcb9398d4334f83&language=en-US`
      )
      .then((res) => setmovie(res.data))
      .catch((error) => console.log(error));
  };
  const recomend = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          id ? id : 715931
        }/similar?api_key=64ff6c5098cdafbe0dcb9398d4334f83&language=en-US&page=1`
      )
      .then((res) => setRecomendation(res.data.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    data();
    recomend();
  }, []);

  console.log(recomendation);
  return (
    <div>
      <img
        className=" "
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt=""
      />
      <div className="md:absolute md:top-[11.5%]  w-1/2 h-screen  space-y-4 bg-gradient-to-r from-black  ">
        <div className="py-20 p-5">
        <h2 className="font-[24px]  leading-8">{movie?.title}</h2>
        <div className="flex space-x-6 text-gray-200">
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
        {recomendation?.map((curr) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/original/${curr?.poster_path}`}
              alt=""
              width={250}
              onClick={() => {
                data(curr.id);
                recomend(curr.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
