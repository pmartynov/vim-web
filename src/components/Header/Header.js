import React, {Component} from "react";
import {connect} from "react-redux";
import {withWrapper} from "create-react-server/wrapper";
import './header.css';
import {createPost} from "../../actions/post";

class Header extends Component {

	imageChanged(event) {
		event.preventDefault();
		this.props.dispatch(createPost(event.target.files[0]));
	}

	render() {
		return (
			<div className="container_header">
				<div className="logout_header">
					<div className="logout-img_header"/>
				</div>
				<button className="create_header">
					<input type="file"
								 className="input-img_header"
								 accept="image/*"
								 onChange={this.imageChanged.bind(this)}/>
					Upload photo
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {

	}
};

export default withWrapper(connect(mapStateToProps)(Header));