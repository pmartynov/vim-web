class ResponseUtils {
	static toConsole(promise) {
		promise
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			})
	}

}

export default ResponseUtils;