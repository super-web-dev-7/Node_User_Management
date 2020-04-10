import { Router } from 'express';

import * as patientController from '../controllers/patient.controller';
import permissionMiddleware from "../middleware/permissionMiddleware";

const router = Router();

router.get('/getAllPatients', permissionMiddleware(2), patientController.getAllPatients);
router.get('/getPatientsByDoctorId/:id', permissionMiddleware(0), patientController.getPatientsByDoctorId);
router.post('/createPatient', permissionMiddleware(2), patientController.createPatient);
router.delete('/deletePatient/:id', permissionMiddleware(2), patientController.deletePatient);
router.post('/assignDoctor', permissionMiddleware(2), patientController.assignDoctor);

export default router;
