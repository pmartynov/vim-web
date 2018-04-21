const initialState = {
};


export default function post(state = initialState, action) {
	switch (action.type) {
		case 'CREATE_POST':
			return {
				...state,
				file: action.file
			};
		default:
			return state;
	}
}