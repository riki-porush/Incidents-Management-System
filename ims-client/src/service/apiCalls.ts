import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API_KEY

const apiCalls = {
    //להוסיף את כל הקריאות שרת
    getIncidents: () => axios.get(`/incident`).then(response => response.data),
    getAggregation:() => axios.get(`/aggregation`).then(response => response.data)
}

export default apiCalls