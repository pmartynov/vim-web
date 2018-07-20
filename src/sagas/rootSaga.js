import {all} from 'redux-saga/effects';
import {postsWatcher} from "./watchers/postsWatcher";

export default function* rootSaga() {
	yield all([
		postsWatcher(),
	])
}