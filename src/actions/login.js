import {push} from "react-router-redux";

export function login(user, postingKey) {
	return dispatch => {
		dispatch({
			type: "LOGIN_SUCCESS",
			user,
			postingKey,
			userId: 1
		});
	}
}

export function logout() {
	return dispatch => {
		dispatch({
			type: "LOGOUT"
		});
		dispatch(push('/login'));
	}
}