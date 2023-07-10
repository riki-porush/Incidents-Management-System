export interface ITimeLineEventprops {
    timeline: timeline
}

export interface timeline {
    id:string
    incidentId: string
    profile?: string
    name?: string
    date: string
    description: string
    priority: string
}