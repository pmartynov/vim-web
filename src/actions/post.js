import {getStore} from "../store";

export function changeLike(postId) {
	const state = getStore().getState();
	const userId = state.auth.userId;
	const post = state.posts[postId];
	return dispatch => {
		if (post.likes.includes(userId)) {
			dispatch(dislike(postId, userId));
		} else {
			dispatch(like(postId, userId));
		}
	}
}

function dislike(postId, userId) {
	return {
		type: 'DISLIKE_POST',
		postId,
		userId
	}
}

function like(postId, userId) {
	return {
		type: 'LIKE_POST',
		postId,
		userId
	}
}

export function createPost(file) {
	return dispatch => {
		dispatch({
			type: 'CREATE_POST',
			file
		})
	}
}