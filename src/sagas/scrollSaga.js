import {put, takeEvery} from 'redux-saga/effects';
import Actions from "../utils/Actions";

export function* scrollWatcher() {
	yield takeEvery(Actions.SCROLL.ADD_LISTENER, scrollWorker)
}
function* scrollWorker(params) {
	yield put({type: params.request});
}