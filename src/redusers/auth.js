import Actions from "../utils/Actions";

const initialState = {
	user: '',
	activeKey: '',
	loginError: ''
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case Actions.AUTH.LOGIN:
			return {
				...state,
				user: action.user,
				activeKey: action.activeKey,
			};
		case Actions.AUTH.LOGOUT:
			return {
				...state,
				user: '',
				activeKey: '',
			};
		case Actions.AUTH.ERROR:
			return {
				...state,
				loginError: action.loginError
			};

		default:
			return state;
	}
}