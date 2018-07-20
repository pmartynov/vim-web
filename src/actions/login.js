import {push} from "react-router-redux";
import Actions from "../utils/Actions";

export function login(user, postingKey) {
	return dispatch => {
		dispatch({
			type: Actions.AUTH.LOGIN,
			user,
			postingKey,
			userId: 1
		});
	}
}

export function logout() {
	return dispatch => {
		dispatch({
			type: Actions.AUTH.LOGOUT
		});
		dispatch(push('/login'));
	}
}