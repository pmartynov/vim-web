import Actions from "../utils/Actions";

const initialState = {
};

export default function image(state = initialState, action) {
	switch (action.type) {
		case Actions.IMAGE.SUCCESS:
			return {
				...state,
				...action.image
			};
		default:
			return state;
	}
}