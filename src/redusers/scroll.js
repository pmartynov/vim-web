import Actions from "../utils/Actions";

export default function scroll(state = {}, action) {
	switch (action.type) {
		case Actions.SCROLL.INIT:
			return {
				...state,
				[action.point]: {
					active: true,
					request: action.request,
					success: action.success,
					error: action.error
				}
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
								}
							};
						default:
					}
				}
			}
			return state;
	}
}