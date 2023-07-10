import mongoose, {  Schema } from 'mongoose';
import { IIncident } from '../interfaces/IncidentInterface ';

export const IncidentSchema = new Schema<IIncident>({
<<<<<<< HEAD
    _id: {
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
=======
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
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    durationFault: {
        type: String,
        required: true,
    },
    caringTeam: {
        type: String,
        required: true,
    },
>>>>>>> origin
});

export default mongoose.model<IIncident>('Incident', IncidentSchema);








