import React, {Component} from "react";
import {withWrapper} from "create-react-server/wrapper";
import './post.css';
import {connect} from "react-redux";

class Post extends Component {

	like() {

	}

	render() {
		console.log(this.props);
		const style = {
			backgroundImage: `url("${this.props.url}")`,
		};
		return (
			<div className="container_post">
				<div className="photo_post" style={style}>
					<div className="likes_post">
						{this.props.likes.length}
					</div>
					<div className="money_post">
						${this.props.payout}
					</div>
					<div className={this.props.liked ? 'liked-btn_post' : 'like-btn_post'}
							 onMouseEnter={() => {}} onClick={this.like.bind(this)}>
						<div className="like_post"/>
					</div>
				</div>
				<div className="hash-con_post">
					<div className="hash_post">
						{this.props.hash}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		...state.posts[props.postId]
	}
};

export default withWrapper(connect(mapStateToProps)(Post));