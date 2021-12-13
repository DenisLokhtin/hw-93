import {all} from 'redux-saga/effects';
import categoriesSagas from "./sagas/actionsSagas";
// import registerUserSaga from "./sagas/usersSagas";

export function* rootSagas() {
    yield all([
        ...categoriesSagas,
        // ...registerUserSaga
    ])
}