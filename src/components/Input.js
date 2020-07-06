import React from 'react';

const Input = () => {
	return (
		<div>
			<div className="input-group mt-5 col-6">
				<input
					type="text"
					name="input"
					className="form-control"
					placeholder="Search movie"
				/>
				<div className="input-group-append">
					<button
						className="btn btn-outline-secondary"
						type="button"
						id="button-addon2"
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default Input;
