import react from 'react'
import IIncident from '../../interface/incidentInterface'
import apiCalls from '../../service/apiCalls'


// interface incidentprps{
//     incident:IIncident
//     }
    

export default async function submitIncident(prop:IIncident) {
    const incidentcR:IIncident={
        id:prop.id,
        name: prop.name,
        status:prop.status,
        description:prop.description,
        priority: prop.priority,
        type: prop.type,
        durationHours: prop.durationHours,
        slackLink: prop.slackLink,
         tags: prop.tags.map(tag => ({ id: tag.id, name: tag.name })),
        date: prop.date,
        createdAt: prop.createdAt,
        updatedAt: prop.updatedAt,
        cost: prop.cost
    }
    await apiCalls.createIncident(incidentcR)


}