import Actions from "../utils/Actions";

const initialState = {
	account: '',
	activeKey: '',
	loginError: ''
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case Actions.LOGIN.SUCCESS:
			return {
				...state,
				account: action.account,
				activeKey: action.activeKey,
			};
		case Actions.LOGOUT:
			return {
				...state,
				account: '',
				activeKey: '',
			};
		case Actions.LOGIN.ERROR:
			return {
				...state,
				loginError: action.message
			};

		default:
			return state;
	}
}