import { Router } from 'express';
import * as TestController from '../controllers/test.controller';

const router = Router(); // eslint-disable-line new-cap

router.route('/')
/** GET /api/test - Test api */
    .get(TestController.test);

export default router;
