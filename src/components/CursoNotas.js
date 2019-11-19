import React from 'react';

import './styles/CursoNotas.css';

function CursoNotas(props) {
    return (
		<div className="CursoNotas">
			<div>
				{props.curso.name}
			</div>
			{
				props.curso.notas.map((nota, i) => (
					<li key={i} className="CursoNotas_nota">{nota}</li>
				))
			}
			</div>
	);
}

export default CursoNotas;