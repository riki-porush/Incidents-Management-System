import mongoose, { Schema } from 'mongoose'
import { type IIncident } from '../interfaces/IncidentInterface'

const IncidentSchema: Schema<IIncident> = new Schema<IIncident>({
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    durationHours: {
      type: String,
      required: true,
    },
    slackLink: {
      type: String,
      required: true,
    },
    tags: {
      type: [
        {
          id: { type: String, required: true },
          name: { type: String, required: true },
        },
      ],
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  });
  
  const IncidentModel = mongoose.model<IIncident>('Incident', IncidentSchema);
  
  export default IncidentModel;
