import React, {Component} from "react";
import LoginBtn from "../buttons/LoginBtn/LoginBtn";
import './header.css';

class Header extends Component {

	render() {
		return (
			<div className="container_header">
				<div className="body_header main_container">
					<LoginBtn/>
					<div className="btn white-btn">
						Upload photo
					</div>
				</div>
			</div>
		);
	}
}

export default Header;