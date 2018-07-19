import React, {Component, Fragment} from "react";
import Modal from "../commons/Modal/Modal";
import {connect} from "react-redux";
import CssUtils from "../../utils/CssUtils";

class Global extends Component {

	constructor(props) {
		super(props);
		this.resize = this.resize.bind(this);
		CssUtils.updateGlobalCssProperties();
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	}

	resize() {
		CssUtils.updateGlobalCssProperties();
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