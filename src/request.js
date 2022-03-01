const API_KEY = '162525ef5c87cfa2ffe30eb9016eb35b';

const requests = {
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchTvMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
	fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`
};
export default requests;
//https://api.themoviedb.org/3/genre/movie/list?api_key=162525ef5c87cfa2ffe30eb9016eb35b&language=en-US
