import React, {Component} from "react";
import {connect} from "react-redux";
import CoverImg from "../CoverImg/CoverImg";
import './post.css';

class Post extends Component {

	render() {
		return (
			<div className="container_post">
				<CoverImg src={this.props.imgUrl}/>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	const post = state.posts[props.postId];
	const imgUrl = post.media[0] && post.media[0]['thumbnails'] && post.media[0]['thumbnails']['256'] ?
		post.media[0]['thumbnails']['256'] : post.body;
	return {
		imgUrl
	}
};

export default connect(mapStateToProps)(Post);