import { Router } from 'express';
import * as MoviesService from '../services/movies/index.js';
const router = Router();

router.get('/', MoviesService.getMoviesFromApi);

export default router;
