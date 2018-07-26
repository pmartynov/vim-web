import React from 'react';
import ShowIf from "../../utils/ShowIf";
import {connect} from "react-redux";
import Actions from "../../../utils/Actions";
import './grayInput.css';

class GrayInput extends React.Component {
	constructor(props) {
		super(props);
		if (props.setValue) {
			props.init();
		}
	}

	render() {
		const inputProps = {
			...this.props
		};
		delete inputProps.className;
		delete inputProps.init;
		delete inputProps.setValue;

		return (
			<div className={'container_gray-input ' + (this.props.className || '')}>
				<ShowIf show={this.props.label}>
					<p>{this.props.label}</p>
				</ShowIf>
				{React.cloneElement(<input/>, {...inputProps})}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		value: state.inputs[props.point] || '',
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		init: () => {
			dispatch({type: Actions.INPUT.CHANGE, point: props.point, value: props.setValue})
		},
		onChange: e => {
			dispatch({type: Actions.INPUT.CHANGE, point: props.point, value: e.target.value})
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(GrayInput);