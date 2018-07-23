import {createSelector} from 'reselect';

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
