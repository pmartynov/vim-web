import {put} from 'redux-saga/effects';

export function* scrollWorker(params) {
	yield put({type: params.request});
}