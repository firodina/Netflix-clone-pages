import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios";
import requests from "../../Utils/requests";
import "../Banner/banner.css";

function Banner() {
  const [movies, setmovies] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixoriginal);
        console.log(request);
        setmovies(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(strg, n) {
    return strg?.length > n ? strg.substr(0, n - 1) + "..." : strg;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movies?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-contaner">
        <h1 className="banner-title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>

        <button className="banner-bottons play">Play</button>
        <button className="banner-bottons">My List</button>

        <h1 className="banner-discription">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className="banner-fadebottom" />
    </div>
  );
}

export default Banner;
