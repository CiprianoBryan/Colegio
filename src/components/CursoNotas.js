import React from 'react';

import './styles/CursoNotas.css';

function CursoNotas(props) {
    return (
		<div className="row">
			<div className="courseName">
				{props.curso.name}
			</div>
			<div className="CursoNotas_notas row col">{
				props.curso.notas.map((nota, i) => (
					<div key={i} className="CursoNotas_nota col">{nota}</div>
				))
			}</div>
		</div>
	);
}

export default CursoNotas;