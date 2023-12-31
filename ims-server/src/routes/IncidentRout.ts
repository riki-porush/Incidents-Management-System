import express from 'express';
import IncidenceController from '../controllers/IncidentControler';

const router = express.Router();
const incidenceController = new IncidenceController();

router.get('/', incidenceController.getAllIncidents);
router.get('/:id', incidenceController.getIncidentById);
router.post('/', incidenceController.addIncident);
router.put('/:id', incidenceController.updateIncidence);

export default router;
