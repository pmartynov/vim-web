import React, {Component} from "react";
import {connect} from "react-redux";
import Actions from "../../../utils/Actions";
import './coverImg.css';

class CoverImg extends Component {

	componentDidMount() {
		if(!this.props.image) {
			this.props.loadImg(this.props.src)
		}
	}

	render() {
		const background = {backgroundImage: `url(${this.props.image || this.props.src})`};
		return (
			<div className="container_cover-img" style={background} />
		);
	}
}

const mapStateToProps = (state, props) => {
	const image = state.image[props.src];
	return {
		image
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		loadImg: () => {
			dispatch({type: Actions.IMAGE.REQUEST, url: props.src})
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CoverImg);