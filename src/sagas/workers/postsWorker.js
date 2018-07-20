import {call, select, put} from 'redux-saga/effects';
import Actions from "../../utils/Actions";
import {getPostsList} from "../../selectors/selectors";
import SteepshotApi from "../../services/SteepshotApi";

export function* postsWorker() {
	const postsList = yield select(getPostsList);
	const response = yield call(() => SteepshotApi.getTopPosts(postsList.offset, postsList.limit));
	const posts = response.results;
	if (postsList.offset) {
		posts.splice(0, 1);
	}
	const postsIds = posts.map(post => post.url);
	const postsObj = {};
	posts.forEach(post => {
		postsObj[post.url] = post;
	});
	yield put({type: Actions.POSTS.SUCCESS, hasMore: response.offset !== postsList.offset, offset: response.offset, posts: postsObj, postsIds});
}