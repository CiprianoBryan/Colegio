import React from 'react';
import {Link} from 'react-router-dom';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import PanelInfo from '../components/PanelInfo';
import api from '../api';

import './styles/Panel.css';
import visibilityModal from '../utils/VisibilityModal';

import cheveron_left from '../images/cheveron-left.svg';
import cheveron_right from '../images/cheveron-right.svg';

function Cheveron(props) {
	if (props.show) {
		return (
			<React.Fragment>
				<img className="button_hidden_img" src={cheveron_left} alt="cheveron_left"/>
				<div className="button_hidden_message">Ocultar</div>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<div className="button_hidden_message">Mostrar</div>
				<img className="button_hidden_img" src={cheveron_right} alt="cheveron_right"/>
			</React.Fragment>
		);
	}
}

class Panel extends React.Component {
	state = {
		loading: true,
		error: null,
		showData: true,
		panelWidth: [0, 0, 0],
		data: undefined
	};

	componentDidMount() {
		visibilityModal('hidden');
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

	handleClick = e => {
		let widths = this.state.showData? [100, 361, 47]: [0, 0, 0];
		this.setState({
			showData: !this.state.showData,
			panelWidth: widths
		});
	};

	render() {
		if (this.state.loading && !this.state.data) {
			return <PageLoading/>;
		}
		if (this.state.error) {
			return <PageError error={this.state.error}/>
		}
		visibilityModal('visible');
		return (
			<div className="Panel row">
				<div className="Panel_info" style={{transform: `translateX(-${this.state.panelWidth[0]}%)`}}>
					<PanelInfo alumno={this.state.data}/>
				</div>
				<div className="Panel_button" style={{transform: `translateX(-${this.state.panelWidth[1]}%)`}}>
					<div className="button_hidden" onClick={this.handleClick}>
						<Cheveron show={this.state.showData}/>
					</div>
				</div>
				<div className="Panel_main" style={{transform: `translateX(-${this.state.panelWidth[2]}%)`}}>
					<div className="Panel_main_buttons">	
						<Link className="btn btn-classic" to="/notas">
							Notas
						</Link>
						<Link className="btn btn-classic" to="/asistencias">
							Asistencias
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Panel;