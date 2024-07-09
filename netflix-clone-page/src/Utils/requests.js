const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchtrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixoriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us `,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre_ids=28`,
  fetchComdyMovies: `/discover/movie?api_key=${API_KEY}&with_genre_ids=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre_ids=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre_ids=10749`,
  fetchDocuemtaries: `/discover/movie?api_key=${API_KEY}&with_genre_ids=99`,
  fetchTvshow: `tv/popular?API_KEY=${API_KEY}&language = en-us&page=1`,
};
export default requests;
