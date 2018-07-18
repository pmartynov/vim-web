import Constants from "./Constants";
import AppUtils from "./AppUtils";

class CssUtils {

	static updateGlobalCssProperties() {
		CssUtils.setProperty('--WORKING-WIDTH',
			Math.floor(AppUtils.getWidth() / Constants.POST_WIDTH) * Constants.POST_WIDTH + ' px')
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

export default CssUtils;