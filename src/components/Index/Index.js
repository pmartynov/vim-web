import React, {Component} from "react";
import Helmet from "../common/Helmet";
import './index.css';
import Button from "react-bootstrap/es/Button";
import {withWrapper} from "create-react-server/wrapper";
import {createAccount} from "../../services/account";
import {Post} from "../Post/Post";

export class Index extends Component {

	send() {
		let result = createAccount();
		console.log(result);
	}

	render() {
		return (
			<div className="container_index">
				<Helmet title='Index'/>

				<Post />
			</div>
		);
	}
}

export default withWrapper(Index);