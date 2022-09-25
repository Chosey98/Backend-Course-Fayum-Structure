import Books from '../../helpers/db/books.db.js';

export function deleteBook(req, res) {
	const { id } = req.params;
	const bookIndex = Books.findIndex((book) => book.id === parseInt(id));
	if (bookIndex === -1) {
		return res.status(400).json({ message: 'Book not found' });
	}
	Books.splice(bookIndex, 1);
	res.json({
		message: 'Book deleted',
		data: Books,
	});
}
