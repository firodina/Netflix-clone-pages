const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchtrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixoriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us `,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComdyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocuemtaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvshow: `tv/popular?api_key=${API_KEY}&language = en-us&page=1`,
};
export default requests;
