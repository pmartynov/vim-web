import {takeEvery} from 'redux-saga/effects';
import {postsWorker} from "../workers/postsWorker";

export function* postsWatcher() {
	yield takeEvery('POSTS_REQUEST', postsWorker)
}