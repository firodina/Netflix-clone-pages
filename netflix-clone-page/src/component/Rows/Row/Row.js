import React, { useEffect, useState } from "react";
import axios from "../../../Utils/axios";
import "../Row/row.css";
import movietrailer from "movie-trailer";
import Youtube from "react-youtube";

function Row({ title, fetchurl, islargeRow }) {
  const [movies, setmovies] = useState([]);
  const [traierurl, settraierurl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchurl);
        console.log(request);
        setmovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchurl]);

  const handlClick = (movies) => {
    if (traierurl) {
      settraierurl("");
    } else {
      movietrailer(movies?.title || movies?.name || movies?.original_name)
        .then((url) => {
          console.log(url)
          const urlparams = new URLSearchParams(new URL(url).search)
          console.log(urlparams)
          console.log(urlparams.get('v'))
          settraierurl(urlparams.get('v'))
        });
    }
    
  };

  const opts = {
    heigth: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },

  }
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row-posters">
        {movies?.map((movies, index) => (
          <img
            onClick={() => handlClick(movies)}
            key={index}
            src={`${base_url}${
              islargeRow ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movies.name}
            className={`row-poster ${islargeRow && "row-postLarge"}`}
          />
        ))}
      </div>
      <div style={{padding: '10px'}}>
        {traierurl && <Youtube videoId={traierurl} opts={opts}/> }
      </div>
    </div>
  );
}

export default Row;
