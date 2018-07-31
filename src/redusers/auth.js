import Actions from "../utils/Actions";
import {VimStorage} from '../utils/VimStorage';

const initialState = {
	account: VimStorage.account || '',
	ownerKey: VimStorage.ownerKey || '',
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
			return {
				account: '',
				ownerKey: '',
				loginError: ''
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