import Constants from "./Constants";
import AppUtils from "./AppUtils";

class CssUtils {

	static updateGlobalCssProperties() {
		CssUtils.setProperty('--working-width', getWorkingWidth());
	}

	static getProperty(name) {
		let root = document.querySelector(':root');
		let rootStyles = getComputedStyle(root);
		return rootStyles.getPropertyValue(name);
	}

	static setProperty(name, value) {
		let root = document.querySelector(':root');
		root.style.setProperty(name, value)
	}
}

function getWorkingWidth() {
	const workingPadding = parseInt(CssUtils.getProperty('--working-padding')) * 2;
	let result = Math.floor((AppUtils.getWidth() - workingPadding) / Constants.POST_WIDTH);
	result = (result || 1) * Constants.POST_WIDTH;
	return result + 'px';
}

export default CssUtils;