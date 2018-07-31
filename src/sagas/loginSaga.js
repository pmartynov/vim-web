import {call, put, select, takeEvery} from 'redux-saga/effects';
import Actions from '../utils/Actions';
import {getAuthInputs} from '../selectors/selectors';
import EosService from '../services/EosService';
import {push} from 'react-router-redux';

export function* loginWatcher() {
	yield takeEvery(Actions.LOGIN.REQUEST, loginWorker);
}

function* loginWorker() {
	try {
		const loginData = yield select(getAuthInputs);
		const publicKey = yield call(() => EosService.privateToPublic(loginData.ownerKey));
		const response = yield call(() => EosService.getKeyAccounts(publicKey));
		if (response.account_names.includes(loginData.account)) {
			yield put({type: Actions.LOGIN.SUCCESS, account: loginData.account, ownerKey: loginData.ownerKey});
			yield put(push('/index'));
			yield put(push('/index'));
		} else {
			yield put({type: Actions.LOGIN.ERROR, message: 'Неверный ключ или аккаунт.'});
		}
	} catch (e) {
		yield put({type: Actions.LOGIN.ERROR, message: 'Что-то пошло не так', error: e});
	}
}