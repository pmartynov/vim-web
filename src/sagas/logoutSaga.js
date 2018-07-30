import {put, takeEvery} from 'redux-saga/effects';
import Actions from '../utils/Actions';
import {push} from 'react-router-redux';

export function* logoutWatcher() {
	yield takeEvery(Actions.LOGOUT, loginWorker);
}

function* loginWorker() {
	yield put(push('/index'));
}