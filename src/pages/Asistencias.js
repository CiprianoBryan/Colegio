import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Calendar from '../components/Calendar';
import api from '../api';

import './styles/Asistencias.css';

class Asistencias extends React.Component {
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
				data: data.asistencia
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
			<div className="Asistencia">
				<h1 className="title">Asistencia</h1>
				<Calendar
					asistencia={this.state.data}
				/>
			</div>
		);
	}
}

export default Asistencias;