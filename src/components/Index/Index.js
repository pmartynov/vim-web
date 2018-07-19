import React, {Component} from "react";
import Helmet from "../utils/Helmet";
import {connect} from "react-redux";
import Post from "../commons/Post/Post";
import Constants from "../../utils/Constants";
import Actions from "../../utils/Actions";
import './index.css';

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