import React, { Fragment, Component } from 'react';
import Axios from 'axios';

import Navbar from '../components/Navbar';
// import Input from '../components/Input';
import Card from '../components/Card';
import { render } from '@testing-library/react';

class App extends Component {
	state = {
		title: 1,
		movie: {
			title: 'title',
			year: '2012',
			poster: 'test',
		},
		movies: [],
	};

	inputChangeHandler = (e) => {
		this.setState({
			title: e.target.value,
		});
	};

	handleButtonSearch = () => {
		Axios.get(
			`http://www.omdbapi.com/?apikey=238d4944&s=${this.state.title}`
		).then((result) => {
			this.setState({
				movies: result.data.Search,
			});
			console.log(this.state.movies);
		});
	};

	render() {
		return (
			<Fragment>
				<Navbar />
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="input-group mt-5 col-6">
								<input
									onChange={this.inputChangeHandler}
									type="text"
									name="input"
									className="form-control"
									placeholder="Search movie"
								/>
								<div className="input-group-append">
									<button
										onClick={this.handleButtonSearch}
										className="btn btn-outline-secondary"
										type="button"
										id="button-addon2"
									>
										Search
									</button>
								</div>
							</div>
							<div class="col-lg">
								<div className="row mt-5">
									{this.state.movies.map((movie) => {
										return (
											<Card
												title={movie.Title}
												year={movie.Year}
												poster={movie.Poster}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default App;
