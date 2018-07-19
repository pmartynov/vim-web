import React from 'react';
import './grayInput.css';
import ShowIf from "../../utils/ShowIf";

class GrayInput extends React.PureComponent {

	get value() {
		return this.field.value;
	}

	select() {
		this.field.select();
	}

	render() {
		return (
			<div className={'container_gray-input ' + (this.props.className || '')}>
				<ShowIf show={this.props.label}>
					<p>{this.props.label}</p>
				</ShowIf>
				{React.cloneElement(<input ref={ref => this.field = ref}/>,	{...this.props, className:''})}
			</div>
		)
	}
}

export default GrayInput;