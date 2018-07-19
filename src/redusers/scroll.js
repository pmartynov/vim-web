export default function scroll(state = {}, action) {
	switch (action.type) {
		case 'INIT_SCROLL':
			return {
				...state,
				[action.point]: {
					active: false,
					should: 0
				}
			};
		case 'SHOULD_FETCH':
			return {
				...state,
				[action.point]: {
					...state[action.point],
					should: state[action.point].should + 1
				}
			};
		default:
			return state;
	}
}