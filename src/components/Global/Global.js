import React, {Component, Fragment} from "react";
import Modal from "../Modal/Modal";
import {connect} from "react-redux";
import AppUtils from "../../utils/AppUtils";

class Global extends Component {

	constructor(props) {
		super(props);
		this.resize = this.resize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	}

	resize() {
		this.props.dispatch({
			type: 'WINDOW_SET_SIZE',
			width: AppUtils.getWidth(),
			height: AppUtils.getHeight()
		});
	}

	render() {
		return (
			<Fragment>
				<Modal/>
			</Fragment>
		);
	}
}

export default connect()(Global);