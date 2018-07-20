import {all} from 'redux-saga/effects';
import {postsWatcher} from "./watchers/postsWatcher";
import {scrollWatcher} from "./watchers/scrollWatcher";

export default function* rootSaga() {
	yield all([
		postsWatcher(),
		scrollWatcher()
	])
}