import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSinglePost} from "../../selectors/selectors";
import Actions from "../../utils/Actions";
import ContainImg from "./ContainImg/ContainImg";
import PostInfo from "./PostInfo/PostInfo";
import './singlePost.css';

class SinglePost extends Component{
	constructor(props) {
		super(props);
		if(!props.url) {
			props.getPostInfo();
		}
	}

	render() {
		const {url, body, author, description, tags, image_size} = this.props;
		if (!url) {
			return null;
		}
		return (
			<div className="container_single">
				<ContainImg src={body}/>
				<PostInfo author={author} description={description} tags={tags} size={image_size}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const {author, description, tags, body, url, image_size} = getSinglePost(state);
	return {
		author, description, tags, body, url, image_size
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		getPostInfo: () => {
			dispatch({type: Actions.POST.REQUEST, url: props.match.params.author + '/' + props.match.params.permlink})
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);