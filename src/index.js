import express from 'express';
import BookRouter from './controllers/books.controller.js';
import UserRouter from './controllers/users.controller.js';
import logger from './helpers/middlewares/logger.js';

const app = express();
// -- Middleware --
app.use(express.json());
app.use(logger);

// -- Routes --
app.use('/books', BookRouter);
app.use('/users', UserRouter);

const PORT = 3000;
app.listen(PORT, () => {
	console.log('Server is running on port 3000');
	console.log(`http://localhost:${PORT}`);
});

export default app;
