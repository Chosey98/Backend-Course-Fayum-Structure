import { Router } from 'express';
import * as AuthService from '../services/auth/index.js';
const router = Router();

router.post('/register', AuthService.register);
router.post('/login', AuthService.login);
export default router;
