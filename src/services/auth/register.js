import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';
export function register(req, res,next) {
	try{
	const { name, email, password, age } = req.body;
	if (Users.some((user) => user.email === email)) {
		return badRequestResponse(res,'Email already exists')
	}
	const encryptedPassword = bcrypt.hashSync(password, 10);
	const user = {
		id: Users.length + 1,
		name,
		email,
		password: encryptedPassword,
		age,
	};
	Users.push(user);
	return okResponse(res,'User registered succesfully',user)
}catch(err){next(err)}
}
