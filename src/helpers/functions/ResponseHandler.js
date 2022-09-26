class ResponseHandler {
	constructor(status, message, data) {
		this.status = status;
		this.message = message || '';
		this.data = data || {};
	}
	sendResponse(res) {
		return res.status(this.status).json({
			message: this.message,
			data: this.data,
		});
	}
}
export function okResponse(res, message, data = {}) {
	const response = new ResponseHandler(200, message, data);
	return response.sendResponse(res);
}
export function badRequestResponse(res, message) {
	const response = new ResponseHandler(400, message);
	return response.sendResponse(res);
}
export function notFoundResponse(res, message) {
	const response = new ResponseHandler(404, message);
	return response.sendResponse(res);
}
export function internalServerErrorResponse(res, message) {
	const response = new ResponseHandler(500, message);
	return response.sendResponse(res);
}
export function conflictResponse(res, message) {
	const response = new ResponseHandler(409, message);
	return response.sendResponse(res);
}
