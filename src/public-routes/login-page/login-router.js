import { Router } from 'express';
import loginController from './login-controller';

const router = Router();

router.get('/login', loginController.loginPage.bind(loginController));

export default router;
