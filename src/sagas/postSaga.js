import {takeEvery, call, put} from 'redux-saga/effects';
import Actions from "../utils/Actions";
import SteepshotApi from "../services/SteepshotApi";

export function* postWatcher() {
	yield takeEvery(Actions.POST.REQUEST, postWorker)
}

function* postWorker(params) {
	const response = yield call(() => SteepshotApi.getPostInfo(params.url));
	console.log(response);
	const postsIds = [response.url];
	const postsObj = {
		[response.url]: response
	};
	yield put({type: Actions.POST.SUCCESS, posts: postsObj, postsIds});
}