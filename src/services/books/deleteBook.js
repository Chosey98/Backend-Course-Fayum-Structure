import Books from '../../helpers/db/books.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';

export function deleteBook(req, res, next) {
	try {
		const { id } = req.params;
		const bookIndex = Books.findIndex((book) => book.id === parseInt(id));
		if (bookIndex === -1) {
			return badRequestResponse(res, 'Book not found');
		}
		Books.splice(bookIndex, 1);
		return okResponse(res, 'Book deleted', Books);
	} catch (err) {
		next(err);
	}
}
