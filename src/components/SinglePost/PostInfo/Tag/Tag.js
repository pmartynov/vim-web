import React from 'react';
import './tag.css';

const Tag = ({value, className}) => {

	return (
		<div className={'container_tag content-center ' + (className || '')}>
			{value.toUpperCase()}
		</div>
	)
};

export default Tag;