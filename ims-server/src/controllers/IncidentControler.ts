
import pino from 'pino';
import IncidentModel from '../models/IncidentModel';
import IncidentSchema from '../models/IncidentModel';
import { Request, Response } from 'express';
import logger from '../loggers/log';
import { IIncident } from '../interfaces/IncidentInterface';
import validate from './incidentValidation';

export default class IncidentController {
  
  public async addIncident(req: Request, res: Response) {
    try {
      const incident = req.body;
      logger.info('Adding incident:', incident); 
      const incidentController = new IncidentController();
      await validate(incident);
      const createdIncident = await IncidentSchema.create(incident);
      logger.info('Incident created:', createdIncident); 
      return res.status(200).json(createdIncident);
    }
     catch (error:any) {
      logger.error('Error adding incident:', error.message); 
      return res.status(404).json({ message: error.message });
    }
  }

  public async updateIncident(req: Request, res: Response) {
    try {
      const incident = await IncidentSchema.findByIdAndUpdate( req.params.id, req.body );
      if (incident)
      {
        logger.info('update incident' ,incident);
        return res.status(200).json(incident);
      }

    } catch (error:any) {
      logger.error('Error updating incident:', error.message); // Logging the error message
      return res.status(404).json({ message: error });
    }
  }

  public async getAllIncidents(req: Request, res: Response) {
    try {
      const incidents = await IncidentSchema.find();
      logger.info('get all incident');
      return res.status(200).json(incidents);
    } catch (error:any) {
      logger.error('Error getting all incidents:', error.message); // Logging the error message
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
      logger.error('Error getting incident by ID:', error.message); // Logging the error message
      return res.status(404).json({ message: error });
    }
  }
}
