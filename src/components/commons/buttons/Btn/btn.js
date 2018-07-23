import React from "react";
import './btn.css';

const Btn = ({value, onClick, className}) =>
	<div className={'btn ' + (className || '')} onClick={onClick}>
		{value || 'OK'}
	</div>
;

export default Btn;