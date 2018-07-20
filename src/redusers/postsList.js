import Actions from "../utils/Actions";

const initialState = {
	postsIds: [],
	hasMore: true,
	offset: null,
	limit: 16
};

export default function postsList(state = initialState, action) {
	switch (action.type) {
		case Actions.POSTS.SUCCESS:
			return {
				...state,
				postsIds: [...state.postsIds, ...action.postsIds],
				hasMore: action.hasMore,
				offset: action.offset
			};
		default:
			return state;
	}
}