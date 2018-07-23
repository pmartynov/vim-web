import RequestService from "./RequestService";
import Constants from "../utils/Constants";

class SteepshotApi {

	static getTopPosts(offset, limit) {
		const url = Constants.STEEPSHOT.URL.BASE + Constants.STEEPSHOT.URL.POSTS.TOP;
		const options = {
			offset,
			limit,
			show_nsfw: false,
			show_low_rated: false
		};
		return RequestService.get(url, options);
	}

	static getPostInfo(url) {
		url = `${Constants.STEEPSHOT.URL.BASE}/post/${url}/info`;
		const options = {
			show_nsfw: true,
			show_low_rated: true
		};
		return RequestService.get(url, options);
	}
}

export default SteepshotApi;
