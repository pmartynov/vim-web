import {call, put, select, takeEvery} from 'redux-saga/effects';
import Actions from '../utils/Actions';
import SteepshotApi from '../services/SteepshotApi';
import {getAuth, getSinglePost} from '../selectors/selectors';
import EosService from '../services/EosService';
import Constants from '../utils/Constants';

export function* postWatcher() {
	yield takeEvery(Actions.POST.REQUEST, postWorker);
}

function* postWorker(params) {
	const response = yield call(() => SteepshotApi.getPostInfo(params.url));
	const postsIds = [response.url];
	const postsObj = {
		[response.url]: response
	};
	yield put({type: Actions.POST.SUCCESS, posts: postsObj, postsIds});
}

export function* buePhotoWatcher() {
	yield takeEvery(Actions.POST.BUE.REQUEST, buePhotoWorker);
}

function* buePhotoWorker() {
	try {
		const {body, json_metadata} = yield select(getSinglePost);
		const ipfs = json_metadata.ipfs_photo;
		const {account, ownerKey} = yield select(getAuth);

		//TODO remove when will be implemented create post on eos
		yield call(() => EosService.addPhotoToBlockchain(Constants.EOS.USER.CREATOR.OWNER_KEY,
			Constants.EOS.USER.CREATOR.ACCOUNT, body, ipfs));

		yield call(() => EosService.buyPhoto(ownerKey, account, Constants.EOS.USER.CREATOR.ACCOUNT, body, ipfs));
		yield put({type: Actions.POST.BUE.SUCCESS});
		yield put({type: Actions.MODAL.INFO.SHOW, title: 'Transaction ID', message: 'tesfsdfsdfsdfsdfsdfsdfsdfasgafwefgsgwrgw'});
	} catch (e) {
		yield put({type: Actions.POST.BUE.ERROR, message: 'Что-то пошло не так', error: e});
	}
}

