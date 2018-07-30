import Actions from "../utils/Actions";

const initialState = {
	account: '',
	ownerKey: '',
	loginError: ''
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case Actions.LOGIN.SUCCESS:
			return {
				...state,
				account: action.account,
				ownerKey: action.ownerKey,
			};
		case Actions.LOGOUT:
			return initialState;
		case Actions.LOGIN.ERROR:
			return {
				...state,
				loginError: action.message
			};

		default:
			return state;
	}
}