import React from "react";
import './actionBtn.css';

const ActionBtn = ({value, onClick, className}) =>
	<div className={'action-btn ' + (className || '')} onClick={onClick}>
		{value || 'OK'}
	</div>
;

export default ActionBtn;