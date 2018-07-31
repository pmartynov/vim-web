import React from 'react';
import Btn from '../../commons/buttons/Btn/btn';
import ShowIf from '../../utils/ShowIf';
import Tag from './Tag/Tag';
import CssUtils from '../../../utils/CssUtils';
import {connect} from 'react-redux';
import {getAuth, getSinglePost} from '../../../selectors/selectors';
import renderHTML from 'react-render-html';
import MarkdownParser from '../../../utils/MarkdownParser';
import Actions from '../../../utils/Actions';
import Constants from '../../../utils/Constants';
import './postInfo.css';

class PostInfo extends React.Component {

	componentDidMount() {
		const workingWidth = parseInt(CssUtils.getProperty('--working-width'), 10);
		const postWidth = parseInt(CssUtils.getProperty('--post-width'), 10);
		let newHeight = this.container.clientHeight;
		if (workingWidth === postWidth) {
			const {height, width} = this.props.size;
			newHeight = (height / width) * workingWidth;
		}
		CssUtils.setProperty('--single-post-min-height', newHeight + 'px');
	}

	render() {
		const {author, title, description, tags, cost = Constants.EOS.COST.PHOTO, buePhoto, isAuth} = this.props;
		return (
			<div className="container_post-info" ref={ref => this.container = ref}>
				<div className="title_post-info">
					<label>Author name</label>
					<span>{author}</span>
				</div>
				<div className="description_post-info">
					<div className="post-title_post-info">{title}</div>
					{description}
					<ShowIf show={tags && tags.length > 0} className="tags_post-info content-row-start">
						{renderTags(tags)}
					</ShowIf>
				</div>
				<div className="bue_post-info">container_app
					<div className="cost_post-info">
						<label>Cost</label>
						<span>{cost}</span>
					</div>
					<ShowIf show={isAuth}>
						<Btn className="blue-btn" value="BUE THIS PHOTO" onClick={buePhoto}/>
					</ShowIf>
				</div>
			</div>
		);
	}
}

function renderTags(tags) {
	return tags.map(
		(tag, index) => tag !== 'steepshot' ? <Tag key={index} value={tag} className="tag_post-info"/> : null
	);
}


const mapStateToProps = (state) => {
	const {author, description, title, tags, image_size} = getSinglePost(state);
	return {
		description: renderHTML(MarkdownParser.parse(description)),
		title: renderHTML(MarkdownParser.parseTitle(title)),
		author,
		tags,
		image_size,
		isAuth: getAuth(state).authorized
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buePhoto: (e) => {
			e.stopPropagation();
			dispatch({type: Actions.POST.BUE.REQUEST});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);