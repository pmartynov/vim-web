import Actions from "../utils/Actions";

const initialState = {
	show: false,
	message: '',
	title: ''
};

export default function infoModal(state = initialState, action) {
	switch (action.type) {
		case Actions.MODAL.INFO.SHOW:
			return {
				show: true,
				message: action.message,
				title: action.title
			};
		case Actions.MODAL.INFO.HIDE:
			return initialState
		default:
			return state;
	}
}