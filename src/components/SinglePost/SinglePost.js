import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSinglePost} from '../../selectors/selectors';
import Actions from '../../utils/Actions';
import ContainImg from './ContainImg/ContainImg';
import PostInfo from './PostInfo/PostInfo';
import './singlePost.css';


class SinglePost extends Component {
	constructor(props) {
		super(props);
		if (!props.url) {
			props.getPostInfo();
		}
	}

	render() {
		const {url, body} = this.props;
		if (!url) {
			return null;
		}
		return (
			<div className="container_single">
				<ContainImg src={body}/>
				<PostInfo/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const {body, url} = getSinglePost(state);
	return {
		url, body
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		getPostInfo: () => {
			dispatch({type: Actions.POST.REQUEST, url: props.match.params.author + '/' + props.match.params.permlink});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);