import { Router } from 'express';
import authenticationRouter from './authentication/authentication-router';

const router = Router();

router.use('/authentication', authenticationRouter);

export default router;
