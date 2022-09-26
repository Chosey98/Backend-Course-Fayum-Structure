import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
export function login(req, res) {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({
			message: `Please fill all the fields ${!email ? 'email, ' : ''}${
				!password ? 'password' : ''
			}`,
		});
	}
	if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
		return res.status(400).json({
			message: `Invalid email`,
		});
	}
	const user = Users.find((u) => u.email === email);
	if (!user) {
		return res.status(400).json({
			message: `Invalid email or password`,
		});
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
