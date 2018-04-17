import { Router } from 'express';
import './passport/passport-facebook-config';

import authenticationController from './authentication-controller';

const router = Router();

router.get('/facebook', authenticationController.facebook.bind(authenticationController));
router.get('/facebook/callback', authenticationController.facebookCallback.bind(authenticationController));

export default router;
