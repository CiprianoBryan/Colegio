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
		let periods = ['I', 'II', 'III', 'IV', 'Promedio Final'];
		return (
			<div className="Notas">
				<h1 className="title">Notas</h1>
				<div className="Notas_container">
					<div className="row">
						<div className="col"/>
						<div className="col row">{
							periods.map((period, i) => (
								<li key={i} className="labelPeriod col">{period}</li>
							))
						}</div>
					</div>
					{
						this.state.data.map((curso, i) => (
							<li key={i}>
								<CursoNotas curso={curso}/>
							</li>
						))
					}
				</div>
			</div>
		);
	}
}

export default Notas;