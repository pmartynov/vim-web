export default function modal(state = {}, action) {
	switch (action.type) {
		case 'REGISTRATION_SUCCESS':
			return {
				show: true,
				hash: action.postingKey
			};
		case 'CLOSE_MODAL':
			return {
				show: false,
				hash: ''
			};
		default:
			return state;
	}
}