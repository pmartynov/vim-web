import React, {Component} from "react";
import {connect} from "react-redux";
import {logout} from "../../../actions/login";
import ShowIf from "../../utils/ShowIf";
import './header.css';

class Header extends Component {

	logout() {
		this.props.dispatch(logout())
	}

	render() {
		return (
			<div className="container_header">
				<div className="body_header main_container">
					<ShowIf show={this.props.authorized}>
						<div className="logout_header" onClick={this.logout.bind(this)}>
							<div className="logout-img_header"/>
						</div>
						<button className="create_header">
							Upload photo
						</button>
					</ShowIf>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authorized: state.auth.user && state.auth.userId && state.auth.postingKey
	}
};

export default connect(mapStateToProps)(Header);