import React, { useEffect, useState, useCallback } from "react";
import api from "./Api";
import axios from "axios";
import { UserAuth } from "./context/Auth";
import {  useNavigate } from "react-router-dom";
export default function Genres() {
  const { byCategory } = UserAuth();
  const [movie, setMovie] = useState();
  const data = useCallback(() => {
    axios
      .get(`${api.genres}`)
      .then((res) => setMovie(res.data.genres))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    data();
  }, [data]);
  const navigate = useNavigate();
  const name = () => {
    navigate("/list");
  };

  return (
    <div>
      <h2 className="font-bold p-4 text-xl">Categories</h2>
      <div className="flex flex-wrap  mx-auto ">
        {movie?.map((curr) => {
          return (
            
              <p
                className=" text-slate-400 font-bold m-2 border border-spacing-5 px-4 p-1 cursor-pointer"
                key={curr.id}
                onClick={() => {
                  byCategory(curr);
                  name();
                }}
              >
                {curr.name}
              </p>
            
          );
        })}
      </div>
    </div>
  );
}
