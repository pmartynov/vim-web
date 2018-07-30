import React, {Component} from 'react';
import {connect} from 'react-redux';
import './infoModal.css';
import ShowIf from '../../utils/ShowIf';

class InfoModal extends Component {

	render() {
		return (
			<ShowIf show={this.props.show} className="container_info-modal">
				<div className="header_info-modal">
				</div>
				<div className="body_info-modal">
				</div>
				<div className="footer_info-modal">
				</div>
			</ShowIf>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		show: false
	};
};


const mapDispatchToProps = (dispatch) => {
	return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(InfoModal);