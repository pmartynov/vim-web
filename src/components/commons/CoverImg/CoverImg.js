import React, {Component} from "react";
import './coverImg.css';

class CoverImg extends Component {
	render() {
		const background = {backgroundImage: `url(${this.props.src})`};
		return (
			<div className="container_cover-img" style={background} />
		);
	}
}

export default CoverImg;