import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState();
  const [movie, setMovie] = useState([]);
 const data =useCallback(()=>{
  axios
  .get(
    `https://api.themoviedb.org/3/search/movie?api_key=64ff6c5098cdafbe0dcb9398d4334f83&language=en-US&query=${search}&page=1&include_adult=false`
  )
  .then((res) => setMovie(res.data.results))
  .catch((error) => console.log(error));
 },[search])
 
useEffect(()=>{
data()
},[data])
  console.log(movie);
  return (
    <div>
      <form action="">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="text-black"
        />
        
      </form>
      <div className="max-w-[850px] p-5 mx-auto grid grid-cols-2 md:grid-cols-3  gap-x-2 gap-y-2">
        {movie?.map((curr) => {
          return (
            <img
              key={curr.id}
              src={`https://image.tmdb.org/t/p/original/${curr?.poster_path}`}
              alt=""
              width={250}
              onClick={() => {
                
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
