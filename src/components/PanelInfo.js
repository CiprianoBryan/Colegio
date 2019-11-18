import React from 'react';
import Gravatar from './Gravatar';

import './styles/PanelInfo.css';

function PanelInfo(props) {
    return (
		<div className="PanelInfo">
			<div className="avatar">
				<Gravatar 
					className="PanelInfo_avatar"
					id={props.alumno.id}
					alt="avatar"
				/>
			</div>
			<div className="row">
				<div className="label">Apellidos: </div>
				<div className="lastName">Cipriano Tarazona</div>
			</div>
			<div className="row">
				<div className="label">Nombres:</div>
				<div className="firstName">{props.alumno.firstName}</div>
			</div>
			<div className="row">
				<div className="label">Grado:</div>
				<div className="grade">{props.alumno.grade}</div>
			</div>
		</div>
	);
}

export default PanelInfo;