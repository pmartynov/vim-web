import React, {Component} from "react";
import Helmet from "../utils/Helmet";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {login} from "../../actions/login";
import './login.css';
import GrayInput from "../commons/GrayInput/GrayInput";
import ShowIf from "../utils/ShowIf";
import Btn from "../commons/buttons/Btn/btn";

class Login extends Component {

	componentDidMount() {
		if (this.props.isAuth) {
			this.props.dispatch(push('/index'))
		}
	}

	login() {
		this.props.dispatch(login(this.name.value, this.password.value));
		this.props.dispatch(push('/index'));
	}

	render() {
		return (
			<div className="container_login content-center">
				<Helmet title='Login'/>
				<ShowIf show={true}>
					<div className="error_login content-center">
						Incorrect login
					</div>
				</ShowIf>
				<div className="form_login content-column-start">
					<div className="title_login content-column-start">
						WELCOME TO VIM
					</div>
					<GrayInput className="input_login" type="text" point="name" placeholder="Account name" setValue="test"/>
					<GrayInput className="input_login" type="password" point="activeKey" placeholder="Private active key"/>
					<Btn className="blue-btn submit_login" onClick={this.login.bind(this)} value="Login" />
				</div>
				<div className="background_login"/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: !!state.auth.user && !!state.auth.postingKey
	}
};

export default connect(mapStateToProps)(Login);