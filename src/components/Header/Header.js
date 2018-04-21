import React, {Component} from "react";
import {connect} from "react-redux";
import {withWrapper} from "create-react-server/wrapper";
import './header.css';

export class Header extends Component {

	render() {
		return (
			<div className="container_header">
				<button className="log-btn_header">Upload photo</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {}
};

export default withWrapper(connect(mapStateToProps)(Header));