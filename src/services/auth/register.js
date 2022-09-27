import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
export function register(req, res) {
	const { name, email, password, age } = req.body;
	if (Users.some((user) => user.email === email)) {
		return res.status(400).json({ message: 'Email already exists' });
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
	return res.json({
		message: 'User registered succesfully',
		data: user,
	});
}
