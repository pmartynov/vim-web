import React, {Component} from 'react';
import {connect} from 'react-redux';
import './infoModal.css';

class InfoModal extends Component {

	render() {
		return (
			<div className="container_info-modal">
				<div className="header_info-modal">
				</div>
				<div className="body_info-modal">
				</div>
				<div className="footer_info-modal">
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};


const mapDispatchToProps = (dispatch) => {
	return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(InfoModal);