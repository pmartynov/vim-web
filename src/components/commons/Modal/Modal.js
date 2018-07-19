import React, {Component} from "react";
import {connect} from "react-redux";
import ShowIf from "../../utils/ShowIf";
import {push} from "react-router-redux";
import './modal.css';

class Modal extends Component {

	ok() {
		this.props.dispatch({
			type: 'CLOSE_MODAL'
		});
		this.props.dispatch(push('/index'))
	}

	render() {
		return (
			<ShowIf show={this.props.show}>
				<div className="container_modal">
					<div className="body_modal">
						<div className="title_modal">
							Registration complete
						</div>
						<div className="delimiter_modal"/>
						<div className="message_modal">
							Be sure to save your password (you see it just below). Do not tell anyone and do not lose it. It will not
							be possible to restore it.
						</div>
						<div className="hash_modal">
							QmT3tc4Ju9K7n1fE6smJW32fMz7UHWsgWYjzQDvbEmDbFp
						</div>
						<button onClick={this.ok.bind(this)}>Ok</button>
					</div>
				</div>
			</ShowIf>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state.modal
	}
};

export default connect(mapStateToProps)(Modal);