import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

import './styles/Pagos.css';

class Pagos extends React.Component {
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
			<div className="Pagos">
				<h1 className="title">Control de pagos</h1>
				<div className="Pagos_container">
					<div className="Pagos_header">
						<div className="space"/>
						<div className="space">Pago del mes</div>
						<div className="space">Pago restante</div>
						<div className="space">Total</div>
					</div>{
					this.state.data.map((mesPago, i) => (
						<li key={i} className="Pagos_mes_data row">
							<div className="Pagos_mes col">{mesPago.mes}</div>
							<div className="Pagos_pago col">{mesPago.pago? mesPago.pago: null}</div>
							<div className="Pagos_restante col">{mesPago.pago? Math.max(0, mesPago.costo - mesPago.pago): null}</div>
							<div className="Pagos_total col">{mesPago.costo}</div>
						</li>
					))
				}</div>
			</div>
		);
	}
}

export default Pagos;