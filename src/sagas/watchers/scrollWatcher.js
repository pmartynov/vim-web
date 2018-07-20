import {takeEvery} from 'redux-saga/effects';
import Actions from "../../utils/Actions";
import {scrollWorker} from "../workers/scrollWorker";

export function* scrollWatcher() {
	yield takeEvery(Actions.SCROLL.ADD_LISTENER, scrollWorker)
}