import React from 'react'
import IIncident from '../../interface/incidentInterface'
import apiCalls from '../../service/apiCalls'
import { FormData } from '../AddIncident/addIncident'


export default async function submitIncident(prop:FormData) {
    
    const incidentcR:IIncident={
        //TODO
        //Remove the id
        id: "1",
        name: prop.name,
        status:"Active",
        description:prop.description,
        priority: prop.priority,
        type: prop.type,
        durationHours: 0,
        slackLink: prop.slackLink,
        tags: prop.tags.map(tag => ({ id: tag.key.toString(), name: tag.value })),
        date: prop.date.toDate(),
        createdAt: new Date(),
        updatedAt: new Date(),
        cost: 0,
    }


    await apiCalls.createIncident(incidentcR)



}