import React, {Component} from "react";
import Helmet from "../utils/Helmet";
import {connect} from "react-redux";
import Post from "../commons/Post/Post";
import Constants from "../../utils/Constants";
import Actions from "../../utils/Actions";
import Scroll from "../commons/Scroll/Scroll";
import {getPostsList} from "../../selectors/selectors";
import './index.css';

class Index extends Component {

	getPosts() {
		const posts = [];
		for (let id of this.props.postsIds) {
			posts.push(<Post postId={id} key={id}/>)
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
			        hasMore={this.props.hasMore}
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
	const postsList = getPostsList(state);
	return {
		postsList,
		postsIds: postsList.postsIds,
		hasMore: postsList.hasMore
	}
};

const mapDispatchToProps = () => {
	return {

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);