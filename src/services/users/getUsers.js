import Users from '../helpers/db/users.db.js';
export function getUsers(req, res) {
	res.json({
		message: 'Users fetched succesfully',
		data: Users,
	});
}
