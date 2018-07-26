import Actions from "../utils/Actions";

export default function inputs(state = {}, action) {
	switch (action.type) {
		case Actions.INPUT.CHANGE:
			return {
				...state,
				[action.point]: action.value
			};
		default:
			return state;
	}
}