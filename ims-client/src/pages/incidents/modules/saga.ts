import { call, put, takeEvery } from 'redux-saga/effects'

import apiCalls from '../../../service/apiCalls'
import { IIncidents } from './inteface'
import { actions } from './slice'



function* onGetIncidents() {
    try {
        const data: IIncidents = yield call(apiCalls.getIncidents)
        yield put(actions.onGetIncidentsSuccess(data))
    } catch (error) {
        console.log(error)
    }
}

export default function* watchIncidents() {
    yield takeEvery(actions.onGetIncidentsRequest, onGetIncidents)
}