import {takeEvery} from 'redux-saga/effects';
import {test} from "../workers/test";

export function* addScrollListenerWatcher() {
	yield takeEvery('INIT_SCROLL', test)
}