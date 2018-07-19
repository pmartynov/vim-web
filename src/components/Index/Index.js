import React, {Component} from "react";
import Helmet from "../common/Helmet";
import {connect} from "react-redux";
import {getPosts} from "../../actions/posts";
import Post from "../Post/Post";
import './index.css';

class Index extends Component {

	constructor(props) {
		super(props);
		props.dispatch(getPosts());
	}

	getPosts() {
		const posts = [];
		for (let post in this.props.posts) {
			posts.push(<Post postId={post} key={post}/>)
		}
		return posts;
	}


	render() {
		if (this.props.posts.length) {
			return null;
		}
		return (
			<div className="container_index">
				<Helmet title='Index'/>
				{this.getPosts()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
};

export default connect(mapStateToProps)(Index);