import Books from '../../helpers/db/books.db.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';
export async function getBooks(req, res,next) {
	try{
	return okResponse(res,'Books fetched succesfully',Books)
	}catch(err){
		next(err)
	}
}
