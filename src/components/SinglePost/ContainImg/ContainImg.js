import React from 'react';
import './containImg.css';

const ContainImg = ({src}) => {
	const background = {backgroundImage: `url(${src})`};
	return (
		<div className="container_contain-img" style={background}/>
	)
};

export default ContainImg;