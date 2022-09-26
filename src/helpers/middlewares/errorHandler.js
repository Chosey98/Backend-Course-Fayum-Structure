import { internalServerErrorResponse } from '../functions/ResponseHandler.js';

export default function (err, req, res, next) {
	if (err) {
		console.log(err);
		return internalServerErrorResponse(
			res,
			'Internal Server Error: Please consult the backend team',
		);
	}
	next();
}
