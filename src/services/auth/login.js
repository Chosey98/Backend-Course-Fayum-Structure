import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';
export function login(req, res,next) {
	try{
	const { email, password } = req.body;
	const user = Users.find((u) => u.email === email);
	if (!user) {
		return badRequestResponse(res, 'Invalid email or password');
	}
	const isValid = bcrypt.compareSync(password, user.password);
	if (!isValid) {
		return badRequestResponse(res,'Invalid email or password')
	}
	return okResponse(res,'User logged in succesfully',user)
	}catch(err){
		next(err)
	}
}
