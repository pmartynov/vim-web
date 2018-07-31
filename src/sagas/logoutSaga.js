import {put, takeEvery} from 'redux-saga/effects';
import Actions from '../utils/Actions';
import {push} from 'react-router-redux';
import {VimStorage} from '../utils/VimStorage';

export function* logoutWatcher() {
	yield takeEvery(Actions.LOGOUT, loginWorker);
}

function* loginWorker() {
	VimStorage.account = null;
	VimStorage.ownerKey = null;
	yield put(push('/index'));
}