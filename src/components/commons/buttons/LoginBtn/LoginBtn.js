import React, {Component} from "react";
import {connect} from "react-redux";
import Btn from "../Btn/btn";
import ShowIf from "../../../utils/ShowIf";
import {push} from "react-router-redux";
import {logoutAction} from "../../../../actions/login";
import './loginBtn.css';

class LoginBtn extends Component {

	render() {
		return (
			<div className="container_login-btn">
				<ShowIf show={this.props.authorized}>
					<div className="logout_container" onClick={this.props.logout}>
						<div className="logout-img"/>
					</div>
				</ShowIf>
				<ShowIf show={!this.props.authorized && (this.props.location !== '/login')}>
					<Btn className="blue-btn" value="Login" onClick={this.props.login}/>
				</ShowIf>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authorized: state.auth.user && state.auth.userId && state.auth.postingKey,
		location: state.router.location.pathname
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: () => {
			dispatch(push('/login'))
		},
		logout: () => {
			dispatch(logoutAction())
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn);