export default function logger(req, res, next) {
	console.log('-----------------------------------------------------');
	console.log(`Request received - ${new Date().toISOString()}`);
	console.log('Request method: ', req.method);
	console.log('Request path: ', req.path);
	console.log('-----------------------------------------------------');
	next();
}
