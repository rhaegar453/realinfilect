import { put, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../ActionTypes/index';
import { submitForm, submitFormFailure, submitFormSuccess } from '../Actions/index';


function* submitFormS(data) {
    console.log(data);
    let localData = localStorage.getItem("data");
    console.log(localData);
    if (localData) {
        let currentDetails = JSON.parse(localData);
        if (data.payload.password == currentDetails.password) {
            yield put(submitFormSuccess());
        }
        else {
            yield put(submitFormFailure());
        }
    }
    else {
        localStorage.setItem("data", JSON.stringify({ email: data.payload.email, password: data.payload.password }));
        yield put(submitFormSuccess());
    }
}

function* watchActions() {
    yield takeEvery(actions.SUBMIT_FORM, submitFormS);
}

export default function* rootSaga() {
    yield all([
        watchActions()
    ])
}



