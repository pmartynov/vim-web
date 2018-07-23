import React, {Component} from "react";
import {connect} from "react-redux";
import CoverImg from "../CoverImg/CoverImg";
import {push} from "react-router-redux";
import './post.css';
import PostUtils from "../../../utils/PostUtils";

class Post extends Component {

	constructor() {
		super();
		this.openPost = this.openPost.bind(this);
	}

	openPost() {
		const {postId} = this.props;
		const postUrl = '/post/' + PostUtils.getUsernameFromUrl(postId) + '/' + PostUtils.getPermlinkFromUrl(postId);
		this.props.dispatch(push(postUrl));
	}

	render() {
		return (
			<div className="container_post" onClick={this.openPost}>
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