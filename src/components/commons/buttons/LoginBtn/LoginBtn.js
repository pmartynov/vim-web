import React, {Component} from 'react';
import {connect} from 'react-redux';
import Btn from '../Btn/btn';
import ShowIf from '../../../utils/ShowIf';
import {push} from 'react-router-redux';
import Actions from '../../../../utils/Actions';
import {getAuth} from '../../../../selectors/selectors';
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
		authorized: getAuth(state).authorized,
		location: state.router.location.pathname
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: () => {
			dispatch(push('/login'));
		},
		logout: () => {
			dispatch({type: Actions.LOGOUT});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn);