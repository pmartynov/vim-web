import React, {Component} from "react";
import Helmet from "../utils/Helmet";
import {connect} from "react-redux";
import Post from "../commons/Post/Post";
import Constants from "../../utils/Constants";
import Actions from "../../utils/Actions";
import {getPostsList} from "../../selectors/selectors";
import './index.css';

class Index extends Component {

	constructor(props) {
		super(props);
		props.addScrollListener();
	}

	componentWillUnmount() {
		this.props.removeScrollListener();
	}


	getPosts() {
		const posts = [];
		for (let id of this.props.postsIds) {
			posts.push(<Post postId={id} key={id}/>)
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
	const postsList = getPostsList(state);
	return {
		postsList,
		postsIds: postsList.postsIds,
		hasMore: postsList.hasMore
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addScrollListener: () => {
			dispatch({
				type: Actions.SCROLL.ADD_LISTENER,
				point: Constants.SCROLL_POINTS.BODY,
				request: Actions.POSTS.REQUEST,
				success: Actions.POSTS.SUCCESS,
				error: Actions.POSTS.ERROR,
				deltaForFetch: 1000
			})
		},
		removeScrollListener: () => {
			dispatch({
				type: Actions.SCROLL.REMOVE_LISTENER,
				point: Constants.SCROLL_POINTS.BODY,
			})
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);