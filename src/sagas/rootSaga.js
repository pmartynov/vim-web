import {all} from 'redux-saga/effects';
import {postsWatcher} from "./postsSaga";
import {scrollWatcher} from "./scrollSaga";
import {postWatcher} from "./postSaga";

export default function* rootSaga() {
	yield all([
		postsWatcher(),
		scrollWatcher(),
		postWatcher()
	])
}