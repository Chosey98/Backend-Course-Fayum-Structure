import { Router } from 'express';
import * as MoviesService from '../services/movies/index.js';
import logger from '../helpers/middlewares/logger.js';
const router = Router();

router.use((req, res, next) => {
	console.log('hi');
});
router.get('/', MoviesService.getMoviesFromApi);

export default Router;
