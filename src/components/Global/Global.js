import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import CssUtils from "../../utils/CssUtils";
import InfoModal from '../commons/InfoModal/InfoModal';

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
				<InfoModal/>
			</Fragment>
		);
	}
}

export default connect()(Global);