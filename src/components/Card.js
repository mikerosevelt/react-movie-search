import React from 'react';

import './style.css';

const Card = (props) => {
	return (
		<div className="card mt-5 mx-auto">
			<img src={props.poster} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.year}</p>
				{/* <p className="card-text">{props.director}</p> */}
			</div>
		</div>
	);
};

export default Card;
