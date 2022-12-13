import axios from "axios";
import React, { useEffect, useId, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserAuth } from "./context/Auth";

export default function Row({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);
  const {recomend}=UserAuth()

  const idKey = useId();
  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);
  const slideleft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideright = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="font-bold p-4 text-xl">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden text-black group-hover:block"
          onClick={slideleft}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((items) => {
            return (
              <Link to="movie">
                <div
                  className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                  key={idKey}
                  onClick={() => {
                    recomend(items.id)
                  }}
                >
                  <img
                    className="w-full h-auto block"
                    src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`}
                    alt={items?.title}
                  />
                  <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                    <p className="white-space-normal font-bold flex justify-center items-center h-full text-center ">
                      {items?.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <MdChevronRight
          size={40}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden text-black group-hover:block"
          onClick={slideright}
        />
      </div>
    </>
  );
}
