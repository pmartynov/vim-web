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