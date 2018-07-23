import React from 'react';
import './postInfo.css';
import Btn from "../../commons/buttons/Btn/btn";
import ShowIf from "../../utils/ShowIf";

const PostInfo = ({author, description, tags, cost = '1,550 STEEM', byeFunc = () => {}}) => (
	<div className="container_post-info">
		<div className="title_post-info">
			<label>Author name</label>
			<span>{author}</span>
		</div>
		<div className="description_post-info">
			{description}
			<ShowIf show={tags && tags.length > 0} className="tags_post-info">
				{renderTags(tags)}
			</ShowIf>
		</div>
		<div className="bye_post-info">
			<div className="cost_post-info">
				<label>Cost</label>
				<span>{cost}</span>
			</div>
			<Btn className="blue-btn" value="BYE THIS PHOTO" onClick={byeFunc} />
		</div>
	</div>
);

function renderTags(tags) {
	return tags.map((tag, index) => (
		<div className="tag" key={index} />
	))
}

export default PostInfo;