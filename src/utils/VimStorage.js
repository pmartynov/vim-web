import Constants from './Constants';

export const VimStorage = new Proxy({}, {
	get: function (target, name) {
		name = Constants.STORAGE.PREFIX + name;
		try {
			return JSON.parse(localStorage.getItem(name));
		} catch (e) {
			localStorage.setItem(name, null);
			return null;
		}
	},
	set: function (target, name, value) {
		name = Constants.STORAGE.PREFIX + name;
		localStorage.setItem(name, JSON.stringify(value));
		target[name] = value;
		return true;
	}
});