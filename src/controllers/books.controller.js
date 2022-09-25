import { Router } from 'express';
import * as BooksService from '../services/books/index.js';
const router = Router();

router.get('/', BooksService.getBooks);

router.post('/', BooksService.createBook);

router.delete('/:id', BooksService.deleteBook);

router.patch('/:id', BooksService.updateBook);

export default router;
