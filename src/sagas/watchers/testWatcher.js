import {takeEvery} from 'redux-saga/effects';
import {test} from "../workers/test";

export function* testWatcher() {
	yield takeEvery('INIT_SCROLL', test)
}