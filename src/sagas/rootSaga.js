import {all} from 'redux-saga/effects';
import {postsWatcher} from "./postsSaga";
import {scrollWatcher} from "./scrollSaga";
import {buePhotoWatcher, postWatcher} from './postSaga';
import {loginWatcher} from "./loginSaga";
import {logoutWatcher} from './logoutSaga';

export default function* rootSaga() {
	yield all([
		postsWatcher(),
		scrollWatcher(),
		postWatcher(),
		loginWatcher(),
		logoutWatcher(),
		buePhotoWatcher()
	])
}