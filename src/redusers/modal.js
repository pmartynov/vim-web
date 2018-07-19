export default function modal(state = {}, action) {
	switch (action.type) {
		case 'CLOSE_MODAL':
			return {
				show: false,
				hash: ''
			};
		default:
			return state;
	}
}