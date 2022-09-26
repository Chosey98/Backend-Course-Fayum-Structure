import Books from '../../helpers/db/books.db.js';
export async function getBooks(req, res) {
	res.json({
		message: 'Books fetched succesfully',
		data: Books,
	});
}
