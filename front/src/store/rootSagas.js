import {all} from "redux-saga/effects";
import {categoriesSagas} from "./sagas/actionsSagas";

export function* rootSagas() {
    yield all([
        ...categoriesSagas,
    ])
}