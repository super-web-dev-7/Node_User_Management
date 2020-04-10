import { Router } from 'express';

import * as userController from '../controllers/user.controller';
import permissionMiddleware from "../middleware/permissionMiddleware";

const router = Router();

router.get('/getUsers', userController.getUsers);
router.get('/getDoctors', userController.getDoctors);
router.post('/addUser', permissionMiddleware(2), userController.addUser);
router.post('/editUser', permissionMiddleware(2), userController.editUser);

export default router;
