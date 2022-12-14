import React from "react";
import Main from "../component/Main";
import Row from "../component/Row";
import api from "../component/Api";
import Genres from "../component/Genres";
export default function Home() {
  return (
    <div>
      <Main />
      <Row rowID="4" title="Trending" fetchURL={api.Tranding} />
      <Row rowID="1" title="Up Coming" fetchURL={api.upcoming} />
      <Row rowID="2" title="Popular" fetchURL={api.popular} />
      <Row rowID="3" title="Top Rated" fetchURL={api.toprated} />
     <Genres/>
    </div>
  );
}
