import Constants from './Constants';
import AppUtils from './AppUtils';

let localStor;
if (AppUtils.isBrowser) {
	localStor = window.localStorage
} else {
	localStor = {
		getItem: () => null,
		setItem: () => null
	}
}

export const VimStorage = new Proxy({}, {
	get: function (target, name) {
		name = Constants.STORAGE.PREFIX + name;
		try {
			return JSON.parse(localStor.getItem(name));
		} catch (e) {
			localStor.setItem(name, null);
			return null;
		}
	},
	set: function (target, name, value) {
		name = Constants.STORAGE.PREFIX + name;
		localStor.setItem(name, JSON.stringify(value));
		target[name] = value;
		return true;
	}
});