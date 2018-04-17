import { Router } from 'express';
import authenticationRouter from './login-page/login-router';

const router = Router();

router.use('', authenticationRouter);

export default router;
