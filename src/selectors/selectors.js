import {createSelector} from 'reselect';
import Constants from "../utils/Constants";

export const getPosts = state => state.posts;
export const getPostsList = state => state.postsList;
export const getPostPath = state => state.router.location.pathname.substr(5);

export const getSinglePost = createSelector(
	getPosts,
	getPostPath,
	(posts, path) => {
		let postInfo = {};
		if (posts) {
			for(let postUrl in posts) {
				if (postUrl.includes(path)) {
					postInfo = posts[postUrl];
					break;
				}
			}
		}

		return postInfo;
	}
);

export const getAuthInputs = state => {
	return {
		account: state.inputs[Constants.INPUT.ACCOUNT],
		ownerKey: state.inputs[Constants.INPUT.OWNER_KEY]
	}
};

export const getAuth = state => {
	return {
		account: state.auth.account,
		ownerKey: state.auth.ownerKey,
		authorized: !!state.auth.account && !!state.auth.ownerKey
	}
};
