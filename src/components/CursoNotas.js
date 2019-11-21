import React from 'react';

import './styles/CursoNotas.css';

function CursoNotas(props) {
    return (
		<div className="CursoNotas row">
			<div className="courseName col">
				{props.curso.name}
			</div>
			<div className="col row">{
				props.curso.notas.map((nota, i) => (
					<li key={i} className="CursoNotas_nota col">{nota}</li>
				))
			}</div>
		</div>
	);
}

export default CursoNotas;