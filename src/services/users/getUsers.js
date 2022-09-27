import Users from '../../helpers/db/users.db.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';
export function getUsers(req, res,next) {
	try{
	return okResponse(res,'Users fetched succesfully',Users)
	}catch(err){
		next(err)
	}
}
