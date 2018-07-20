import {put} from 'redux-saga/effects';
import Actions from "../../utils/Actions";

export function* postsWorker() {
	yield put({type: Actions.POSTS.SUCCESS});
}