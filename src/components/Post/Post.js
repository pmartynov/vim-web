import React, {Component} from "react";
import {withWrapper} from "create-react-server/wrapper";
import './post.css';

export class Post extends Component {

	render() {
		return (
			<div className="container_post">
				<div className="photo_post">
					<div className="likes_post">
						34
					</div>
					<div className="money_post">
						18$
					</div>
					<div className={this.props.liked ? 'liked-btn_post' : 'like-btn_post'} onMouseEnter={() => {}}>
						<div className="like_post"/>
					</div>
				</div>
				<div className="hash-con_post">
					<div className="hash_post">
						QmT3tc4Ju9K7n1fE6smJW32fMz7UHWsgWYjzQDvbEmDbFp
					</div>
				</div>
			</div>
		);
	}
}

export default withWrapper(Post);