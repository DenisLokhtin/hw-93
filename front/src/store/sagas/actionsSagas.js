import {takeEvery, put} from 'redux-saga/effects';
import {SET_EVENTS, setEvents} from "../actions/actions";
import axiosApi from "../../axiosApi";

export function* categoriesSagas() {
    try {
        const response = yield axiosApi.get('/events');
        yield put(setEvents(response.data));
    } catch (e) {
        console.log(e)
    }
}

export default [
    takeEvery(SET_EVENTS, categoriesSagas),
];
