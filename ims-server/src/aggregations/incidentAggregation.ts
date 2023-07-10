import mongoose from "mongoose";
import { IIncident } from "../interfaces/IncidentInterface";
import { IncidentSchema } from "../models/IncidentModel";
import { Request, Response } from 'express';

const IncidentModel = mongoose.model<IIncident>('Incident', IncidentSchema);

export default async function aggregateIncident(req: Request, res: Response): Promise<any> {
    try {
        const result = await IncidentModel.aggregate([
            {
                $group: {
                    _id: null,
                    activeCount: {
                        $sum: { $cond: [{ $eq: ['$status', 'Active'] }, 1, 0] },
                    },
                    averageCost: { $avg: '$cost' },
                    averageDurationHours: { $avg: '$durationHours'},
                },
            },
        ]).exec();
        if (result.length > 0) {
            return res.status(200).json(result[0]);
        } else {
            return res.status(200).json({
                activeCount: 0,
                averageCost: 0,
                averageDurationHours: 0,
            })
        } 
    } catch (error) {
        res.status(404).json(error)
        }
    } 

