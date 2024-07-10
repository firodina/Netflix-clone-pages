import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/requests";

function RowList() {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixoriginal}
        islargeRow={true}
      />
      <Row title="Trending Now" fetchurl={requests.fetchtrending} />
      <Row title="Top Rate Movies" fetchurl={requests.fetchTopRateMovies} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comdy Movies" fetchurl={requests.fetchComdyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Docuemtaries" fetchurl={requests.fetchDocuemtaries} />
      <Row title="Tvshow" fetchurl={requests.fetchTvshow} />
    </div>
  );
}

export default RowList;
