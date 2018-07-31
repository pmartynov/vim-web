import React, {Component} from 'react';
import {connect} from 'react-redux';
import './infoModal.css';
import ShowIf from '../../utils/ShowIf';
import Btn from '../buttons/Btn/btn';
import {hideInfoModal} from '../../../actions/infoModal';

class InfoModal extends Component {

	constructor() {
		super();
		this.hideInfoModal = this.hideInfoModal.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.show && nextProps.show) {
			window.addEventListener('click', this.hideInfoModal);
		}
		if (this.props.show && !nextProps.show) {
			window.removeEventListener('click', this.hideInfoModal);
		}
	}

	hideInfoModal(e) {
		if (!this.container.contains(e.target)) {
			this.props.hideInfoModal();
		}
	}

	render() {
		const {message, title, show, hideInfoModal} = this.props;
		return (
			<ShowIf show={show}>
				<div className="container_info-modal" ref={ref => this.container = ref}>
					<div className="header_info-modal content-row-start">
						{title}
					</div>
					<div className="body_info-modal content-center">
						{message}
					</div>
					<div className="footer_info-modal content-center">
						<Btn className="blue-btn" value="OK" onClick={hideInfoModal}/>
					</div>
				</div>
			</ShowIf>
		);
	}
}

const mapStateToProps = (state) => {
	const {show, message, title} = state.infoModal;
	return {
		show,
		message,
		title
	};
};


const mapDispatchToProps = (dispatch) => {
	return {
		hideInfoModal: () => {
			dispatch(hideInfoModal());
		}
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(InfoModal);