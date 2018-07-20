import Actions from "../utils/Actions";

const initialState = {
	user: '',
	postingKey: '',
	userId: null
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case Actions.AUTH.LOGIN:
			return {
				...state,
				user: action.user,
				postingKey: action.postingKey,
				userId: action.userId
			};
		case Actions.AUTH.LOGOUT:
			return {
				...state,
				user: '',
				postingKey: '',
				userId: 0
			};
		default:
			return state;
	}
}