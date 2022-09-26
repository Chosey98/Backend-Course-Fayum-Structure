import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
export function register(req, res) {
	let { name, email, password, age } = req.body;
	if (!name || !email || !password || !age) {
		return res.status(400).json({
			message: `Please fill all the fields ${!name ? 'name, ' : ''}${
				!email ? 'email, ' : ''
			}${!password ? 'password, ' : ''}${!age ? 'age' : ''}`,
		});
	}
	if (name.length < 8) {
		return res.status(400).json({
			message: `Name should be at least 8 characters long`,
		});
	}
	if (name.length > 32) {
		return res.status(400).json({
			message: `Name should be at most 32 characters long`,
		});
	}
	if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
		return res.status(400).json({
			message: `Invalid email`,
		});
	}
	if (
		!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
	) {
		return res.status(400).json({
			message: `Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number`,
		});
	}
	age = parseInt(age);
	if (isNaN(age)) {
		return res.status(400).json({
			message: `Age should be a number`,
		});
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

// $2a$10$8V23Nwz1/QIK5uSzuVMQT.sF4qPHyUILt8jBkY42cJU3tM53AriKC
