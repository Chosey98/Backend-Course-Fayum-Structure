import Books from '../../helpers/db/books.db.js';

export function createBook(req, res) {
	let { title, description, publishedAt, authorName } = req.body;
	if (!title || !description || !publishedAt || !authorName) {
		return res.status(400).json({
			message: `Missing required fields, Required fields: ${
				!title ? 'title, ' : ''
			}${!description ? 'description, ' : ''}${
				!publishedAt ? 'publishedAt, ' : ''
			}${!authorName ? 'authorName' : ''}`,
		});
	}
	publishedAt = parseInt(publishedAt);
	if (isNaN(publishedAt)) {
		return res
			.status(400)
			.json({ message: 'Published at must be a number' });
	}
	const book = {
		id: Books.length + 1,
		title,
		description,
		publishedAt,
		authorName,
	};
	Books.push(book);
	res.json({
		message: 'Book created successfully',
		data: book,
	});
}
