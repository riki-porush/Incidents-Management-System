import axios from "axios"
import  IIncident from "../interface/incidentInterface"

axios.defaults.baseURL = process.env.REACT_APP_API_KEY

const apiCalls = {
    //להוסיף את כל הקריאות שרת
    getIncidents: () => axios.get(`/incident`).then(response => response.data),
    getTimeLine:(id:string)=>axios.get(`/incident/${id}`).then(response => response.data),
    getAggregation:() => axios.get(`/aggregation`).then(response => response.data),
    createIncident:(incident:IIncident) => axios.post(`/incident/addIncident`,incident).then(response => response.data)
}

export default apiCalls