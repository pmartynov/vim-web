import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import CssUtils from "../../utils/CssUtils";

class Global extends Component {

	constructor() {
		super();
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
			</Fragment>
		);
	}
}

export default connect()(Global);