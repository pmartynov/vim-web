import React from "react";
import {Link} from "react-router-dom";
import Helmet from "./utils/Helmet";

class NotFound extends React.Component {

	render() {
		if (this.props.staticContext) {
			this.props.staticContext.status = 404;
		}
		return (
			<div>
				<Helmet title="Page Not Found"/>
				<h1>Page Not Found</h1>
				<p>Go to <Link to="/">index page</Link>.</p>
			</div>
		);
	}
}

export default NotFound;