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

export function registration(user) {
	return dispatch => {

		dispatch({
			type: 'REGISTRATION_SUCCESS',
			postingKey: 'QmT3tc4Ju9K7n1fE6smJW32fMz7UHWsgWYjzQDvbEmDbFp',
			user,
			userId: 11
		})
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