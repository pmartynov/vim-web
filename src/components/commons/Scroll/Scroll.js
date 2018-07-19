import React from 'react';
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import ReactResizeDetector from 'react-resize-detector';
import './scroll.css';

class Scroll extends React.Component {

	constructor(props) {
		super(props);
		this.onScrollFrame = this.onScrollFrame.bind(this);
		this.renderTrackVertical = this.renderTrackVertical.bind(this);
		this.update = this.update.bind(this);
		Scroll.hideHorizontalThumb = Scroll.hideHorizontalThumb.bind(this);
		props.initScroll();
	}

	onScrollFrame(values) {
		const {deltaForFetch} = this.props;
		if (values.scrollHeight - values.scrollTop < deltaForFetch) {
			this.props.shouldFetchFunc();
		}
	}

	update() {
		this.forceUpdate();
	}

	renderTrackVertical() {
		return <div className={'default_scroll ' + (this.props.customScrollStyle || '')}/>
	}

	static hideHorizontalThumb() {
		return <div className="hide"/>
	}

	render() {
		const {children} = this.props;
		return (
			<Scrollbars
				renderTrackVertical={this.renderTrackVertical}
				renderThumbHorizontal={Scroll.hideHorizontalThumb}
				onScrollFrame={this.onScrollFrame}
			>
				<div className={this.props.className}>
					{children}
					<ReactResizeDetector handleHeight onResize={this.update}/>
				</div>
			</Scrollbars>
		);
	}
}

Scroll.defaultProps = {
	deltaForFetch: 0
};

const mapStateToProps = () => {
	return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		initScroll: () => {
			dispatch({
				type: 'INIT_SCROLL',
				point: ownProps.point
			})
		},
		shouldFetchFunc: () => {
			dispatch({
				type: 'SHOULD_FETCH',
				point: ownProps
			})
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Scroll);
