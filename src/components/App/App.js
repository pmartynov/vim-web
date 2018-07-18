import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import './app.css';

class App extends Component {

	render() {
		return (
			<div className="main_app">
				<Header />
				<div className="body_app">
					{this.props.children}
				</div>
				<Modal />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {}
};

export default connect(mapStateToProps)(App);