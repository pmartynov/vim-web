export default function posts(state = {}, action) {
	switch (action.type) {
		case 'GET_POSTS_SUCCESS':
			return {
				...state,
				...action.posts
			};
		default:
			return state;
	}
}