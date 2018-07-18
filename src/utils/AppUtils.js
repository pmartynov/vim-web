class AppUtils {
	static isBrowser = typeof window !== 'undefined';
	static getWidth = () => document && document.documentElement && document.documentElement.clientWidth;
	static getHeight = () => document && document.documentElement && document.documentElement.clientHeight;
}

export default AppUtils;