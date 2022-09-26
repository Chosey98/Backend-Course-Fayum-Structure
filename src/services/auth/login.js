import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
export function login(req, res) {
	const { email, password } = req.body;
	const user = Users.find((u) => u.email === email);
	if (!user) {
		return badRequestResponse(res, 'Invalid email or password');
	}
	const isValid = bcrypt.compareSync(password, user.password);
	if (!isValid) {
		return res.status(400).json({
			message: `Invalid email or password`,
		});
	}
	return res.json({
		message: 'User logged in succesfully',
		data: user,
	});
}
