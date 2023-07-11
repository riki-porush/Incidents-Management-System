export interface ITimeLineEventprops {
    timeline: timeline
}

export interface timeline {
    incidentId: string
    profile?: string
    name?: string
    createdDate: string
    description: string
    priority: string
}