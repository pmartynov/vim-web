import React, {Component} from "react";
import Helmet from "../utils/Helmet";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import GrayInput from "../commons/GrayInput/GrayInput";
import ShowIf from "../utils/ShowIf";
import Btn from "../commons/buttons/Btn/btn";
import Actions from "../../utils/Actions";
import Constants from "../../utils/Constants";
import './login.css';

class Login extends Component {

	componentDidMount() {
		if (this.props.isAuth) {
			this.props.dispatch(push('/index'))
		}
	}

	render() {
		const {error, login} = this.props;
		return (
			<div className="container_login content-center">
				<Helmet title='Login'/>
				<ShowIf show={!!error}>
					<div className="error_login content-center">
						{error}
					</div>
				</ShowIf>
				<div className="form_login content-column-start">
					<div className="title_login content-column-start">
						WELCOME TO VIM
					</div>
					<GrayInput className="input_login" type="text" point={Constants.INPUT.ACCOUNT} placeholder="Account name"/>
					<GrayInput className="input_login" type="password" point={Constants.INPUT.OWNER_KEY}
					           placeholder="Private active key"/>
					<Btn className="blue-btn submit_login" onClick={login} value="Login"/>
				</div>
				<div className="background_login"/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const {account, ownerKey, loginError} = state.auth;
	return {
		isAuth: !!account && !!ownerKey,
		error: loginError
	}
};


const mapDispatchToProps = (dispatch) => {
	return {
		login: () => {
			dispatch({type: Actions.LOGIN.REQUEST})
		}
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);