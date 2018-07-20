import {takeEvery} from 'redux-saga/effects';
import {postsWorker} from "../workers/postsWorker";
import Actions from "../../utils/Actions";

export function* postsWatcher() {
	yield takeEvery(Actions.POSTS.REQUEST, postsWorker)
}