import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import CursoNotas from '../components/CursoNotas';
import api from '../api';

import './styles/Notas.css';

class Notas extends React.Component {
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
			console.log(data);
			console.log(data.notas);
			this.setState({
				loading: false,
				data: data.notas
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
			<div className="Notas">{
				this.state.data.map((curso, i) => (
					<li key={i}>
						<CursoNotas curso={curso}/>
					</li>
				))
			}</div>
		);
	}
}

export default Notas;