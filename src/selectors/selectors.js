import {createSelector} from 'reselect';

export const getPosts = state => state.posts;
export const getPostsList = state => state.postsList;

export const getPostsListWithPosts = createSelector(
	[getPosts, getPostsList],
	(posts, postsList) => {
		return {
			...postsList,
			posts: postsList.postsIds.map(postsId => posts[postsId])
		}
	}
);