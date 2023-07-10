import express from 'express';
import IncidenceController from '../controllers/IncidentControler';

const router = express.Router();
const incidenceController = new IncidenceController();

<<<<<<< HEAD
router.get('/', incidenceController.getAllIncidents)
router.get('/:id', incidenceController.getIncidentById)
router.post('/addIncident', incidenceController.addIncident)
router.put('/updateIncidence/:id', incidenceController.updateIncident)

=======
router.get('/', incidenceController.getAllIncidents);
router.get('/:id', incidenceController.getIncidentById);
router.post('/', incidenceController.addIncident);
router.put('/:id', incidenceController.updateIncidence);
>>>>>>> origin

export default router;
