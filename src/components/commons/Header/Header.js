import React, {Component} from 'react';
import LoginBtn from '../buttons/LoginBtn/LoginBtn';
import Btn from '../buttons/Btn/btn';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import './header.css';

class Header extends Component {

	render() {
		return (
			<div className="container_header">
				<div className="body_header main_container">
					<div className="logo_header" onClick={this.props.gotoIndex}/>
					<div className="right_header">
						<LoginBtn/>
						<a href='https://alpha.steepshot.io' target="_blank" rel="noopener noreferrer">
							<Btn className="white-btn" value="Upload photo" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		gotoIndex: () => {
			dispatch(push('/index'));
		}
	};
};

export default connect(null, mapDispatchToProps)(Header);