import axios from "axios";
import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState();
  const [movie, setMovie] = useState();

  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=64ff6c5098cdafbe0dcb9398d4334f83&language=en-US&query=${search}&page=1&include_adult=false`
    )
    .then((res) => setMovie(res))
    .catch((error) => console.log(error));

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
        <button>Sumbit</button>
      </form>
    </div>
  );
}
