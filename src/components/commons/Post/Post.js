import React, {Component} from "react";
import {connect} from "react-redux";
import './post.css';

class Post extends Component {

	render() {
		const background = {backgroundImage: `url(${this.props.url})`};
		return (
			<div className="container_post" style={background} />
		);
	}
}

const mapStateToProps = (state, props) => {
	const {url} = state.posts[props.postId];
	return {
		url
	}
};

export default connect(mapStateToProps)(Post);