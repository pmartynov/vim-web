import React, {Component, Fragment} from "react";
import Helmet from "../common/Helmet";
import './index.css';
import {connect} from "react-redux";
import {getPosts} from "../../actions/posts";
import Post from "../Post/Post";

class Index extends Component {

	constructor(props) {
		super(props);
		props.dispatch(getPosts());
		this.getPostsComponents.bind(this);
	}

	getPostsComponents() {
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
			<Fragment>
				<Helmet title='Index'/>
				<div className="container_index">
					{this.getPostsComponents()}
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
};

export default connect(mapStateToProps)(Index);