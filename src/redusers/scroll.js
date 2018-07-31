import Actions from "../utils/Actions";
const scrollInitState = {
	active: false,
	request: 'EMPTY_SCROLL_FETCH',
	success: null,
	error: null,
	deltaForFetch: 1000,
	hasMore: true
};
export default function scroll(state = {}, action) {
	switch (action.type) {
		case Actions.SCROLL.INIT:
			return {
				...state,
				[action.point]: scrollInitState
			};
		case Actions.SCROLL.ADD_LISTENER:
			return {
				...state,
				[action.point]: {
					active: true,
					request: action.request,
					success: action.success,
					error: action.error,
					deltaForFetch: action.deltaForFetch || 1000
				}
			};
		case Actions.SCROLL.REMOVE_LISTENER:
			return {
				...state,
				[action.point]: scrollInitState
			};
		default:
			for(let point in state) {
				const scroll = state[point];
				if (scroll.request && scroll.success && scroll.error) {
					switch (action.type) {
						case scroll.request:
							return {
								...state,
								[point]: {
									...state[point],
									active: false,
								}
							};
						case scroll.success:
						case scroll.error:
							return {
								...state,
								[point]: {
									...state[point],
									active: true,
									hasMore: action.hasMore
								}
							};
						default:
					}
				}
			}
			return state;
	}
}