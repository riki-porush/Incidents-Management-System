import { combineReducers } from "@reduxjs/toolkit"

import incidentsSlice, { INCIDENT_STATE_KEY } from '../pages/incidents/modules/slice'

const createdAppReducer = combineReducers({
    //-צריך להוסיף כאן את כל ה
    //slice
    [INCIDENT_STATE_KEY]: incidentsSlice
})

const reducer = (state: any, action: any) => {
    return createdAppReducer(state, action)
}

export default reducer