import { Router } from 'express';
import Users from '../helpers/db/users.db.js';

const router = Router();

router.get('/', (req, res) => {
	res.json({
		message: 'Users fetched succesfully',
		data: Users,
	});
});

export default router;
