import Row from './Row';
import requests from './request';
import Banner from './Banner';
import './App.css';
import Nav from './Nav';
function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row tittle="Netflix Original" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
			<Row tittle="Top Rated Movies" fetchURL={requests.fetchTopRatedMovies} />
			<Row tittle="Tv Movies" fetchURL={requests.fetchTvMovies} />
			<Row tittle="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
			<Row tittle="Adventure Movies" fetchURL={requests.fetchAdventureMovies} />
			<Row tittle="Animation Movies" fetchURL={requests.fetchAnimationMovies} />
			<Row tittle="History" fetchURL={requests.fetchHistoryMovies} />
		</div>
	);
}

export default App;
