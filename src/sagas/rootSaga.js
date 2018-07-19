import {testWatcher} from "./watchers/testWatcher";
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
	yield all([
		testWatcher(),
	])
}