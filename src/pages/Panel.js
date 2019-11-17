import React from 'react';
import {Link} from 'react-router-dom';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

import './styles/Panel.css';

class Panel extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({
			loading: true,
			error: null
		});
		try {
			const data = await api.alumnos.read("1");
			this.setState({
				loading: false,
				data: data
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
	}

	render() {
		if (this.state.loading && !this.state.data) {
			return <PageLoading/>;
		}
		if (this.state.error) {
			return <PageError error={this.state.error}/>
		}
		return (
			<React.Fragment>
				<div className="container">
					<div className="Badges__buttons">
						<button>Ocultar</button>
					</div>
					<div>
						{this.state.data.firstName} {this.state.data.lastName}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Panel;