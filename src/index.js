import express from 'express';
import BookRouter from './controllers/books.controller.js';
import UserRouter from './controllers/users.controller.js';
import MoviesRouter from './controllers/movies.controller.js';
import logger from './helpers/middlewares/logger.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// -- Middleware --
app.use(express.json());
app.use(logger);

// -- Routes --
app.use('/books', BookRouter);
app.use('/users', UserRouter);
app.use('/movies', MoviesRouter);

const PORT = 3000;
app.listen(PORT, () => {
	console.log('Server is running on port 3000');
	console.log(`http://localhost:${PORT}`);
});

export default app;
