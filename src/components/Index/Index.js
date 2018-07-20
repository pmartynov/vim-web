import React, {Component} from "react";
import Helmet from "../utils/Helmet";
import {connect} from "react-redux";
import Post from "../commons/Post/Post";
import Constants from "../../utils/Constants";
import Actions from "../../utils/Actions";
import './index.css';
import Scroll from "../commons/Scroll/Scroll";

class Index extends Component {

	constructor(props) {
		super(props);
		props.addScrollListener();
	}

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

const mapDispatchToProps = (dispatch) => {
	return {
		addScrollListener: () => {
			dispatch({
				type: Actions.ADD_SCROLL_LISTENER,
				point: Constants.SCROLL_POINTS.BODY
			})
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);