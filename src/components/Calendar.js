import React from 'react';
import ReactCalendar from 'react-calendar';

import './styles/Calendar.css';

const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", 
	"julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

class Calendar extends React.Component {
	state = {
		view: 'month'
	};

	componentDidMount() {
		this.assistanceToCalendar();
	}

	assistanceToCalendar = res => {
		let monthNumber = (res? res.activeStartDate: new Date()).getMonth();
		let monthName = monthNames[monthNumber];
		try {
			this.props.asistencia[monthName].forEach(({date, motive}) => {
				try {
					let element = document.querySelector(`[aria-label="${date}"]`).parentElement;
					element.classList.add(motive);
				} catch {}
			});
		} catch {}
	}

	onDrillActive = res => {
		if (res.view === 'month') {
			this.assistanceToCalendar(res);
		}
		this.setState({
			view: res.view
		});
	}

	render() {
		return (
			<React.Fragment>
				{this.state.view === 'month' &&
					<div className="unselect"/>
				}
				<ReactCalendar
					onActiveDateChange={this.assistanceToCalendar}
					minDate={new Date(new Date().getFullYear(), 0, 1)}
					maxDate={new Date(new Date().getFullYear(), 11, 31)}
					onDrillDown={this.onDrillActive}
					onDrillUp={this.onDrillActive}
					calendarType={"US"}
					value={new Date()}
				/>
			</React.Fragment>
		);
	}
}

export default Calendar;