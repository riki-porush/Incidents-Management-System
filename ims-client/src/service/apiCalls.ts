import axios from "axios"
import  IIncident from "../interface/incidentInterface"

axios.defaults.baseURL = 'http://localhost:7000'

const apiCalls = {
    //להוסיף את כל הקריאות שרת
    getIncidents: () => axios.get(`/incident`).then(response => response.data),
    getAggregation:() => axios.get(`/aggregation`).then(response => response.data),
    createIncident:(incident:IIncident) => axios.post(`/incident/addIncident`,incident).then(response => response.data)
}

export default apiCalls