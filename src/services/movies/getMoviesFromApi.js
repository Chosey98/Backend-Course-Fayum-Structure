import Movies from '../../helpers/db/movies.db.js';
import axios from 'axios';
export async function getMoviesFromApi(req, res) {
	const APIKEY = process.env.TMDB_API_KEY;
	let value;
	try {
		value = await axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
		);
	} catch (err) {
		console.log(err.message);
		return res.status(500).send({
			message: 'Error fetching data from TMDB',
		});
	}
	value.data.results.forEach((movie) => {
		if (Movies.some((m) => m.id === movie.id)) {
			return;
		}
		Movies.push({
			id: movie.id,
			title: movie.title,
			overview: movie.overview,
			releaseDate: movie.release_date,
		});
	});
	return res.json(Movies);
}
