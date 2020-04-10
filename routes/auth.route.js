import { Router } from 'express';

import * as AuthController from '../controllers/auth.controller';

const router = Router();

router.route('/login')
    .post(AuthController.login);

router.route('/signup')
    .post(AuthController.signup);


export default router;
