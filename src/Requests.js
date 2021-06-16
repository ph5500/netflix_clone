// Typically would store in {process.env.API_KEY}
const API_KEY = "b6b9e367fc6b9a5727634f5833702af3";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with genres=99`,
};

export default requests;
