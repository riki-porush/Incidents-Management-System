import express from 'express';
import IncidenceController from '../controllers/IncidentControler';

const router = express.Router();
const incidenceController = new IncidenceController();

router.get('/', incidenceController.getAllIncidents);
router.get('/:id', incidenceController.getIncidentById);
router.get('/getIncidentByStatus/:status', incidenceController.getIncidentByStatus);
router.post('/addIncident', incidenceController.addIncident);
router.put('/updateIncidence/:id', incidenceController.updateIncidence);

export default router;
