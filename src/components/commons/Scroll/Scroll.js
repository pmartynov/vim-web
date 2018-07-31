import React from 'react';
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import ReactResizeDetector from 'react-resize-detector';
import Actions from '../../../utils/Actions';
import Spinner from '../../Spinner/Spinner';
import './scroll.css';
import ShowIf from '../../utils/ShowIf';

class Scroll extends React.Component {

	constructor(props) {
		super(props);
		this.onScrollFrame = this.onScrollFrame.bind(this);
		this.renderTrackVertical = this.renderTrackVertical.bind(this);
		this.update = this.update.bind(this);
		props.initScroll();
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.location !== this.props.location || nextProps.hasMore !== this.props.hasMore;
	}

	onScrollFrame(values) {
		const {deltaForFetch, active, hasMore} = this.props;
		if (active && hasMore && (values.scrollHeight - values.scrollTop < deltaForFetch)) {
			this.props.shouldFetchFunc(this.props.request);
		}
	}

	update() {
		this.forceUpdate();
	}

	renderTrackVertical() {
		const {scrollStyle} = this.props;
		return <div className={'default_scroll ' + (scrollStyle || '')}/>;
	}

	static hideHorizontalThumb() {
		return <div className="hide"/>;
	}

	render() {
		return (
			<Scrollbars
				renderTrackVertical={this.renderTrackVertical}
				renderThumbHorizontal={Scroll.hideHorizontalThumb}
				onScrollFrame={this.onScrollFrame}
			>
				<div className={this.props.className}>
					{this.props.children}
					<ShowIf show={this.props.hasMore}>
						<div className="loader_scroll">
							<Spinner/>
						</div>
					</ShowIf>
					<ReactResizeDetector handleHeight onResize={this.update}/>
				</div>
			</Scrollbars>
		);
	}
}

Scroll.defaultProps = {
	deltaForFetch: 400
};

const mapStateToProps = (state, props) => {
	const scrollState = state.scroll[props.point] || {};
	const {active, request, deltaForFetch, hasMore} = scrollState;
	return {
		active,
		request,
		deltaForFetch,
		hasMore,
		location: state.router.location
	};
};

const mapDispatchToProps = (dispatch, props) => {

	return {
		initScroll: () => {
			dispatch({
				type: Actions.SCROLL.INIT,
				point: props.point
			});
		},
		shouldFetchFunc: (request) => {
			dispatch({
				type: request
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Scroll);
