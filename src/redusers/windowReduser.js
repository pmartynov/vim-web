import Constants from "../utils/Constants";
import AppUtils from "../utils/AppUtils";

const initialState = {
	width: AppUtils.getWidth(),
	height: AppUtils.getHeight(),
	workingWidth: Math.floor(AppUtils.getWidth() / Constants.POST_WIDTH)
};

export default function windowReduser(state = initialState, action) {
	switch (action.type) {
		case 'WINDOW_SET_SIZE':
			return {
				...state,
				width: action.width,
				height: action.height,
				workingWidth: Math.floor(action.width / Constants.POST_WIDTH)
			};
		default:
			return state;
	}
}