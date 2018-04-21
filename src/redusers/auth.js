const initialState = {
	user: 'a',
	postingKey: 'a'
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				user: action.user,
				postingKey: action.postingKey
			};
		default:
			return state;
	}
}