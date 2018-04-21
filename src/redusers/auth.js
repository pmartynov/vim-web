const initialState = {
	user: 'a',
	postingKey: 'a',
	userId: 1
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				user: action.user,
				postingKey: action.postingKey,
				userId: action.userId
			};
		default:
			return state;
	}
}