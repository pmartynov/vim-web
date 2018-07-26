import {takeEvery, select, call, put} from 'redux-saga/effects';
import Actions from "../utils/Actions";
import {getLoginData} from "../selectors/selectors";
import EosService from "../services/EosService";
import {push} from "react-router-redux";

export function* loginWatcher() {
	yield takeEvery(Actions.LOGIN.REQUEST, loginWorker)
}

function* loginWorker() {
	try {
		const loginData = yield select(getLoginData);
		const publicKey = yield call(() => EosService.privateToPublic(loginData.activeKey));
		const response = yield call(() => EosService.getKeyAccounts(publicKey));
		if (response.account_names.includes(loginData.account)) {
			yield put({type: Actions.LOGIN.SUCCESS, account: loginData.account, activeKey: loginData.activeKey});
			yield put(push('/index'));
		} else {
			yield put({type: Actions.LOGIN.ERROR, message: 'Неверный ключ или аккаунт.'})
		}
	} catch (e) {
		yield put({type: Actions.LOGIN.ERROR, message: 'Что-то пошло не так', error: e})
	}
}