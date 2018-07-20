import React, {Component} from "react";
import Helmet from "../utils/Helmet";
import {connect} from "react-redux";
import Post from "../commons/Post/Post";
import Constants from "../../utils/Constants";
import Actions from "../../utils/Actions";
import Scroll from "../commons/Scroll/Scroll";
import './index.css';

class Index extends Component {

	getPosts() {
		const posts = [];
		for (let post in this.props.posts) {
			posts.push(<Post postId={post} key={post}/>)
		}
		return posts;
	}

	render() {
		return (
			<Scroll point={Constants.SCROLL_POINTS.BODY}
			        deltaForFetch={1000}
			        request={Actions.POSTS.REQUEST}
			        success={Actions.POSTS.SUCCESS}
			        error={Actions.POSTS.ERROR}
			>
				<div className="container_index">
					<Helmet title='Index'/>
					{this.getPosts()}
				</div>
			</Scroll>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
};

const mapDispatchToProps = () => {
	return {

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);