import React from 'react';
import './postInfo.css';
import Btn from "../../commons/buttons/Btn/btn";
import ShowIf from "../../utils/ShowIf";
import Tag from "./Tag/Tag";
import CssUtils from "../../../utils/CssUtils";

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
		const {author, description, tags, cost = '1,550 STEEM', byeFunc} = this.props;
		return (
			<div className="container_post-info" ref={ref => this.container = ref}>
				<div className="title_post-info">
					<label>Author name</label>
					<span>{author}</span>
				</div>
				<div className="description_post-info">
					{description}
					<ShowIf show={tags && tags.length > 0} className="tags_post-info content-row-start">
						{renderTags(tags)}
					</ShowIf>
				</div>
				<div className="bye_post-info">container_app
					<div className="cost_post-info">
						<label>Cost</label>
						<span>{cost}</span>
					</div>
					<Btn className="blue-btn" value="BYE THIS PHOTO" onClick={byeFunc}/>
				</div>
			</div>
		);
	}
}

function renderTags(tags) {
	return tags.map(
		(tag, index) => tag !== 'steepshot' ? <Tag key={index} value={tag} className="tag_post-info"/> : null
	)
}

export default PostInfo;