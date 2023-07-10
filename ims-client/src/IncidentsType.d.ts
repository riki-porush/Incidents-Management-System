export interface IIncident extends Document {
    id: string;
    name: string;
    status: Boolean;
    description: string;
    priority: string;
    date: Date;
    type: string;
    durationFault: string;
    caringTeam: string;
    cost: Number
}
