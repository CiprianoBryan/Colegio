import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Calendar from 'react-calendar';
import api from '../api';

import './styles/Asistencias.css';

class Asistencias extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined
	};

	monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
		"julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

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
			this.assistanceToCalendar();
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
	}

	assistanceToCalendar = res => {
		let monthNumber = (res? res.activeStartDate: new Date()).getMonth();
		let monthName = this.monthNames[monthNumber];
		try {
			this.state.data[monthName].forEach(day => {
				try {
					let element = document.querySelector(`[aria-label="${day.date}"]`).parentElement;
					element.classList.add(day.motive);
				} catch {}
			});
		} catch {}
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
					onActiveDateChange={this.assistanceToCalendar}
					minDate={new Date(new Date().getFullYear(), 0, 1)}
					maxDate={new Date(new Date().getFullYear(), 11, 31)}
					value={new Date()}
				/>
			</div>
		);
	}
}

export default Asistencias;