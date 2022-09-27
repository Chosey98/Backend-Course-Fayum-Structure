import Movies from '../../helpers/db/movies.db.js';
import axios from 'axios';
import { okResponse } from '../../helpers/functions/ResponseHandler.js';
export async function getMoviesFromApi(req, res, next) {
	try {
		const APIKEY = process.env.TMDB_API_KEY;
		let value;

		value = await axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
		);

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
		return okResponse(res, 'Movies added to database', Movies);
	} catch (err) {
		next(err);
	}
}
