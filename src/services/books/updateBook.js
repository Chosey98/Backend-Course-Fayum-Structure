import Books from '../../helpers/db/books.db.js';

export function updateBook(req, res) {
	const { id } = req.params;
	const bookIndex = Books.findIndex((book) => book.id === parseInt(id));
	if (bookIndex === -1) {
		return res.status(400).json({ message: 'Book not found' });
	}
	let { title, description, publishedAt, authorName } = req.body;
	if (!title && !description && !publishedAt && !authorName) {
		return res.status(400).json({
			message:
				'Missing at least one field, Fields available to update: title, description, publishedAt, authorName',
		});
	}
	if (publishedAt) {
		publishedAt = parseInt(publishedAt);
		if (isNaN(publishedAt)) {
			return res
				.status(400)
				.json({ message: 'Published at must be a number' });
		}
	}
	Books[bookIndex] = {
		...Books[bookIndex],
		title: title || Books[bookIndex].title,
		description: description || Books[bookIndex].description,
		publishedAt: publishedAt || Books[bookIndex].publishedAt,
		authorName: authorName || Books[bookIndex].authorName,
	};
	res.json({
		message: 'Book updated',
		data: Books[bookIndex],
	});
}
