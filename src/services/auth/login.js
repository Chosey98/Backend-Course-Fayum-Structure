import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
import loginSchema from '../../helpers/schemas/login.schema.js';
export function login(req, res) {
	const { error, value } = loginSchema.validate(req.body, {
		abortEarly: true,
		allowUnknown: false,
		convert: true,
	});
	if (error) {
		return res.status(400).json({ message: error.message });
	}
	const { email, password } = value;
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
