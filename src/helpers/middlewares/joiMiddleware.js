import { badRequestResponse } from '../functions/ResponseHandler.js';
export default function (schema) {
	return async (req, res, next) => {
		try {
			if (!schema) {
				throw new Error('Schema is required');
			}
			const value = await schema.validateAsync(req.body, {
				abortEarly: true,
				allowUnknown: false,
				convert: true,
			});
			req.body = value;
			next();
		} catch (err) {
			if (err.details) {
				const error = err.details.map((e) => e.message).join(',');
				return badRequestResponse(res, error);
			}
			next(err);
		}
	};
}
