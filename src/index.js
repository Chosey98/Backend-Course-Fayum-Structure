import express from 'express';
import BookRouter from './controllers/books.controller.js';
import UserRouter from './controllers/users.controller.js';
import MoviesRouter from './controllers/movies.controller.js';
import AuthRouter from './controllers/auth.controller.js';
import logger from './helpers/middlewares/logger.js';
import dotenv from 'dotenv';
import errorHandler from './helpers/middlewares/errorHandler.js';
dotenv.config();
const app = express();

// -- Middleware --
app.use(express.json());
app.use(logger);

// -- Routes --
app.use('/books', BookRouter);
app.use('/users', UserRouter);
app.use('/movies', MoviesRouter);
app.use('/auth', AuthRouter);

app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
	console.log('Server is running on port 3000');
	console.log(`http://localhost:${PORT}`);
});

export default app;
