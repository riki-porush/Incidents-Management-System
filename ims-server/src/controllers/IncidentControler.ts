
import { Request, Response } from 'express';
import logger from '../loggers/log';
import IncidentSchema from '../models/IncidentModel';
import validate from './incidentValidation';
import { constants } from '../constants';

export default class IncidentController {
  
  public async addIncident(req: Request, res: Response) {    
    try {
      const incident = req.body;

      logger.info('Adding incident:', incident);


      await validate(incident);
      const createdIncident = await IncidentSchema.create(incident);

      logger.info('Incident created:', createdIncident);

      return res.status(200).json(createdIncident);
    }
     catch (error:any) {
      logger.error({source: constants.FROM_DATA_PATH_ERROR, err: constants.ERROE_ADDING_INCIDENT, incidentID:req.params.id}); // Logging the error message
      return res.status(404).json({ message: error.message });
    }
  }

  public async updateIncident(req: Request, res: Response) {
    console.log('here');
    
    try {     
      const incident = await IncidentSchema.findByIdAndUpdate( req.params.id, req.body );
      if (incident)
      {
        logger.info('update incident' ,incident);
        return res.status(200).json(incident);
      }

    } catch (error:any) {
      logger.error({source: constants.FROM_DATA_PATH_ERROR, err: constants.ERROR_UPDATING_INCIDENT, incidentID:req.params.id}); // Logging the error message
      return res.status(404).json({ message: error });
    }
  }

  public async getAllIncidents(req: Request, res: Response) {
    try {
      const incidents = await IncidentSchema.find();
      logger.info('get all incident');
      return res.status(200).json(incidents);
    } catch (error:any) {
      logger.error({source: constants.FROM_DATA_PATH_ERROR, err:constants.ERROR_GETTING_ALL_INCIDENTS}); // Logging the error message
      return res.status(404).json({ message: error });
    }
  }

  public async getIncidentById(req: Request, res: Response) {    
    try {
      const incident = await IncidentSchema.findById(req.params.id);
      if (incident)
      {
        logger.info('get incident by id',incident);
        return res.status(200).json(incident);
      }
      return res.status(404).json({ message: "Incident not found" });
    } catch (error:any) {
      logger.error({ source: constants.FROM_DATA_PATH_ERROR, err: constants.CANDIDATE_NOT_FOUND ,incidentID:req.params.id});
      return res.status(404).json({ message: error });
    }
  }

}
