import { call, put, takeEvery } from 'redux-saga/effects'

import apiCalls from '../../../service/apiCalls'
import { actions } from './slice'
import IIncident from '../../../interface/incidentInterface'



function* onGetIncidents() {
    try {
        const data:IIncident[] = yield call(apiCalls.getIncidents)
        yield put(actions.onGetIncidentsSuccess(data))
    } catch (error) {
        console.log(error)
    }
}

export default function* watchIncidents() {
    yield takeEvery(actions.onGetIncidentsRequest, onGetIncidents)
}