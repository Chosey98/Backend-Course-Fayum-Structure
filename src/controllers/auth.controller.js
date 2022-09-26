import { Router } from 'express';
import joiMiddleware from '../helpers/middlewares/joiMiddleware.js';
import registerSchema from '../helpers/schemas/register.schema.js';
import loginSchema from '../helpers/schemas/login.schema.js';
import * as AuthService from '../services/auth/index.js';
const router = Router();

router.post('/register', joiMiddleware(registerSchema), AuthService.register);
router.post('/login', joiMiddleware(loginSchema), AuthService.login);
export default router;
