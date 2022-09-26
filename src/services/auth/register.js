import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
import registerSchema from '../../helpers/schemas/register.schema.js';
export function register(req, res) {
	const { error, value } = registerSchema.validate(req.body, {
		abortEarly: true,
		allowUnknown: false,
		convert: true,
	});
	if (error) {
		return res.status(400).json({ message: error.message });
	}
	const { name, email, password, age } = value;
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

// $2a$10$8V23Nwz1/QIK5uSzuVMQT.sF4qPHyUILt8jBkY42cJU3tM53AriKC
