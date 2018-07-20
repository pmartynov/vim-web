import Actions from "../utils/Actions";

const initialState = {

};

export default function posts(state = initialState, action) {
	switch (action.type) {
		case Actions.POSTS.SUCCESS:
			return {
				...state,
				...action.posts
			};
		default:
			return state;
	}
}