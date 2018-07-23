class PostUtils {
	static getPermlinkFromUrl(url) {
		const elements = url.split('/');
		return elements[elements.length - 1];
	}

	static getUsernameFromUrl(url) {
		const elements = url.split('/');
		return elements[elements.length - 2];
	}
}

export default PostUtils;