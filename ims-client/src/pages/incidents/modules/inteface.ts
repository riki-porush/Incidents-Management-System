export interface IIncident {
    id: string;
    name: string;
    status: string;
    description: string;
    priority: string;
    date: Date;
    type: string;
    durationFault: string;
    caringTeam: string;
}

export interface IIncidents {
    incidents: Array<IIncident>
}

export interface IAggregation{
    activeCount: number
    averageCost: number
    averageDurationHours: number
}