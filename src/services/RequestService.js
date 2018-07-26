class RequestService {

	static get(url, options) {
		let fullUrl;
		fullUrl = `${url}${convertOptionsToRequestString(options)}`;
		return fetch(fullUrl, {
			method: 'GET'
		})
			.then(RequestService.processResponse)
	}

	static post(url, data) {
		const options = {
			method: 'POST',
			mode: "cors"
		};

		if (data instanceof FormData) {
			options.body = data;
		} else {
			options.headers = {
				'Content-Type': 'application/json'
			};
			options.body = JSON.stringify(data);
		}

		return fetch(url, options)
			.then(RequestService.processResponse);

	}

	static processResponse(response) {
		if ((response.status === 200) || (response.status === 201)) {
			const contentType = response.headers.get("content-type");
			if (contentType && contentType.indexOf("application/json") !== -1) {
				return response.json();
			}
			return response;
		}
		return Promise.reject(response);
	}
}

function convertOptionsToRequestString(options) {
	if (!options) return '';

	let optionsArray = [];
	for (let key in options) {
		if (options[key]) optionsArray.push(key + '=' + convertIfBool(options[key]));
	}
	return '?' + optionsArray.join('&');
}

function convertIfBool(option) {
	if (option === true) {
		return "1";
	} else if (option === false) {
		return "0";
	} else {
		return option;
	}
}

export default RequestService;