import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSinglePost} from '../../selectors/selectors';
import Actions from '../../utils/Actions';
import ContainImg from './ContainImg/ContainImg';
import PostInfo from './PostInfo/PostInfo';
import MarkdownParser from '../../utils/MarkdownParser';
import renderHTML from 'react-render-html';
import './singlePost.css';


class SinglePost extends Component {
	constructor(props) {
		super(props);
		if (!props.url) {
			props.getPostInfo();
		}
	}

	render() {
		const {url, body, author, description, title, tags, image_size, buePhoto} = this.props;
		if (!url) {
			return null;
		}
		return (
			<div className="container_single">
				<ContainImg src={body}/>
				<PostInfo author={author} title={title} description={description} tags={tags} size={image_size}
				          bueFunc={buePhoto}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const {author, description, title, tags, body, url, image_size} = getSinglePost(state);
	return {
		description: renderHTML(MarkdownParser.parse(description)),
		title: renderHTML(MarkdownParser.parseTitle(title)),
		author, tags, body, url, image_size
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		getPostInfo: () => {
			dispatch({type: Actions.POST.REQUEST, url: props.match.params.author + '/' + props.match.params.permlink});
		},
		buePhoto: (e) => {
			e.stopPropagation();
			dispatch({type: Actions.POST.BUE.REQUEST});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);