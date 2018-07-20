import React, {Component} from "react";
import {connect} from "react-redux";
import './post.css';

class Post extends Component {

	render() {
		const background = {backgroundImage: `url(${this.props.imgUrl})`};
		return (
			<div className="container_post" style={background} />
		);
	}
}

const mapStateToProps = (state, props) => {
	const post = state.posts[props.postId];
	return {
		imgUrl: post.media[0]['thumbnails']['256']
	}
};

export default connect(mapStateToProps)(Post);