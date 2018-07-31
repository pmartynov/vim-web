import Actions from '../utils/Actions';

export function showInfoModal(title, message) {
	return {
		type: Actions.MODAL.INFO.SHOW,
		message,
		title
	}
}

export function hideInfoModal() {
	return {
		type: Actions.MODAL.INFO.HIDE,
	}
}