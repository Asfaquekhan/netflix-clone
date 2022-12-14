import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserAuth } from "./context/Auth";

export default function Row({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);
  const { recomend } = UserAuth();

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
              <div
                className=" inline-block cursor-pointer relative p-2"
                key={items.id}
                onClick={() => {
                  recomend(items.id);
                }}
              >
                <Link to="/movie">
                  <div className="hover:">
                  <img
                    className=""
                    src={`https://image.tmdb.org/t/p/w500/${items?.poster_path}`}
                    alt={items?.title}
                    loading="lazy"
                  />
                </div>

                </Link>
              </div>
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
