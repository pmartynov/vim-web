import {push} from "react-router-redux";
import Actions from "../utils/Actions";

export function login(user, activeKey) {
	return dispatch => {
		dispatch({
			type: Actions.AUTH.LOGIN,
			user,
			activeKey,
		});
	}
}

export function logoutAction() {
	return dispatch => {
		dispatch({
			type: Actions.AUTH.LOGOUT
		});
		dispatch(push('/login'));
	}
}