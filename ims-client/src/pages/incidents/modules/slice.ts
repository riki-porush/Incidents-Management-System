import { createSelector, createSlice } from "@reduxjs/toolkit"

import { IIncidents } from "./inteface"

export const INCIDENT_STATE_KEY = 'INCIDENT'

const initialState: IIncidents = { incidents: [] }

const slice = createSlice({
    name: INCIDENT_STATE_KEY,
    initialState,
    reducers: {
        onGetIncidentsRequest: (state, action) => {
            console.log('onGetIncidentsRequest')
        },
        onGetIncidentsSuccess: (state, action) => {
            state.incidents = action.payload
        },
    }
})

const getState = (state: any) => {
    return state[INCIDENT_STATE_KEY] || initialState
}

export const selectors = {
    selectIncidents: createSelector(getState, (state) => state.incidents)
}

export const actions = { ...slice.actions }

export default slice.reducer