import { Router } from 'express';

import testRoutes from './test.route';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import patientRoutes from './patient.route';

const router = Router(); // eslint-disable-line new-cap

// public route
router.use('/test', testRoutes);
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/patient', patientRoutes);

export default router;
