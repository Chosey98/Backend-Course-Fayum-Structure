import { Router } from 'express';
import * as UsersService from '../services/users/index.js';
const router = Router();

router.get('/', UsersService.getUsers);

export default router;
