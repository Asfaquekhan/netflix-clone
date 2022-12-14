import React, { useState, useCallback, useEffect } from "react";
import { UserAuth } from "./context/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function List() {
  const [movie, setRemovie] = useState();
  const { category, recomend } = UserAuth();
 
  const navigate=useNavigate()
  const moveBy = () => {
navigate('/movie')
  };
  const data = useCallback(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=64ff6c5098cdafbe0dcb9398d4334f83&with_genres=${
          category.id ? category.id : 28
        }`
      )
      .then((res) => setRemovie(res.data.results))
      .catch((error) => console.log(error));
  }, [category]);

  useEffect(() => {
    data();
  }, [data, category]);

  return (
    <div>
        <h2 className="font-bold p-4 text-xl">Category By : {category.name}</h2>
      <div className="max-w-[850px] p-5 mx-auto grid grid-cols-2 md:grid-cols-3  gap-x-2 gap-y-2">
        {movie?.map((curr) => {
          return (
            <img
              key={curr.id}
              src={`https://image.tmdb.org/t/p/original/${curr?.poster_path}`}
              alt=""
              width={250}
              
              onClick={()=>{recomend(curr.id)
            moveBy()}
            }
            />
          );
        })}
      </div>
    </div>
  );
}
