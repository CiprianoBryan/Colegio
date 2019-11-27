import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Swipe from '../components/Swipe';
import api from '../api';

import './styles/Pagos.css';

class Eventos extends React.Component {
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
			const data = await api.mesesPago.list();
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
			<div className="Eventos">
				<h1 className="title">Eventos</h1>
				<Swipe
					images={['campesino.jpg', 'madre.jpg', 'padre.jpg']}
				/>
			</div>
		);
	}
}

export default Eventos;